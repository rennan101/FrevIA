// ==========================================
// FrevAI - Artists View Module
// Catálogo de artistas, busca instantânea, favoritos e perfil público completo
// ==========================================

let artistSearchDebounceTimer = null;

function toggleFavoriteArtist(artistId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  if (!currentUserSession.favorites) {
    currentUserSession.favorites = [];
  }
  const idx = currentUserSession.favorites.indexOf(artistId);
  const isFav = idx !== -1;
  if (isFav) {
    currentUserSession.favorites.splice(idx, 1);
  } else {
    currentUserSession.favorites.push(artistId);
  }
  const nowFav = !isFav;
  saveCurrentSession();

  if (window.awsService && currentUserSession.id) {
    window.awsService.toggleFavoriteArtist(artistId, currentUserSession.id);
  }

  if (window.FrevAIAnalytics) {
    window.FrevAIAnalytics.trackArtistFavorite(artistId, nowFav);
  }

  // Atualização direta e imediata de todos os botões de favoritar deste artista
  document.querySelectorAll(`button[onclick*="toggleFavoriteArtist('${artistId}')"]`).forEach(btn => {
    if (btn.classList.contains('btn-fav-artist')) {
      btn.classList.toggle('favorited', nowFav);
    } else {
      if (nowFav) {
        btn.className = 'btn bg-frevo-orange text-white shadow-md text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0';
      } else {
        btn.className = 'btn btn-outline text-frevo-orange border-frevo-orange hover:bg-frevo-orange/10 text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0';
      }
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', nowFav ? 'currentColor' : 'none');
      const textSpan = btn.querySelector('span');
      if (textSpan) textSpan.innerText = nowFav ? 'Favoritado' : 'Favoritar';
    }
  });

  renderArtists('', false);
  if (typeof renderProfileGallery === 'function') renderProfileGallery();
}

