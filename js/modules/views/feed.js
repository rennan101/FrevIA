// ==========================================
// FrevAI - Feed View Module
// Feed imersivo, stories, post card, curtidas, salvos, comentários e compartilhamento
// ==========================================

let currentFeedTab = 'news';

function renderStories() {
  const container = document.getElementById('stories-list');
  if (!container) return;

  container.innerHTML = (DB.artists || []).map(artist => `
    <div onclick="openStoryModal('${artist.name}', '${artist.avatar_url}', '${artist.genre}')" class="story-item">
      <div class="story-ring">
        <img src="${getUserAvatarUrl(artist.avatar_url)}" alt="${artist.name}" class="story-avatar" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
      </div>
      <span class="story-label">${artist.name}</span>
    </div>
  `).join('');
}

function formatCommentRelativeTime(dateStr) {
  if (!dateStr) return 'agora';
  try {
    const d = new Date(dateStr);
    const diffMs = Date.now() - d.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSecs < 45) return 'agora';
    if (diffMins < 60) return `há ${diffMins} min`;
    if (diffHours < 24) return `há ${diffHours} h`;
    if (diffDays === 1) return 'ontem';
    if (diffDays < 7) return `há ${diffDays} dias`;
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  } catch {
    return 'recente';
  }
}

function renderCommentItemHtml(c, postId) {
  const currentUserId = currentUserSession.id || '';
  const currentUserName = currentUserSession.name || '';
  const currentUserHandle = (currentUserSession.handle || '').replace('@', '');
  const isAdmin = currentUserSession.role === 'admin';

  const isAuthor = (c.user_id && currentUserId && c.user_id === currentUserId) ||
                   (c.user && currentUserName && c.user.toLowerCase() === currentUserName.toLowerCase()) ||
                   (c.user_handle && currentUserHandle && c.user_handle.toLowerCase() === currentUserHandle.toLowerCase()) ||
                   (c.user && currentUserHandle && c.user.toLowerCase() === currentUserHandle.toLowerCase());

  const canEdit = isAuthor;
  const canDelete = isAuthor || isAdmin;
  const timeLabel = c.time_ago || formatCommentRelativeTime(c.created_at);
  const avatarSrc = getUserAvatarUrl(c.avatar || c.user_avatar);

  return `
    <div class="flex items-start gap-2 text-xs group/comment" id="comment-item-${postId}-${c.id}">
      <img src="${avatarSrc}" alt="${c.user || 'Folião'}" class="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-0.5 border border-gray-200" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
      <div class="comment-bubble flex-1 text-left relative">
        <div class="flex items-center justify-between gap-1 mb-0.5">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-bold text-ink text-[11px]">${c.user || 'Folião'}</span>
            <span class="text-[9px] text-muted font-medium">${timeLabel}</span>
          </div>
          
          <!-- Ações de Editar / Excluir -->
          ${(canEdit || canDelete) ? `
            <div class="flex items-center gap-0.5">
              ${canEdit ? `
                <button type="button" onclick="editComment('${postId}', '${c.id}')" class="comment-action-btn edit" title="Editar comentário" aria-label="Editar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
              ` : ''}
              ${canDelete ? `
                <button type="button" onclick="deleteComment('${postId}', '${c.id}')" class="comment-action-btn delete" title="${isAdmin && !isAuthor ? 'Excluir comentário (Administrador)' : 'Excluir comentário'}" aria-label="Excluir">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
        
        <div id="comment-text-container-${postId}-${c.id}">
          <span class="text-ink-soft text-[11px] leading-relaxed block">${c.text}</span>
        </div>
      </div>
    </div>
  `;
}

function renderPostCommentsHtml(post) {
  const commentsList = (post.comments || []).map(c => renderCommentItemHtml(c, post.id)).join('');
  return `
    <div class="comments-section pt-2 border-t border-gray-100">
      <div class="space-y-2 mb-2" id="comments-container-${post.id}">
        ${commentsList}
      </div>
    </div>
  `;
}

function renderFeedPostHtml(post, index = 0) {
  const commentsList = (post.comments || []).map(c => renderCommentItemHtml(c, post.id)).join('');
  const postMedia = getMediaUrl(post.image || post.media_url);
  const isLiked = (currentUserSession.liked_posts || []).includes(post.id) || !!post.is_liked;
  const isSaved = (currentUserSession.saved_posts || []).includes(post.id) || !!post.is_saved;
  const isFirstItem = index === 0;

  return `
    <article class="feed-card-immersive infinite-scroll-item" id="post-card-${post.id}">
      <div class="feed-card-media">
        ${(post.media_type === 'video' || post.isVideo || (post.image && post.image.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
          <video 
            src="${post.media_url || post.image}" 
            poster="${post.cover_url || ''}" 
            preload="none" 
            controls 
            playsinline 
            class="w-full h-full object-cover" 
            style="max-height: 480px;">
          </video>
        ` : `
          <img 
            src="${postMedia}" 
            alt="${post.title}" 
            loading="${isFirstItem ? 'eager' : 'lazy'}" 
            decoding="async" 
            fetchpriority="${isFirstItem ? 'high' : 'low'}" 
            onerror="this.onerror=null; this.src='${DEFAULT_MEDIA_PLACEHOLDER}'" 
          />
        `}

        <!-- Top-Left Floating Author Pill -->
        <div class="floating-author-pill" onclick="openArtistProfileByAuthor('${post.author}')" title="Ver perfil de ${post.author}">
          <img 
            src="${getUserAvatarUrl(post.avatar)}" 
            alt="${post.author}" 
            loading="${isFirstItem ? 'eager' : 'lazy'}"
            decoding="async" 
            onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" 
          />
          <div class="floating-author-info">
            <div class="flex items-center gap-1.5">
              <span class="name">${post.author}</span>
              ${post.is_admin_post ? `<span class="badge bg-frevo-red text-white text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider shadow-sm">Oficial</span>` : ''}
            </div>
            <span class="sub">${(post.location || '').split(',')[0]}</span>
          </div>
        </div>

        <!-- Top-Right Floating Bookmark Button -->
        <button onclick="toggleSave('${post.id}')" class="floating-save-btn ${isSaved ? 'is-saved' : ''}" aria-label="Salvar Publicação">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? '#FF8A00' : 'none'}" stroke="${isSaved ? '#FF8A00' : 'currentColor'}" stroke-width="2.2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        <!-- Bottom Floating Actions Bar -->
        <div class="floating-actions-bar">
          <div class="flex items-center gap-2">
            <button onclick="toggleCommentsDrawer('${post.id}')" class="floating-circle-btn" aria-label="Comentários" title="Ver e fazer comentários">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>
            <button onclick="sharePost('${post.id}')" class="floating-circle-btn" aria-label="Compartilhar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <button onclick="toggleLike('${post.id}')" class="floating-like-btn ${isLiked ? 'liked' : ''}" aria-label="Curtir">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isLiked ? '#F0442E' : 'none'}" stroke="#F0442E" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="text-xs font-bold text-ink">${post.likes || 0}</span>
          </button>
        </div>
      </div>

      <div class="feed-card-caption-container">
        <div class="flex items-center justify-between mb-1.5">
          <h4 class="font-bold text-xs text-ink">${post.title}</h4>
          <span class="text-[10px] text-muted">${post.time_ago || ''}</span>
        </div>
        <p id="post-text-${post.id}" class="feed-card-text text-xs text-ink-soft leading-relaxed mb-1 ${post.content && post.content.length > 90 ? 'clamped' : ''}">${post.content || ''}</p>
        ${post.content && post.content.length > 90 ? `
          <button type="button" id="post-readmore-${post.id}" onclick="togglePostExpand('${post.id}')" class="feed-read-more-btn">ler mais...</button>
        ` : ''}
        <div class="flex flex-wrap gap-1.5 mt-1">
          ${(post.tags || []).map(t => `<span class="badge bg-[#16C7D9]/15 text-[#127F8B] text-[10px] font-bold">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Gaveta de Comentários Inline Abaixo do Post -->
      <div id="comments-drawer-${post.id}" class="comments-drawer space-y-3">
        <div class="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <span class="text-xs font-bold text-ink" id="comments-count-${post.id}">Comentários (${(post.comments || []).length})</span>
          <button onclick="toggleCommentsDrawer('${post.id}')" class="text-[11px] text-muted hover:text-ink font-semibold">Fechar</button>
        </div>

        <div id="comments-list-${post.id}" class="space-y-2.5 max-h-56 overflow-y-auto pr-1">
          ${commentsList || `<p class="text-[11px] text-muted py-2 text-center">Seja o primeiro folião a comentar!</p>`}
        </div>

        <!-- Formulário de Comentário Inline -->
        <form onsubmit="submitInlineComment(event, '${post.id}')" class="flex gap-2 items-center pt-1 border-t border-gray-200/80">
          <input 
            type="text" 
            id="inline-comment-input-${post.id}" 
            required 
            placeholder="${currentUserSession.role === 'guest' ? 'Faça login para comentar...' : 'Escreva um comentário folião...'}" 
            class="flex-1 px-3.5 py-2 text-xs border border-gray-200 rounded-xl bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange transition-all shadow-inner" 
          />
          <button type="submit" class="btn btn-primary text-white p-2.5 rounded-xl font-bold shadow-sm flex-shrink-0 flex items-center justify-center hover:opacity-95 active:scale-95 transition-all" aria-label="Enviar comentário" title="Enviar comentário">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </article>
  `;
}

function updateCommentsDrawerUI(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const countEl = document.getElementById(`comments-count-${postId}`);
  if (countEl) countEl.innerText = `Comentários (${(post.comments || []).length})`;

  const list = document.getElementById(`comments-list-${postId}`);
  if (list) {
    if (post.comments && post.comments.length > 0) {
      list.innerHTML = post.comments.map(c => renderCommentItemHtml(c, postId)).join('');
    } else {
      list.innerHTML = `<p class="text-[11px] text-muted py-2 text-center">Seja o primeiro folião a comentar!</p>`;
    }
  }
}

async function submitInlineComment(event, postId) {
  event.preventDefault();
  if (currentUserSession.role === 'guest') {
    showPlatformAlert('Crie uma conta ou faça login para comentar!', 'Atenção');
    openSessionModal();
    return;
  }

  const input = document.getElementById(`inline-comment-input-${postId}`);
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  const post = DB.posts.find(p => p.id === postId);

  if (post) {
    if (!post.comments) post.comments = [];
    
    const newComment = {
      id: 'c_' + Date.now(),
      user_id: currentUserSession.id || null,
      user_handle: (currentUserSession.handle || '').replace('@', ''),
      user: currentUserSession.name || (currentUserSession.handle || '').replace('@', ''),
      avatar: currentUserSession.avatar || null,
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    input.value = '';
    if (typeof savePostsLocal === 'function') savePostsLocal();
    updateCommentsDrawerUI(postId);

    // Persistência com AWS
    if (window.awsService && window.awsService.isConnected() && currentUserSession.id) {
      const saved = await window.awsService.addComment(postId, currentUserSession.id, text);
      if (saved && saved.id) {
        newComment.id = saved.id;
        if (typeof savePostsLocal === 'function') savePostsLocal();
      }
    }
  }
}

function editComment(postId, commentId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;
  const comment = (post.comments || []).find(c => c.id === commentId);
  if (!comment) return;

  const container = document.getElementById(`comment-text-container-${postId}-${commentId}`);
  if (!container) return;

  container.innerHTML = `
    <form onsubmit="saveEditedComment(event, '${postId}', '${commentId}')" class="space-y-1.5 pt-1">
      <input 
        type="text" 
        id="edit-comment-input-${postId}-${commentId}" 
        value="${comment.text.replace(/"/g, '&quot;')}" 
        required 
        class="w-full px-2.5 py-1.5 text-xs border border-frevo-orange rounded-lg bg-white text-ink focus:outline-none" 
      />
      <div class="flex gap-1.5 justify-end">
        <button type="button" onclick="cancelCommentEdit('${postId}', '${commentId}')" class="px-2 py-0.5 text-[10px] font-bold text-muted hover:text-ink">
          Cancelar
        </button>
        <button type="submit" class="px-2.5 py-0.5 text-[10px] font-bold bg-frevo-orange text-white rounded-md shadow-sm">
          Salvar
        </button>
      </div>
    </form>
  `;

  const editInput = document.getElementById(`edit-comment-input-${postId}-${commentId}`);
  if (editInput) editInput.focus();
}

async function saveEditedComment(event, postId, commentId) {
  event.preventDefault();
  const input = document.getElementById(`edit-comment-input-${postId}-${commentId}`);
  if (!input || !input.value.trim()) return;

  const newText = input.value.trim();
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const comment = (post.comments || []).find(c => c.id === commentId);
  if (comment) {
    comment.text = newText;
    comment.time_ago = 'editado agora';
    if (typeof savePostsLocal === 'function') savePostsLocal();
    updateCommentsDrawerUI(postId);

    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.updateComment(commentId, newText);
    }
  }
}

function cancelCommentEdit(postId, commentId) {
  updateCommentsDrawerUI(postId);
}

async function deleteComment(postId, commentId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const comment = (post.comments || []).find(c => c.id === commentId);
  if (!comment) return;

  const isAdmin = currentUserSession.role === 'admin';
  const confirmMsg = isAdmin && comment.user_id !== currentUserSession.id
    ? `Administrador: Deseja realmente excluir o comentário de "${comment.user}"?`
    : 'Deseja excluir este comentário?';

  if (confirm(confirmMsg)) {
    post.comments = post.comments.filter(c => c.id !== commentId);
    if (typeof savePostsLocal === 'function') savePostsLocal();
    updateCommentsDrawerUI(postId);

    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteComment(commentId);
    }
  }
}

