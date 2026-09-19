// ==========================================
// FrevAI - Album & Shows Modal Module
// Criação, reordenação de faixas, controle de downloads e agenda de shows
// ==========================================

let currentAlbumDraftTracks = [];

function openSubmitAlbumModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Oficiais e Administradores podem cadastrar álbuns e discografias.');
    return;
  }

  currentAlbumDraftTracks = [];

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Novo Álbum / Disco</h3>
        <p class="text-xs text-muted">Cadastre seu álbum, faça upload das faixas, organize a ordem e configure downloads</p>
      </div>

      <form id="new-album-form" onsubmit="submitNewAlbum(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título do Álbum *</label>
          <input type="text" id="album-title-input" required placeholder="Ex: Fervura Global Vol. 2" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Ano de Lançamento</label>
            <input type="number" id="album-year-input" value="${new Date().getFullYear()}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Gênero Principal</label>
            <select id="album-genre-input" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            </select>
          </div>
        </div>

        <!-- Capa do Álbum -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Imagem de Capa do Álbum</label>
          <div class="p-2.5 bg-surface-soft border border-gray-200 rounded-xl space-y-1.5">
            <input type="file" id="album-cover-file" accept="image/*" class="text-xs text-muted file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-gray-200 file:text-ink hover:file:bg-gray-300 cursor-pointer w-full" />
            <input type="url" id="album-cover-input" placeholder="Ou URL da imagem (https://...)" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none" />
          </div>
        </div>

        <!-- Seção de Upload e Gestão de Faixas do Álbum -->
        <div class="pt-2 border-t border-gray-100">
          <div class="flex items-center justify-between mb-2">
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Faixas do Álbum</label>
              <span id="album-tracks-counter" class="text-[10px] text-muted font-mono">0 faixas adicionadas</span>
            </div>
            
            <label class="btn bg-frevo-purple/10 hover:bg-frevo-purple/20 text-frevo-purple border border-frevo-purple/30 text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Adicionar Faixas (Áudios)
              <input type="file" id="album-tracks-files-input" multiple accept="audio/*" onchange="handleAddAlbumDraftFiles(this)" class="hidden" />
            </label>
          </div>

          <!-- Container da Lista de Faixas Reordenáveis -->
          <div id="album-draft-tracks-container" class="space-y-2 min-h-[70px]">
            <!-- Renderizado dinamicamente por renderAlbumDraftTracks() -->
          </div>
        </div>

        <!-- Status de Upload do Álbum -->
        <div id="submit-album-status" class="hidden p-3 bg-purple-50 rounded-xl border border-purple-200 text-left space-y-1.5">
          <div class="flex items-center justify-between text-xs font-bold text-purple-900">
            <span id="submit-album-status-label" class="flex items-center gap-1.5">
              <svg class="animate-spin text-frevo-purple w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Processando e publicando álbum...
            </span>
            <span id="submit-album-percentage" class="font-mono text-frevo-purple">0%</span>
          </div>
          <div class="w-full bg-purple-200/60 rounded-full h-2 overflow-hidden">
            <div id="submit-album-progress-bar" class="bg-frevo-purple h-2 rounded-full transition-all duration-300" style="width: 10%;"></div>
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" id="btn-submit-album-action" class="btn bg-frevo-purple text-white hover:bg-frevo-purple/90 flex-1 text-xs rounded-xl shadow-md font-bold">Criar e Publicar Álbum</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
  renderAlbumDraftTracks();
}

