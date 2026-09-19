// ==========================================
// FrevAI - Songs & Scores View Module
// Renderização do catálogo de partituras, desktop split-view, ações de download e exclusão
// ==========================================

let selectedSongId = 's1';

function selectSongForDesktopViewer(songId) {
  selectedSongId = songId;
  document.querySelectorAll('.song-card-item').forEach(el => {
    if (el.dataset.songId === songId) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  if (window.innerWidth >= 992) {
    renderSongsDesktopViewer(songId);
  } else {
    const song = (DB.songs || []).find(s => s.id === songId);
    if (song && typeof openScoreModal === 'function') {
      openScoreModal(song.title, song.artist, song.id);
    }
  }
}

function renderSongCardHtml(song) {
  const isSelected = song.id === selectedSongId;
  const isSaved = (currentUserSession.saved_scores || []).includes(song.id);
  const isDownloadAllowed = canDownloadSong(song);

  return `
    <div onclick="selectSongForDesktopViewer('${song.id}')" data-song-id="${song.id}" class="song-card-item bg-white border ${isSelected ? 'border-frevo-orange ring-2 ring-frevo-orange/30 bg-orange-50/20' : 'border-gray-200'} rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all infinite-scroll-item cursor-pointer">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-xs font-bold">${song.genre}</span>
          <div class="flex items-center gap-1.5">
            <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
            <button onclick="event.stopPropagation(); toggleSaveScore('${song.id}')" class="p-1.5 rounded-lg text-frevo-orange hover:bg-orange-50 transition-colors" title="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}" aria-label="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <h3 class="font-display font-bold text-lg text-ink leading-snug">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange mb-1.5">${song.artist}</p>
        <p class="text-xs text-ink-soft mb-2.5 leading-relaxed line-clamp-2">${song.description || ''}</p>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-gray-100">
        <button onclick="event.stopPropagation(); openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-outline text-xs py-2 px-3 rounded-xl font-bold flex-1 flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Ver Detalhes
        </button>
        ${isDownloadAllowed ? `
          <button onclick="event.stopPropagation(); downloadScore('${song.id}')" class="btn btn-cyan p-2.5 rounded-xl font-bold shadow-sm flex items-center justify-center flex-shrink-0" title="Baixar Partitura em PDF" aria-label="Baixar Partitura em PDF">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        ` : `
          <button onclick="event.stopPropagation(); showAlertModal('O download desta obra não foi autorizado pelo maestro/artista.')" class="p-2.5 rounded-xl text-gray-300 hover:text-gray-400 bg-gray-50 flex items-center justify-center flex-shrink-0" title="Download restrito pelo maestro">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </button>
        `}
      </div>
    </div>
  `;
}

function renderSongsDesktopViewer(songId) {
  const viewer = document.getElementById('songs-desktop-viewer');
  if (!viewer) return;

  const song = (DB.songs || []).find(s => s.id === songId) || (DB.songs || [])[0];
  if (!song) {
    viewer.innerHTML = `
      <div class="p-12 text-center text-muted">
        <p class="text-sm font-bold">Selecione uma partitura ao lado para visualizar.</p>
      </div>
    `;
    return;
  }

  const isSaved = (currentUserSession.saved_scores || []).includes(song.id);
  const profile = getSongMusicalProfile(song);
  const isPlayingThis = (currentlyPlayingSongId === song.id);
  const isDownloadAllowed = canDownloadSong(song);

  viewer.innerHTML = `
    <div class="p-6 space-y-4 text-left">
      <!-- Cabeçalho da Partitura & Ações -->
      <div class="flex items-start justify-between pb-3 border-b border-gray-100 gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-xs font-bold">${song.genre}</span>
            <span class="badge bg-gray-100 text-muted text-[11px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
            <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Autêntica • 2/4</span>
            <span class="badge bg-frevo-green/15 text-frevo-green text-[10px] font-bold">${profile.key}</span>
          </div>
          <h2 class="font-display font-black text-2xl text-ink leading-tight">${song.title}</h2>
          <p class="text-xs font-bold text-frevo-orange mt-0.5">${song.artist} • ${profile.lead}</p>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="toggleSaveScore('${song.id}')" class="btn ${isSaved ? 'bg-orange-500 text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange hover:bg-orange-50'} p-2.5 rounded-xl font-bold flex items-center justify-center transition-all" title="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}" aria-label="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          ${isDownloadAllowed ? `
            <button onclick="downloadScore('${song.id}')" class="btn btn-cyan p-2.5 rounded-xl font-bold shadow-sm flex items-center justify-center transition-all" title="Baixar Partitura em PDF Real" aria-label="Baixar Partitura em PDF Real">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          ` : `
            <button onclick="showAlertModal('O download desta obra não foi autorizado pelo maestro/artista.')" class="p-2.5 rounded-xl text-gray-300 hover:text-gray-400 bg-gray-50 flex items-center justify-center transition-all" title="Download restrito pelo maestro">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
          `}
        </div>
      </div>

      <!-- Barra de Ferramentas / Prévia Sonora Sincronizada -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-surface-soft rounded-xl text-xs font-medium text-ink-soft border border-gray-100 flex-wrap gap-2">
        <div class="flex items-center gap-2 text-xs flex-wrap">
          <span class="w-2.5 h-2.5 rounded-full ${isPlayingThis ? 'bg-frevo-red animate-ping' : 'bg-frevo-green animate-pulse'}"></span>
          <span>Andamento: <strong>${profile.tempoLabel}</strong></span>
          <span class="text-gray-300">•</span>
          <span>Tom: <strong>${profile.key}</strong></span>
        </div>
        <button id="btn-audio-preview-${song.id}" onclick="playFrevoAudioPreview('${song.id}')" class="btn ${isPlayingThis ? 'bg-frevo-red text-white' : 'bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange'} text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all">
          ${isPlayingThis ? `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="animate-pulse">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Parar Arranjo Musical
          ` : `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Ouvir Arranjo Musical
          `}
        </button>
      </div>

      <!-- Folha de Partitura Real Estilizada -->
      <div class="real-sheet-canvas p-6 space-y-4 shadow-inner max-h-[520px] overflow-y-auto">
        <div class="text-center pb-2 border-b border-stone-300">
          <span class="text-[10px] tracking-widest uppercase text-stone-500 font-bold block mb-1">Sociedade dos Músicos do Frevo de Pernambuco</span>
          <h3 class="text-2xl font-serif font-black text-stone-900 tracking-wider uppercase">${song.title}</h3>
          <span class="text-xs font-serif italic text-stone-700">Composição & Arranjo: ${song.artist} • ${profile.lead}</span>
        </div>

        <div class="space-y-3">
          ${renderStaveSvgHtml(profile.stave1, profile.keyAccidentals, profile.stave1Title)}
          ${renderStaveSvgHtml(profile.stave2, profile.keyAccidentals, profile.stave2Title)}
        </div>

        <div class="pt-3 border-t border-stone-300">
          <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-800 mb-1.5">Letra Oficial & Diretrizes de Regência</h4>
          <div class="bg-white/80 p-3.5 rounded-xl border border-stone-200 text-xs font-serif text-stone-800 whitespace-pre-line leading-relaxed">
            ${song.lyrics || 'Instrumental — Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.'}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSongs(filterQuery = '') {
  const container = document.getElementById('songs-grid');
  if (!container) return;

  const query = filterQuery.toLowerCase().trim();
  const filtered = query ? (DB.songs || []).filter(s => 
    s.title.toLowerCase().includes(query) ||
    s.artist.toLowerCase().includes(query) ||
    s.genre.toLowerCase().includes(query) ||
    (s.description && s.description.toLowerCase().includes(query)) ||
    (s.lyrics && s.lyrics.toLowerCase().includes(query))
  ) : (DB.songs || []);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2">
        <p class="text-xs text-ink font-bold">Nenhuma partitura encontrada</p>
        <p class="text-[11px] text-muted">Tente buscar por outro termo, compositor ou gênero.</p>
      </div>
    `;
    const viewer = document.getElementById('songs-desktop-viewer');
    if (viewer) viewer.innerHTML = '';
    return;
  }

  if (!selectedSongId || !filtered.some(s => s.id === selectedSongId)) {
    selectedSongId = filtered[0].id;
  }

  InfiniteScrollManager.reset('songs');
  const initialSongs = filtered.slice(0, InfiniteScrollManager.state.songs.limit);

  container.innerHTML = `
    <div id="songs-stream" class="space-y-3.5">
      ${initialSongs.map(song => renderSongCardHtml(song)).join('')}
    </div>
    <div id="sentinel-songs" class="infinite-scroll-sentinel" data-view="songs">
      ${filtered.length > initialSongs.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais partituras...</span>
        </div>
      ` : ''}
    </div>
  `;

  renderSongsDesktopViewer(selectedSongId);

  const sentinel = document.getElementById('sentinel-songs');
  if (sentinel && filtered.length > initialSongs.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreSongs() {
  const stream = document.getElementById('songs-stream');
  const sentinel = document.getElementById('sentinel-songs');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.songs;
  const start = (page - 1) * limit;
  const nextSongs = (DB.songs || []).slice(start, start + limit);

  if (nextSongs.length > 0) {
    const html = nextSongs.map(song => renderSongCardHtml(song)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= (DB.songs || []).length && sentinel) {
    sentinel.innerHTML = '';
  }
}

let songSearchDebounceTimer = null;
function handleSongsSearch(event) {
  const query = event.target.value;
  renderSongs(query);
  clearTimeout(songSearchDebounceTimer);
  songSearchDebounceTimer = setTimeout(() => {
    if (window.FrevAIAnalytics && query && query.length >= 2) {
      window.FrevAIAnalytics.trackSearch(query, 'songs');
    }
  }, 150);
}

function toggleSongActionMenu(songId, event) {
  if (event) {
    event.stopPropagation();
  }
  const menu = document.getElementById(`song-menu-${songId}`);
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  closeAllSongActionMenus();
  if (isHidden) {
    menu.classList.remove('hidden');
  }
}

function closeAllSongActionMenus() {
  document.querySelectorAll('.song-action-menu-dropdown').forEach(el => {
    el.classList.add('hidden');
  });
}

function downloadSongAction(songId) {
  closeAllSongActionMenus();
  const song = (DB.songs || []).find(s => s.id === songId);
  if (!song) return;
  if (!canDownloadSong(song)) {
    showAlertModal('O download desta obra não foi autorizado pelo maestro/artista.');
    return;
  }
  downloadScore(song.id);
}

async function deleteSong(songId) {
  closeAllSongActionMenus();
  const song = (DB.songs || []).find(s => s.id === songId);
  if (!song) return;
  const isOwner = currentUserSession && (song.author_id === currentUserSession.artist_id || song.artist_id === currentUserSession.artist_id);
  if (!isOwner && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas o compositor desta obra ou administradores podem excluí-la.');
    return;
  }
  if (confirm(`Deseja realmente excluir a música "${song.title}" permanentemente?`)) {
    DB.songs = (DB.songs || []).filter(s => s.id !== songId);
    if (window.awsService && window.awsService.isConnected()) {
      try {
        await window.awsService.deleteSong(songId);
      } catch (err) {
        console.warn('Erro ao excluir no AWS:', err);
      }
    }
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
    renderSongs();
    showAlertModal('Música excluída com sucesso.');
  }
}

function toggleSaveScore(songId) {
  if (currentUserSession.role === 'guest') {
    showAlertModal('Você precisa estar logado para salvar partituras no seu perfil.');
    if (typeof openSessionModal === 'function') openSessionModal();
    return;
  }

  currentUserSession.saved_scores = currentUserSession.saved_scores || [];
  const index = currentUserSession.saved_scores.indexOf(songId);
  const isSaved = index !== -1;

  if (isSaved) {
    currentUserSession.saved_scores.splice(index, 1);
    showAlertModal('Partitura removida dos seus itens salvos.');
  } else {
    currentUserSession.saved_scores.push(songId);
    showAlertModal('Partitura salva com sucesso no seu perfil!', { type: 'success' });
  }

  saveCurrentSession();
  renderSongs();
  if (window.innerWidth >= 992) {
    renderSongsDesktopViewer(songId);
  }
}

window.addEventListener('click', () => {
  closeAllSongActionMenus();
});

window.selectSongForDesktopViewer = selectSongForDesktopViewer;
window.renderSongCardHtml = renderSongCardHtml;
window.renderSongsDesktopViewer = renderSongsDesktopViewer;
window.renderSongs = renderSongs;
window.renderSongsList = renderSongs;
window.appendMoreSongs = appendMoreSongs;
window.handleSongsSearch = handleSongsSearch;
window.toggleSongActionMenu = toggleSongActionMenu;
window.closeAllSongActionMenus = closeAllSongActionMenus;
window.downloadSongAction = downloadSongAction;
window.deleteSong = deleteSong;
window.toggleSaveScore = toggleSaveScore;