function switchFeedTab(tabName, btnElement) {
  currentFeedTab = tabName;
  document.querySelectorAll('.feed-tab-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const target = document.getElementById(`feed-tab-${tabName}`);
    if (target) target.classList.add('active');
  }
  renderFeed();
}

function getActiveFeedPosts() {
  if (currentFeedTab === 'foryou') {
    const userFavs = currentUserSession.favorites || [];
    return (DB.posts || []).filter(p => 
      userFavs.includes(p.author_id) || 
      userFavs.includes(p.artist_id) || 
      userFavs.some(favId => {
        const artist = (DB.artists || []).find(a => a.id === favId);
        return artist && (artist.name === p.author || artist.handle === p.handle);
      })
    );
  }

  // Aba Notícias: Todos os posts, priorizando os publicados por Administradores no topo
  return [...(DB.posts || [])].sort((a, b) => {
    const aIsAdmin = a.is_admin_post || (a.author && (a.author.toLowerCase().includes('paço') || a.author.toLowerCase().includes('fundação') || a.author.toLowerCase().includes('salvaguarda')));
    const bIsAdmin = b.is_admin_post || (b.author && (b.author.toLowerCase().includes('paço') || b.author.toLowerCase().includes('fundação') || b.author.toLowerCase().includes('salvaguarda')));
    if (aIsAdmin && !bIsAdmin) return -1;
    if (!aIsAdmin && bIsAdmin) return 1;
    return 0;
  });
}