function handleAddAlbumDraftFiles(input) {
  if (!input || !input.files || input.files.length === 0) return;
  const files = Array.from(input.files);

  files.forEach((file) => {
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    const formattedTitle = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    currentAlbumDraftTracks.push({
      id: `draft-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      title: formattedTitle,
      file: file,
      fileName: file.name,
      allow_download: true
    });
  });

  input.value = '';
  renderAlbumDraftTracks();
}

function renderAlbumDraftTracks() {
  const container = document.getElementById('album-draft-tracks-container');
  const counter = document.getElementById('album-tracks-counter');
  if (!container) return;

  if (counter) {
    counter.innerText = `${currentAlbumDraftTracks.length} ${currentAlbumDraftTracks.length === 1 ? 'faixa' : 'faixas'}`;
  }

  if (currentAlbumDraftTracks.length === 0) {
    container.innerHTML = `
      <div class="p-4 border-2 border-dashed border-gray-200 rounded-xl text-center text-xs text-muted">
        Nenhuma música adicionada ainda. Clique no botão acima para selecionar os arquivos de áudio (MP3/WAV) do disco.
      </div>
    `;
    return;
  }

  container.innerHTML = currentAlbumDraftTracks.map((track, idx) => `
    <div class="p-2.5 bg-surface-soft border border-gray-200 rounded-xl flex items-center justify-between gap-2 transition hover:border-frevo-purple/40">
      <div class="flex items-center gap-2 min-w-0 flex-1">
        <span class="w-6 h-6 rounded-lg bg-gray-200 text-ink font-bold text-[11px] font-mono flex items-center justify-center flex-shrink-0">
          ${idx + 1}
        </span>
        <div class="min-w-0 flex-1">
          <input type="text" value="${track.title.replace(/"/g, '&quot;')}" onchange="updateAlbumDraftTrackTitle(${idx}, this.value)" class="w-full text-xs font-bold text-ink bg-transparent border-b border-transparent hover:border-gray-300 focus:border-frevo-purple focus:outline-none py-0.5" placeholder="Título da faixa" />
          <div class="flex items-center gap-3 text-[10px] text-muted truncate">
            <span class="truncate">${track.fileName}</span>
            <label class="flex items-center gap-1 cursor-pointer flex-shrink-0 text-ink-soft">
              <input type="checkbox" ${track.allow_download ? 'checked' : ''} onchange="toggleAlbumDraftTrackDownload(${idx}, this.checked)" class="w-3.5 h-3.5 rounded text-frevo-orange focus:ring-0 border-gray-300 cursor-pointer" />
              <span>Download liberado</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-1 flex-shrink-0">
        <!-- Subir Faixa -->
        <button type="button" onclick="moveAlbumDraftTrack(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-7 h-7 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed" title="Subir ordem" aria-label="Subir ordem">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <!-- Descer Faixa -->
        <button type="button" onclick="moveAlbumDraftTrack(${idx}, 1)" ${idx === currentAlbumDraftTracks.length - 1 ? 'disabled' : ''} class="w-7 h-7 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-500 disabled:opacity-30 disabled:cursor-not-allowed" title="Descer ordem" aria-label="Descer ordem">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <!-- Excluir Faixa -->
        <button type="button" onclick="removeAlbumDraftTrack(${idx})" class="w-7 h-7 rounded-lg border border-rose-200 hover:bg-rose-50 flex items-center justify-center text-rose-500" title="Remover faixa" aria-label="Remover faixa">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
}

function updateAlbumDraftTrackTitle(index, newTitle) {
  if (currentAlbumDraftTracks[index]) {
    currentAlbumDraftTracks[index].title = newTitle.trim() || currentAlbumDraftTracks[index].title;
  }
}

function toggleAlbumDraftTrackDownload(index, allowed) {
  if (currentAlbumDraftTracks[index]) {
    currentAlbumDraftTracks[index].allow_download = allowed;
  }
}

function moveAlbumDraftTrack(index, direction) {
  const targetIdx = index + direction;
  if (targetIdx < 0 || targetIdx >= currentAlbumDraftTracks.length) return;
  const temp = currentAlbumDraftTracks[index];
  currentAlbumDraftTracks[index] = currentAlbumDraftTracks[targetIdx];
  currentAlbumDraftTracks[targetIdx] = temp;
  renderAlbumDraftTracks();
}

function removeAlbumDraftTrack(index) {
  currentAlbumDraftTracks.splice(index, 1);
  renderAlbumDraftTracks();
}

async function submitNewAlbum(e) {
  e.preventDefault();
  const title = document.getElementById('album-title-input')?.value;
  const release_year = parseInt(document.getElementById('album-year-input')?.value) || new Date().getFullYear();
  const genre = document.getElementById('album-genre-input')?.value || 'Frevo de Rua';
  const coverFileInput = document.getElementById('album-cover-file');
  let cover_url = document.getElementById('album-cover-input')?.value || '';

  if (!title) return;

  const statusEl = document.getElementById('submit-album-status');
  const statusLabel = document.getElementById('submit-album-status-label');
  const uploadPct = document.getElementById('submit-album-percentage');
  const uploadBar = document.getElementById('submit-album-progress-bar');
  const btnAction = document.getElementById('btn-submit-album-action');

  if (statusEl) statusEl.classList.remove('hidden');
  if (btnAction) {
    btnAction.disabled = true;
    btnAction.innerText = 'Criando Álbum...';
  }

  const setProgress = (pct, label) => {
    if (uploadBar) uploadBar.style.width = `${pct}%`;
    if (uploadPct) uploadPct.innerText = `${pct}%`;
    if (statusLabel && label) {
      statusLabel.innerHTML = `
        <svg class="animate-spin text-frevo-purple w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${label}
      `;
    }
  };

  try {
    const artistId = currentUserSession.artist_id || 'a1';

    // 1. Upload de capa se fornecida
    if (coverFileInput && coverFileInput.files && coverFileInput.files[0] && window.awsService) {
      setProgress(15, 'Enviando imagem de capa do álbum...');
      const uploadedCover = await window.awsService.uploadSongCover(coverFileInput.files[0]);
      if (uploadedCover) cover_url = uploadedCover;
    }
    if (!cover_url) {
      cover_url = '';
    }

    const newAlbumId = `alb-${Date.now()}`;
    const newAlbum = {
      id: newAlbumId,
      artist_id: artistId,
      author_id: artistId,
      artist: currentUserSession.name || 'Artista do Frevo',
      submitted_by: currentUserSession.id || null,
      title,
      cover_url,
      release_year,
      tracks_count: currentAlbumDraftTracks.length,
      tracks: []
    };

    // 2. Upload e criação das faixas adicionadas ao álbum
    const totalTracks = currentAlbumDraftTracks.length;
    const createdTracks = [];

    for (let i = 0; i < totalTracks; i++) {
      const track = currentAlbumDraftTracks[i];
      const trackProgress = Math.floor(20 + ((i / (totalTracks || 1)) * 65));
      setProgress(trackProgress, `Processando faixa ${i + 1} de ${totalTracks}: "${track.title}"...`);

      let audioUrl = 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3';
      let trackDuration = 180;

      if (track.file) {
        try {
          if (window.FrevoAudioEngine && typeof window.FrevoAudioEngine.decodeAudioFile === 'function') {
            const audioBuffer = await window.FrevoAudioEngine.decodeAudioFile(track.file);
            if (audioBuffer && audioBuffer.duration && !isNaN(audioBuffer.duration)) {
              trackDuration = Math.max(10, Math.round(audioBuffer.duration));
            }
          }
        } catch (e) {
          console.warn('[Album Track Duration]:', e);
        }

        if (window.awsService) {
          const uploadedAudio = await window.awsService.uploadAudio(track.file, artistId);
          if (uploadedAudio) audioUrl = uploadedAudio;
        }
      }

      const songObj = {
        id: `s-${Date.now()}-${i}`,
        title: track.title,
        artist: currentUserSession.name || currentUserProfile.name || 'Artista do Frevo',
        genre: genre,
        description: `Faixa integrante do álbum "${newAlbum.title}".`,
        lyrics: '',
        score_file: null,
        score_path: null,
        audio_url: audioUrl,
        cover_url: newAlbum.cover_url,
        duration_seconds: trackDuration,
        plays_count: 1,
        is_popular: true,
        album_id: newAlbum.id,
        track_number: i + 1,
        status: 'published',
        downloads_count: 0,
        allow_download: track.allow_download ?? true,
        author_id: artistId,
        artist_id: artistId,
        submitted_by: currentUserSession.id || null
      };

      DB.songs = DB.songs || [];
      DB.songs.unshift(songObj);
      createdTracks.push(songObj);

      if (window.awsService && window.awsService.isConnected()) {
        await window.awsService.createSong(songObj);
      }
    }

    newAlbum.tracks = createdTracks;
    newAlbum.tracks_count = createdTracks.length;

    DB.albums = DB.albums || [];
    DB.albums.unshift(newAlbum);
    if (typeof saveAlbumsLocal === 'function') saveAlbumsLocal();
    if (typeof saveSongsLocal === 'function') saveSongsLocal();

    if (window.awsService && window.awsService.isConnected()) {
      setProgress(90, 'Registrando álbum no acervo...');
      const saved = await window.awsService.createAlbum(newAlbum);
      if (saved && saved.id) newAlbum.id = saved.id;
    }

    setProgress(100, 'Álbum publicado com sucesso!');
    closeModal();
    if (typeof renderSongs === 'function') renderSongs();
    if (typeof renderArtists === 'function') renderArtists();
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
    showAlertModal(`Álbum "${newAlbum.title}" criado com ${totalTracks} faixas vinculadas!`);
  } catch (err) {
    console.error('Erro ao criar álbum:', err);
    showAlertModal('Erro ao criar álbum: ' + err.message);
    if (btnAction) {
      btnAction.disabled = false;
      btnAction.innerText = 'Criar Álbum';
    }
  }
}

async function deleteAlbum(albumId) {
  const album = (DB.albums || []).find(a => a.id === albumId);
  const isOwner = currentUserSession && (
    currentUserSession.role === 'admin' ||
    (album && album.artist_id === currentUserSession.artist_id) ||
    (album && album.author_id === currentUserSession.artist_id) ||
    (album && album.submitted_by === currentUserSession.id) ||
    (album && album.artist && currentUserSession.name && album.artist.toLowerCase().trim() === currentUserSession.name.toLowerCase().trim())
  );

  if (!isOwner && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas o artista/maestro responsável ou administradores podem excluir este álbum.');
    return;
  }
  if (confirm(`Deseja realmente excluir o álbum "${album ? album.title : 'selecionado'}" permanentemente?`)) {
    DB.albums = (DB.albums || []).filter(a => a.id !== albumId);
    if (typeof saveAlbumsLocal === 'function') saveAlbumsLocal();
    if (window.awsService && window.awsService.isConnected()) {
      try {
        await window.awsService.deleteAlbum(albumId);
      } catch (err) {
        console.warn('Erro ao excluir no AWS:', err);
      }
    }
    if (typeof closeModal === 'function') closeModal();
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
    if (typeof renderSongs === 'function') renderSongs();
    showAlertModal('Álbum excluído com sucesso.');
  }
}

function openSubmitShowModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Oficiais e Administradores podem agendar e divulgar shows.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Agendar Próximo Show</h3>
        <p class="text-xs text-muted">Divulgue seus concertos e apresentações de Frevo</p>
      </div>

      <form onsubmit="submitNewShow(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título do Evento / Show *</label>
          <input type="text" id="show-title-input" required placeholder="Ex: Noite de Frevo e Clarins" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Data *</label>
            <input type="date" id="show-date-input" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Horário *</label>
            <input type="time" id="show-time-input" required value="20:00" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Local / Espaço Cultural *</label>
          <input type="text" id="show-venue-input" required placeholder="Ex: Praça do Arsenal, Teatro Santa Isabel" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Cidade / Estado</label>
          <input type="text" id="show-city-input" value="Recife - PE" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Link para Ingressos / Bilheteria</label>
          <div class="relative">
            <span class="absolute left-3 top-2.5 text-muted pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M9 12h6"></path>
              </svg>
            </span>
            <input type="url" id="show-ticket-url-input" placeholder="https://sympla.com.br/... ou https://bileto.sympla.com.br/..." class="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red font-mono" />
          </div>
          <p class="text-[10px] text-muted mt-1">Cole o link da bilheteria oficial para outros usuários acessarem diretamente pelo ícone de ingresso.</p>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Publicar Show</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitNewShow(e) {
  e.preventDefault();
  const event_name = document.getElementById('show-title-input')?.value?.trim();
  const event_date = document.getElementById('show-date-input')?.value;
  const event_time = document.getElementById('show-time-input')?.value;
  const venue_name = document.getElementById('show-venue-input')?.value?.trim();
  const city = document.getElementById('show-city-input')?.value?.trim() || 'Recife - PE';
  let ticket_url = document.getElementById('show-ticket-url-input')?.value?.trim() || '';

  if (!event_name || !event_date) return;

  if (ticket_url && !ticket_url.startsWith('http://') && !ticket_url.startsWith('https://') && !ticket_url.startsWith('#')) {
    ticket_url = 'https://' + ticket_url;
  }

  const newShow = {
    id: `sh-${Date.now()}`,
    artist_id: currentUserSession.artist_id || 'a1',
    event_name,
    title: event_name,
    name: event_name,
    event_date,
    date: event_date,
    event_time,
    time: event_time,
    venue_name,
    venue: venue_name,
    location: `${venue_name} (${city})`,
    city,
    ticket_url: ticket_url || '#',
    link: ticket_url || '#'
  };

  DB.shows = DB.shows || [];
  DB.shows.unshift(newShow);
  if (typeof saveShowsLocal === 'function') saveShowsLocal();

  if (window.awsService && window.awsService.isConnected()) {
    const saved = await window.awsService.createArtistEvent(newShow);
    if (saved && saved.id) newShow.id = saved.id;
  }

  closeModal();
  if (typeof renderProfileGallery === 'function') renderProfileGallery();
  showAlertModal('Show agendado e publicado com sucesso!');
}

async function deleteShow(showId) {
  if (confirm('Deseja realmente excluir este show da sua agenda?')) {
    DB.shows = (DB.shows || []).filter(s => s.id !== showId);
    if (typeof saveShowsLocal === 'function') saveShowsLocal();
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.deleteArtistEvent(showId);
    }
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
  }
}

function openAlbumDetails(albumId) {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const album = (DB.albums || []).find(a => a.id === albumId);
  if (!album) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;
  
  // Obter faixas do álbum tanto do array interno de tracks quanto de DB.songs via album_id
  const dbAlbumSongs = (DB.songs || []).filter(s => s.album_id === album.id);
  let resolvedTracks = [];
  
  if (album.tracks && Array.isArray(album.tracks) && album.tracks.length > 0) {
    resolvedTracks = album.tracks.map(t => {
      if (typeof t === 'string') {
        const found = (DB.songs || []).find(s => s.id === t);
        return found || { id: t, title: t, artist: album.artist, audio_url: '', allow_download: true };
      }
      return t;
    });
  } else if (dbAlbumSongs.length > 0) {
    resolvedTracks = dbAlbumSongs;
  }

  // Montar playlist de músicas prontas para o player
  const albumPlaylist = resolvedTracks.map((t, idx) => {
    const trackId = typeof t === 'string' ? t : (t.id || `track-${idx}`);
    const foundSong = (DB.songs || []).find(s => s.id === trackId);
    if (foundSong) return foundSong;
    return {
      id: trackId,
      title: typeof t === 'string' ? t : (t.title || `Faixa ${idx + 1}`),
      artist: album.artist || 'Artista do Frevo',
      genre: album.genre || 'Frevo',
      audio_url: t.audio_url || 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3',
      cover_url: album.cover_url || album.cover || '',
      duration_seconds: t.duration_seconds || 180,
      plays_count: 1,
      allow_download: typeof t === 'object' ? t.allow_download !== false : true
    };
  });

  // Guardar referência global temporária da playlist do álbum
  window._currentAlbumPlaylist = albumPlaylist;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-8">
        <img src="${getCoverUrl(album.cover || album.cover_url)}" alt="${album.title}" class="w-20 h-20 rounded-2xl object-cover border border-gray-100 shadow-sm flex-shrink-0" onerror="this.onerror=null; this.src='${DEFAULT_COVER_PLACEHOLDER}'" />
        <div class="min-w-0 flex-1">
          <span class="badge bg-frevo-purple/15 text-frevo-purple text-[10px] font-bold">${album.genre || 'Frevo'}</span>
          <h3 class="font-display font-extrabold text-lg text-ink leading-tight mt-1 truncate">${album.title}</h3>
          <p class="text-xs font-bold text-frevo-orange truncate">${album.artist || 'Artista'}</p>
          <p class="text-[11px] text-muted mt-0.5">${album.year || album.release_year || ''} · ${albumPlaylist.length} faixas</p>
        </div>
      </div>

      <!-- Lista de Faixas -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider">Faixas do Disco</h4>
          ${albumPlaylist.length > 0 ? `
            <button onclick="playSong('${albumPlaylist[0].id}', window._currentAlbumPlaylist)" class="text-[11px] font-bold text-frevo-purple hover:underline flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Tocar Álbum
            </button>
          ` : ''}
        </div>
        ${albumPlaylist.length === 0 ? `
          <div class="p-6 border border-dashed border-gray-200 rounded-2xl text-center text-xs text-muted flex flex-col items-center justify-center gap-2">
            <svg class="w-8 h-8 text-gray-300 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Nenhuma faixa cadastrada neste álbum.</span>
          </div>
        ` : albumPlaylist.map((t, idx) => {
          const trackTitle = t.title || `Faixa ${idx + 1}`;
          const trackId = t.id;
          const allowDownload = t.allow_download !== false;

          return `
            <div class="p-2.5 bg-surface-soft border border-gray-100 rounded-xl flex items-center justify-between gap-3 hover:border-frevo-purple/30 transition-all">
              <div class="flex items-center gap-3 min-w-0">
                <span class="text-xs font-mono font-bold text-muted w-4 text-center">${idx + 1}</span>
                <button onclick="playSong('${trackId}', window._currentAlbumPlaylist)" class="w-8 h-8 rounded-full bg-frevo-purple/10 hover:bg-frevo-purple text-frevo-purple hover:text-white flex items-center justify-center flex-shrink-0 transition-all shadow-sm" title="Reproduzir faixa">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <div class="min-w-0">
                  <h5 class="text-xs font-bold text-ink truncate">${trackTitle}</h5>
                  <p class="text-[10px] text-muted">${t.artist || album.artist || ''}</p>
                </div>
              </div>

              <div class="flex items-center gap-1.5 flex-shrink-0">
                ${allowDownload ? `
                  <button onclick="downloadScore('${trackId}')" class="p-1.5 text-frevo-cyan hover:bg-cyan-50 rounded-lg transition-colors" title="Baixar Partitura/Áudio">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                ` : `
                  <span class="p-1.5 text-gray-300" title="Download restrito">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="pt-2 flex gap-2">
        ${(currentUserSession && (currentUserSession.role === 'admin' || (album && album.artist_id === currentUserSession.artist_id) || (album && album.author_id === currentUserSession.artist_id) || (album && album.submitted_by === currentUserSession.id) || (album && album.artist && currentUserSession.name && album.artist.toLowerCase().trim() === currentUserSession.name.toLowerCase().trim()))) ? `
          <button type="button" onclick="deleteAlbum('${album.id}')" class="btn bg-rose-600 hover:bg-rose-700 text-white text-xs rounded-xl py-2.5 px-4 font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm" title="Excluir Álbum">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Excluir Álbum
          </button>
        ` : ''}
        ${hasHistory ? `
          <button type="button" onclick="goBackModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Voltar
          </button>
        ` : ''}
        <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

window.openSubmitAlbumModal = openSubmitAlbumModal;
window.openCreateAlbumModal = openSubmitAlbumModal;
window.openAlbumDetails = openAlbumDetails;
window.handleAddAlbumDraftFiles = handleAddAlbumDraftFiles;
window.renderAlbumDraftTracks = renderAlbumDraftTracks;
window.updateAlbumDraftTrackTitle = updateAlbumDraftTrackTitle;
window.toggleAlbumDraftTrackDownload = toggleAlbumDraftTrackDownload;
window.moveAlbumDraftTrack = moveAlbumDraftTrack;
window.removeAlbumDraftTrack = removeAlbumDraftTrack;
window.submitNewAlbum = submitNewAlbum;
window.deleteAlbum = deleteAlbum;
window.openSubmitShowModal = openSubmitShowModal;
window.openCreateShowModal = openSubmitShowModal;
window.submitNewShow = submitNewShow;
window.deleteShow = deleteShow;