function openArtistProfile(artistId) {
  const artist = (DB.artists || []).find(a => a.id === artistId || a.handle === artistId || a.name === artistId);
  if (!artist) return;

  const titleEl = document.getElementById('artist-public-title');
  if (titleEl) titleEl.innerText = artist.name;

  if (typeof window.updateDynamicMetaTags === 'function') {
    window.updateDynamicMetaTags({
      title: `${artist.name} (${artist.genre || 'Frevo'})`,
      description: `${artist.name} no FrevAI: ${artist.bio ? artist.bio.substring(0, 140) + '...' : 'Perfil oficial e acervo de frevo.'}`,
      image: artist.avatar_url
    });
  }

  const container = document.getElementById('artist-public-content');
  if (!container) return;

  if (typeof loadShowsLocal === 'function') loadShowsLocal();
  const artistSongs = (DB.songs || []).filter(s => s.author_id === artist.id || (s.artist && s.artist.toLowerCase().includes(artist.name.toLowerCase())));
  const popularSongs = [...artistSongs].sort((a, b) => (b.plays_count || 0) - (a.plays_count || 0));
  const artistAlbums = (DB.albums || []).filter(alb => alb.artist_id === artist.id);
  const artistShows = (DB.shows || []).filter(sh => sh.artist_id === artist.id);
  const isFav = (currentUserSession.favorites || []).includes(artist.id);

  container.innerHTML = `
    <div class="space-y-4 text-left">
      <!-- Cabeçalho do Artista -->
      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3.5">
            <div class="relative flex-shrink-0">
              <img src="${getUserAvatarUrl(artist.avatar_url)}" alt="${artist.name}" class="w-16 h-16 rounded-full object-cover border-2 border-frevo-orange/30 shadow-md bg-white" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
              <span class="absolute bottom-0 right-0 w-5 h-5 bg-frevo-green text-white rounded-full flex items-center justify-center border-2 border-white font-bold" title="Artista Verificado">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-lg text-ink leading-tight">${artist.name}</h3>
              <span class="text-xs text-muted font-medium">${artist.handle}</span>
              <div class="mt-1 flex items-center gap-1.5 flex-wrap">
                <span class="badge bg-frevo-orange/15 text-frevo-orange font-bold text-[10px]">${artist.genre}</span>
                <span class="badge bg-gray-100 text-muted font-mono font-bold text-[10px]">${artistSongs.length} faixa(s)</span>
                ${artistAlbums.length > 0 ? `<span class="badge bg-frevo-purple/15 text-frevo-purple font-mono font-bold text-[10px]">${artistAlbums.length} álbum(ns)</span>` : ''}
              </div>
            </div>
          </div>

          <!-- Botão Favoritar Artista -->
          <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn ${isFav ? 'bg-frevo-orange text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange hover:bg-frevo-orange/10'} text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="hidden sm:inline">${isFav ? 'Favoritado' : 'Favoritar'}</span>
          </button>
        </div>

        <!-- Biografia e Descrição -->
        <div>
          <h4 class="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Sobre o Artista</h4>
          <p class="text-xs text-ink-soft leading-relaxed bg-surface-soft p-3.5 rounded-2xl border border-gray-100">
            ${artist.bio || 'Biografia em processo de catalogação pelo comitê.'}
          </p>
        </div>

        <!-- Contato Oficial -->
        ${(artist.email || artist.phone) ? `
          <div class="flex items-center gap-2 flex-wrap pt-1">
            ${artist.email ? `
              <a href="mailto:${artist.email}" class="text-[11px] font-bold text-ink bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                ${artist.email}
              </a>
            ` : ''}
            ${artist.phone ? `
              <a href="https://wa.me/${artist.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-green-800 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                WhatsApp Oficial
              </a>
            ` : ''}
          </div>
        ` : ''}
      </div>

      <!-- 1. SEÇÃO DE MÚSICAS POPULARES -->
      <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Músicas Populares
          </h4>
          <span class="text-[10px] text-muted font-bold font-mono">${popularSongs.length} faixas</span>
        </div>

        <div class="space-y-2">
          ${popularSongs.length > 0 ? popularSongs.map((song, index) => {
            const isThisPlaying = (currentPlayingSong && currentPlayingSong.id === song.id && isAudioPlaying);
            return `
              <div onclick="playSong('${song.id}')" class="p-2.5 bg-surface-soft rounded-2xl border ${isThisPlaying ? 'border-frevo-orange ring-2 ring-frevo-orange/25 bg-orange-50/20' : 'border-gray-100'} shadow-sm flex items-center justify-between gap-3 hover:border-frevo-orange transition-all cursor-pointer group">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                  <span class="w-5 text-center font-bold text-xs ${index === 0 ? 'text-frevo-orange' : 'text-muted'} font-mono">
                    ${isThisPlaying ? `
                      <span class="inline-block w-2.5 h-2.5 rounded-full bg-frevo-orange animate-ping"></span>
                    ` : `${index + 1}`}
                  </span>
                  
                  <img src="${song.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80'}" alt="${song.title}" class="w-10 h-10 rounded-xl object-cover flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80'" />
                  
                  <div class="min-w-0 flex-1">
                    <h5 class="font-bold text-xs text-ink truncate group-hover:text-frevo-orange transition-colors">${song.title}</h5>
                    <div class="flex items-center gap-2 text-[10px] text-muted">
                      <span>${song.genre}</span>
                      <span>•</span>
                      <span class="font-mono">${(song.plays_count || 1200).toLocaleString('pt-BR')} plays</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2 flex-shrink-0" onclick="event.stopPropagation()">
                  <button onclick="playSong('${song.id}')" class="w-8 h-8 rounded-full ${isThisPlaying ? 'bg-frevo-orange text-white' : 'bg-white text-ink hover:bg-frevo-orange hover:text-white border border-gray-200'} flex items-center justify-center transition-all shadow-sm" title="Reproduzir Música">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      ${isThisPlaying ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>' : '<polygon points="5 3 19 12 5 21 5 3"></polygon>'}
                    </svg>
                  </button>
                  <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan p-2 rounded-xl font-bold flex-shrink-0" title="Ver Partitura / Baixar PDF" aria-label="Partitura">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-4 text-center bg-surface-soft rounded-2xl border border-gray-100">
              <p class="text-xs text-muted">Nenhuma música cadastrada por este artista ainda.</p>
            </div>
          `}
        </div>
      </div>

      <!-- 2. SEÇÃO DE ÁLBUNS -->
      ${artistAlbums.length > 0 ? `
        <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7447E8" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              Álbuns & Discografia
            </h4>
            <span class="text-[10px] text-muted">Arraste horizontalmente ⇄</span>
          </div>

          <div id="artist-albums-carousel" class="albums-carousel-track">
            ${artistAlbums.map(album => `
              <div class="album-card-item" onclick="openAlbumDetails('${album.id}')">
                <img src="${album.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80'}" alt="${album.title}" class="album-card-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80'" />
                <div class="mt-2 text-left">
                  <h5 class="font-bold text-xs text-ink truncate">${album.title}</h5>
                  <p class="text-[10px] text-muted font-mono">${album.release_year} • ${album.tracks_count} faixas</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. SEÇÃO DE PRÓXIMOS SHOWS -->
      <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3 pb-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F0442E" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Próximos Shows & Apresentações
          </h4>
          <span class="text-[10px] text-muted font-mono font-bold">${artistShows.length} confirmados</span>
        </div>

        <div class="shows-timeline">
          ${artistShows.length > 0 ? artistShows.map(show => {
            const dateObj = new Date(`${show.date || show.event_date}T12:00:00`);
            const day = dateObj.getDate().toString().padStart(2, '0');
            const month = dateObj.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
            const year = dateObj.getFullYear();
            const rawLink = show.ticket_url || show.link || '';
            const hasValidLink = rawLink && rawLink !== '#' && (rawLink.startsWith('http://') || rawLink.startsWith('https://'));
            const targetAction = hasValidLink 
              ? `href="${rawLink}" target="_blank" rel="noopener noreferrer"` 
              : `href="javascript:void(0)" onclick="showAlertModal('Informações e ingressos para ${show.title || show.event_name} estarão disponíveis em breve na bilheteria oficial.', { title: 'Ingressos', type: 'info' })"`;

            return `
              <div class="show-item-card">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="show-date-badge">
                    <span class="show-date-day">${day}</span>
                    <span class="show-date-month">${month}</span>
                  </div>
                  <div class="min-w-0">
                    <h5 class="font-bold text-xs text-ink truncate">${show.title || show.event_name}</h5>
                    <p class="text-[11px] text-ink-soft flex items-center gap-1 truncate">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      ${show.venue || show.venue_name} (${show.city || 'Recife - PE'})
                    </p>
                    <span class="text-[10px] text-muted font-mono font-semibold">Horário: ${show.time || show.event_time} • ${day}/${month.toUpperCase()}/${year}</span>
                  </div>
                </div>
                <a ${targetAction} class="btn btn-primary text-[11px] px-3 py-1.5 rounded-xl font-bold whitespace-nowrap shadow-sm flex items-center gap-1.5 flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M9 12h6"></path>
                  </svg>
                  Ingressos
                </a>
              </div>
            `;
          }).join('') : `
            <div class="p-4 text-center bg-surface-soft rounded-2xl border border-gray-100">
              <p class="text-xs text-muted">Nenhum show agendado no momento. Fique atento às novidades!</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  switchView('artist-public');

  setTimeout(() => {
    if (typeof initAlbumsCarousel === 'function') initAlbumsCarousel('artist-albums-carousel');
  }, 100);
}

function openArtistProfileByAuthor(authorName) {
  const artist = (DB.artists || []).find(a => a.name.toLowerCase() === (authorName || '').toLowerCase() || a.handle.toLowerCase() === (authorName || '').toLowerCase());
  if (artist) {
    openArtistProfile(artist.id);
  } else {
    openStoryModal(authorName, DEFAULT_AVATAR_PLACEHOLDER, 'Recife, PE');
  }
}

window.openArtistModal = function(name, avatar, cover, genre, bio, email, phone, id) {
  openArtistProfile(id || name);
};

function renderArtistCardHtml(artist) {
  const isFav = (currentUserSession.favorites || []).includes(artist.id);
  return `
    <div data-artist-id="${artist.id}" class="artist-card-item bg-white border border-gray-200 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow relative infinite-scroll-item">
      <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn-fav-artist absolute top-3 right-3 ${isFav ? 'favorited' : ''}" title="Favoritar Artista">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </button>

      <div class="story-ring p-1 mb-2">
        <img src="${getUserAvatarUrl(artist.avatar_url)}" alt="${artist.name}" loading="lazy" class="w-16 h-16 rounded-full object-cover border-2 border-white" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
      </div>
      <div>
        <h3 class="font-display font-bold text-sm text-ink">${artist.name}</h3>
        <span class="text-[11px] text-muted block mb-1">${artist.handle}</span>
        <span class="badge bg-frevo-pink/15 text-frevo-pink font-bold text-[10px]">${artist.genre}</span>
      </div>
      <p class="text-xs text-ink-soft line-clamp-2 my-2.5 leading-relaxed">${artist.bio}</p>

      <button onclick="openArtistProfile('${artist.id}')" class="btn btn-primary w-full text-xs h-8 rounded-xl font-bold mt-1 shadow-sm flex items-center justify-center gap-1.5">
        Ver Perfil & Partituras
      </button>
    </div>
  `;
}

function renderArtists(filterQuery = '', forceRerender = false) {
  const container = document.getElementById('artists-grid');
  if (!container) return;

  if (typeof loadArtistsLocal === 'function') loadArtistsLocal();

  if (forceRerender) {
    container.innerHTML = '';
  }

  const query = (filterQuery || '').toLowerCase().trim();
  const stream = document.getElementById('artists-stream');
  let emptyState = document.getElementById('artists-empty-state');

  if (stream && !forceRerender) {
    const cards = stream.querySelectorAll('.artist-card-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const artistId = card.getAttribute('data-artist-id');
      const artist = (DB.artists || []).find(a => a.id === artistId);
      if (!artist) return;

      const isFav = (currentUserSession.favorites || []).includes(artist.id);
      const favBtn = card.querySelector('.btn-fav-artist');
      if (favBtn) {
        favBtn.classList.toggle('favorited', isFav);
      }

      const matches = !query ||
        artist.name.toLowerCase().includes(query) ||
        (artist.handle && artist.handle.toLowerCase().includes(query)) ||
        (artist.genre && artist.genre.toLowerCase().includes(query)) ||
        (artist.bio && artist.bio.toLowerCase().includes(query));

      if (matches) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const existingIds = Array.from(cards).map(c => c.getAttribute('data-artist-id'));
    const missingArtists = (DB.artists || []).filter(a => !existingIds.includes(a.id));
    if (missingArtists.length > 0) {
      missingArtists.forEach(a => {
        const matches = !query ||
          a.name.toLowerCase().includes(query) ||
          (a.handle && a.handle.toLowerCase().includes(query)) ||
          (a.genre && a.genre.toLowerCase().includes(query)) ||
          (a.bio && a.bio.toLowerCase().includes(query));
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = renderArtistCardHtml(a);
        const cardEl = tempDiv.firstElementChild;
        if (!matches) cardEl.style.display = 'none';
        else visibleCount++;
        stream.appendChild(cardEl);
      });
    }

    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.id = 'artists-empty-state';
        emptyState.className = 'col-span-full p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2';
        emptyState.innerHTML = `
          <p class="text-xs text-ink font-bold">Nenhum artista encontrado</p>
          <p class="text-[11px] text-muted">Tente buscar por outro nome, gênero ou arroba.</p>
        `;
        container.appendChild(emptyState);
      } else {
        emptyState.style.display = '';
      }
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }

    return;
  }

  const filtered = query ? (DB.artists || []).filter(a =>
    a.name.toLowerCase().includes(query) ||
    (a.handle && a.handle.toLowerCase().includes(query)) ||
    (a.genre && a.genre.toLowerCase().includes(query)) ||
    (a.bio && a.bio.toLowerCase().includes(query))
  ) : (DB.artists || []);

  InfiniteScrollManager.reset('artists');
  const initialArtists = filtered.slice(0, InfiniteScrollManager.state.artists.limit);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div id="artists-empty-state" class="col-span-full p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2">
        <p class="text-xs text-ink font-bold">Nenhum artista encontrado</p>
        <p class="text-[11px] text-muted">Tente buscar por outro nome, gênero ou arroba.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div id="artists-stream" class="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-full">
      ${initialArtists.map(artist => renderArtistCardHtml(artist)).join('')}
    </div>
    <div id="sentinel-artists" class="infinite-scroll-sentinel col-span-full" data-view="artists">
      ${filtered.length > initialArtists.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais artistas...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-artists');
  if (sentinel && filtered.length > initialArtists.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function handleArtistSearch(event) {
  const query = event.target.value;
  clearTimeout(artistSearchDebounceTimer);
  artistSearchDebounceTimer = setTimeout(() => {
    renderArtists(query);
    if (window.FrevAIAnalytics && query && query.length >= 2) {
      window.FrevAIAnalytics.trackSearch(query, 'artists');
    }
  }, 120);
}

function appendMoreArtists() {
  const stream = document.getElementById('artists-stream');
  const sentinel = document.getElementById('sentinel-artists');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.artists;
  const start = (page - 1) * limit;
  const nextArtists = (DB.artists || []).slice(start, start + limit);

  if (nextArtists.length > 0) {
    const html = nextArtists.map(artist => renderArtistCardHtml(artist)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= (DB.artists || []).length && sentinel) {
    sentinel.innerHTML = '';
  }
}

window.toggleFavoriteArtist = toggleFavoriteArtist;
window.openArtistProfile = openArtistProfile;
window.openArtistProfileModal = openArtistProfile;
window.openArtistProfileByAuthor = openArtistProfileByAuthor;
window.renderArtistCardHtml = renderArtistCardHtml;
window.renderArtists = renderArtists;
window.renderArtistsGrid = renderArtists;
window.handleArtistSearch = handleArtistSearch;
window.appendMoreArtists = appendMoreArtists;