function renderFeed() {
  const container = document.getElementById('feed-list');
  if (!container) return;

  const activePosts = getActiveFeedPosts();

  if (activePosts.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-frevo-orange/15 text-frevo-orange mx-auto flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 class="font-display font-bold text-base text-ink">Nenhuma publicação por aqui ainda</h3>
        <p class="text-xs text-muted max-w-xs mx-auto">
          ${currentFeedTab === 'foryou' 
            ? 'Você ainda não segue artistas ou seus artistas favoritados ainda não postaram novidades.' 
            : 'Nenhuma notícia publicada no momento.'}
        </p>
        ${currentFeedTab === 'foryou' ? `
          <button onclick="switchView('artists')" class="btn btn-primary text-xs px-4 py-2.5 rounded-xl font-bold shadow-md">
            Descobrir e Seguir Artistas
          </button>
        ` : ''}
      </div>
    `;
    return;
  }

  InfiniteScrollManager.reset('feed');
  const initialLimit = (InfiniteScrollManager.state && InfiniteScrollManager.state.feed) ? InfiniteScrollManager.state.feed.limit : 4;
  const initialPosts = activePosts.slice(0, initialLimit);
  
  container.innerHTML = `
    <div id="feed-items-stream" class="space-y-4">
      ${initialPosts.map((post, idx) => renderFeedPostHtml(post, idx)).join('')}
    </div>
    <div id="sentinel-feed" class="infinite-scroll-sentinel" data-view="feed">
      ${activePosts.length > initialPosts.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais histórias do frevo...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-feed');
  if (sentinel && activePosts.length > initialPosts.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreFeed() {
  const stream = document.getElementById('feed-items-stream');
  const sentinel = document.getElementById('sentinel-feed');
  if (!stream) return;

  const activePosts = getActiveFeedPosts();
  const { page, limit } = InfiniteScrollManager.state.feed;
  const start = (page - 1) * limit;
  const nextPosts = activePosts.slice(start, start + limit);

  if (nextPosts.length > 0) {
    const html = nextPosts.map((post, idx) => renderFeedPostHtml(post, start + idx)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= activePosts.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function toggleCommentsDrawer(postId) {
  const drawer = document.getElementById(`comments-drawer-${postId}`);
  if (!drawer) return;
  const isOpen = drawer.classList.toggle('open');
  if (isOpen) {
    setTimeout(() => {
      const input = document.getElementById(`inline-comment-input-${postId}`);
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        input.focus();
      }
    }, 280);
  }
}

function togglePostExpand(postId) {
  const textEl = document.getElementById(`post-text-${postId}`);
  const btnEl = document.getElementById(`post-readmore-${postId}`);
  if (!textEl) return;

  const isClamped = textEl.classList.contains('clamped');
  if (isClamped) {
    textEl.classList.remove('clamped');
    textEl.classList.add('expanded');
    if (btnEl) btnEl.innerText = 'ler menos';
  } else {
    textEl.classList.add('clamped');
    textEl.classList.remove('expanded');
    if (btnEl) btnEl.innerText = 'ler mais...';
  }
}

function toggleLike(postId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  const post = (DB.posts || []).find(p => p.id === postId);
  if (!post) return;

  if (!Array.isArray(currentUserSession.liked_posts)) {
    currentUserSession.liked_posts = [];
  }

  const alreadyLiked = currentUserSession.liked_posts.includes(postId);
  if (alreadyLiked) {
    currentUserSession.liked_posts = currentUserSession.liked_posts.filter(id => id !== postId);
    post.is_liked = false;
    post.likes = Math.max(0, (post.likes || 1) - 1);
  } else {
    currentUserSession.liked_posts.push(postId);
    post.is_liked = true;
    post.likes = (post.likes || 0) + 1;
  }

  saveCurrentSession();
  if (typeof savePostsLocal === 'function') savePostsLocal();

  if (window.awsService && currentUserSession.id) {
    window.awsService.togglePostLike(postId, currentUserSession.id);
  }

  document.querySelectorAll(`button[onclick*="toggleLike('${postId}')"]`).forEach(btn => {
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', post.is_liked ? '#F0442E' : 'none');
      svg.setAttribute('stroke', '#F0442E');
    }
    const countSpan = btn.querySelector('span');
    if (countSpan) {
      countSpan.innerText = post.likes;
    }
    if (post.is_liked) {
      btn.classList.add('liked');
    } else {
      btn.classList.remove('liked');
    }
  });
}

function toggleSave(postId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  const post = (DB.posts || []).find(p => p.id === postId);
  if (!post) return;

  if (!Array.isArray(currentUserSession.saved_posts)) {
    currentUserSession.saved_posts = [];
  }

  const alreadySaved = currentUserSession.saved_posts.includes(postId);
  if (alreadySaved) {
    currentUserSession.saved_posts = currentUserSession.saved_posts.filter(id => id !== postId);
    post.is_saved = false;
  } else {
    currentUserSession.saved_posts.push(postId);
    post.is_saved = true;
  }

  saveCurrentSession();
  if (typeof savePostsLocal === 'function') savePostsLocal();

  if (window.awsService && currentUserSession.id) {
    window.awsService.toggleSavedPost(postId, currentUserSession.id);
  }

  document.querySelectorAll(`button[onclick*="toggleSave('${postId}')"]`).forEach(btn => {
    if (post.is_saved) {
      btn.classList.add('is-saved');
    } else {
      btn.classList.remove('is-saved');
    }
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', post.is_saved ? '#FF8A00' : 'none');
      svg.setAttribute('stroke', post.is_saved ? '#FF8A00' : 'currentColor');
    }
  });

  if (typeof renderProfileGallery === 'function') {
    const profileTab = document.querySelector('.profile-tab-btn.tab-saved.active');
    if (profileTab || document.getElementById('view-artist-panel')?.classList.contains('active')) {
      renderProfileGallery();
    }
  }
}

function sharePost(postId) {
  const post = (DB.posts || []).find(p => p.id === postId) || { title: 'FrevAI - Cultura do Frevo', id: postId || 'feed' };
  const shareUrl = window.location.origin + window.location.pathname + '#post-' + post.id;
  const shareText = `Confira "${post.title}" no FrevAI: ${shareUrl}`;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-10">
        <div class="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Compartilhar Publicação</h3>
          <p class="text-xs text-muted line-clamp-1">${post.title}</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2.5 pt-1">
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">WhatsApp</span>
        </a>

        <a href="https://instagram.com/direct/inbox/" target="_blank" rel="noopener noreferrer" onclick="copyToClipboard('${shareUrl}', 'Link copiado para colar no Direct!')" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#E1306C] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">Direct</span>
        </a>

        <a href="https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0084FF]/10 text-[#0084FF] hover:bg-[#0084FF]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">Messenger</span>
        </a>
      </div>

      <div class="pt-2">
        <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1.5">Link Direto da Publicação</label>
        <div class="flex gap-2">
          <input type="text" id="share-link-input" readonly value="${shareUrl}" class="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl bg-surface-soft text-ink font-mono select-all focus:outline-none" />
          <button id="btn-copy-share-link" onclick="copyShareLink('${shareUrl}')" class="btn btn-primary text-xs sm:text-sm px-4 py-2.5 rounded-xl font-bold flex items-center gap-1.5 shadow-md">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span id="copy-btn-text">Copiar</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function copyShareLink(url) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      const btnText = document.getElementById('copy-btn-text');
      if (btnText) {
        btnText.innerText = 'Copiado!';
        setTimeout(() => {
          if (btnText) btnText.innerText = 'Copiar';
        }, 2000);
      }
    }).catch(() => {
      prompt('Copie o link abaixo:', url);
    });
  } else {
    prompt('Copie o link abaixo:', url);
  }
}

function copyToClipboard(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showAlertModal(message || 'Copiado para a área de transferência!');
    });
  }
}

function openCommentsModal(postId) {
  const post = (DB.posts || []).find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-10">
        <div class="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Comentários (${(post.comments || []).length})</h3>
          <p class="text-xs text-muted truncate max-w-[260px]">${post.title}</p>
        </div>
      </div>

      <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1" id="modal-comments-list-${post.id}">
        ${(post.comments && post.comments.length > 0) ? post.comments.map(c => renderCommentItemHtml(c, post.id)).join('') : '<p class="text-xs text-muted py-4 text-center">Seja o primeiro a comentar!</p>'}
      </div>
      
      ${currentUserSession.role === 'guest' ? `
        <div class="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center space-y-2">
          <p class="text-xs text-amber-900 font-bold">Deseja participar da conversa?</p>
          <p class="text-[11px] text-amber-700">Faça login ou crie uma conta gratuita para comentar.</p>
          <button onclick="openSessionModal()" class="btn btn-primary text-xs py-2 px-4 rounded-xl font-bold shadow-md">
            Entrar / Criar Conta
          </button>
        </div>
      ` : `
        <div class="flex gap-2 pt-1">
          <input type="text" id="new-comment-input" placeholder="Adicionar comentário como ${currentUserSession.name || currentUserSession.handle}..." class="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
          <button onclick="addComment('${post.id}')" class="btn btn-primary text-xs sm:text-sm rounded-xl px-5 py-2.5 font-bold shadow-md">Publicar</button>
        </div>
      `}
    </div>
  `;

  modal.classList.add('open');
}

function addComment(postId) {
  if (currentUserSession.role === 'guest') {
    showPlatformAlert('Você precisa estar logado para comentar.', 'Atenção');
    openSessionModal();
    return;
  }

  const input = document.getElementById('new-comment-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  const post = (DB.posts || []).find(p => p.id === postId);

  if (post) {
    if (!post.comments) post.comments = [];
    
    const newComment = {
      id: 'c_' + Date.now(),
      user_id: currentUserSession.id || null,
      user_handle: (currentUserSession.handle || '').replace('@', ''),
      user: currentUserSession.name || (currentUserSession.handle || '').replace('@', ''),
      avatar: currentUserSession.avatar || null,
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    if (typeof savePostsLocal === 'function') savePostsLocal();
    closeModal();
    updateCommentsDrawerUI(postId);

    if (window.awsService && window.awsService.isConnected() && currentUserSession.id) {
      window.awsService.addComment(postId, currentUserSession.id, text).then(saved => {
        if (saved && saved.id) {
          newComment.id = saved.id;
          if (typeof savePostsLocal === 'function') savePostsLocal();
        }
      });
    }
  }
}

function openStoryModal(name, avatar, subtitle) {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="text-center space-y-4 max-h-[85vh] overflow-y-auto pr-1">
      <div class="story-ring p-1.5 inline-block">
        <img src="${getUserAvatarUrl(avatar)}" alt="${name}" class="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
      </div>
      <div class="pr-0">
        <h3 class="font-display font-bold text-xl text-ink">${name}</h3>
        <span class="text-xs text-muted font-medium">${subtitle}</span>
      </div>
      <div class="p-4 bg-surface-soft rounded-2xl text-xs text-ink leading-relaxed border border-gray-100">
        "O frevo é a pulsação do nosso povo nas ladeiras e no asfalto."
      </div>
      <button onclick="closeModal()" class="btn btn-primary w-full text-xs sm:text-sm rounded-xl py-2.5 font-bold shadow-md">Fechar Story</button>
    </div>
  `;
  modal.classList.add('open');
}

window.renderStories = renderStories;
window.renderFeedPostHtml = renderFeedPostHtml;
window.renderFeed = renderFeed;
window.appendMoreFeed = appendMoreFeed;
window.toggleCommentsDrawer = toggleCommentsDrawer;
window.togglePostExpand = togglePostExpand;
window.toggleLike = toggleLike;
window.toggleSave = toggleSave;
window.sharePost = sharePost;
window.copyShareLink = copyShareLink;
window.copyToClipboard = copyToClipboard;
window.openCommentsModal = openCommentsModal;
window.addComment = addComment;
window.openStoryModal = openStoryModal;
window.switchFeedTab = switchFeedTab;
window.submitInlineComment = submitInlineComment;
window.editComment = editComment;
window.saveEditedComment = saveEditedComment;
window.cancelCommentEdit = cancelCommentEdit;
window.deleteComment = deleteComment;
