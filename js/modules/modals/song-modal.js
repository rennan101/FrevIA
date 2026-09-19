// ==========================================
// FrevAI - Song Submission Modal Module
// Cadastro de novas músicas e partituras por Mestres/Artistas
// ==========================================

function openSubmitSongModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Aprovados e Administradores podem cadastrar músicas e partituras.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const artistAlbums = (DB.albums || []).filter(alb => alb.artist_id === (currentUserSession.artist_id || 'a1'));

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-3 border-b border-gray-100 text-center">
        <h3 class="font-display font-bold text-lg text-ink text-center">Cadastrar Nova Música</h3>
      </div>

      <form id="new-song-form" onsubmit="submitNewSong(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título da Música *</label>
          <input type="text" id="song-title-input" required placeholder="Ex: Passo da Fervura" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Gênero Tradicional</label>
            <select id="song-genre-input" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Livre">Frevo Livre</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Vincular a Álbum</label>
            <select id="song-album-input" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="">(Single / Sem Álbum)</option>
              ${artistAlbums.map(alb => `<option value="${alb.id}">${alb.title}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Upload de Arquivo MP3/WAV -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Arquivo de Áudio (MP3 / WAV) *</label>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-xl space-y-2">
            <input type="file" id="song-audio-file" accept="audio/*" onchange="handleAudioUploadSelection(this)" class="text-xs text-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-frevo-orange/15 file:text-frevo-orange hover:file:bg-frevo-orange/25 cursor-pointer w-full" />
            <div class="text-[10px] text-muted">Ou informe uma URL externa de áudio:</div>
            <input type="url" id="song-audio-input" placeholder="https://exemplo.com/musica.mp3" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none" />
          </div>
        </div>

        <!-- Upload Opcional de Partitura PDF -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Partitura Oficial (PDF)</label>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-xl space-y-1.5">
            <input type="file" id="song-score-file" accept="application/pdf" class="text-xs text-muted file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-frevo-cyan/15 file:text-frevo-cyan hover:file:bg-frevo-cyan/25 cursor-pointer w-full" />
            <div class="text-[10px] text-muted">Envie a partitura diagramada em PDF (opcional).</div>
          </div>
        </div>

        <!-- Upload de Imagem de Capa -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Imagem de Capa da Faixa</label>
          <div class="p-2.5 bg-surface-soft border border-gray-200 rounded-xl space-y-1.5">
            <input type="file" id="song-cover-file" accept="image/*" class="text-xs text-muted file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-gray-200 file:text-ink hover:file:bg-gray-300 cursor-pointer w-full" />
            <input type="url" id="song-cover-input" placeholder="Ou URL da imagem (https://images.unsplash.com/...)" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none" />
          </div>
        </div>

        <!-- Permissão de Download pelo Maestro -->
        <div class="p-3 bg-surface-soft border border-gray-200 rounded-xl flex items-center justify-between">
          <div class="pr-3">
            <label for="song-allow-download-input" class="text-xs font-bold text-ink block cursor-pointer">Permitir Download pelo Público</label>
            <span class="text-[10px] text-muted block">Se desmarcado, apenas você e administradores poderão baixar este áudio/partitura.</span>
          </div>
          <input type="checkbox" id="song-allow-download-input" checked class="w-4 h-4 rounded text-frevo-orange focus:ring-frevo-orange border-gray-300 cursor-pointer" />
        </div>

        <!-- Letra Oficial (Manual) -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Letra Oficial</label>
          <textarea id="song-lyrics-input" rows="4" placeholder="Insira a letra da música aqui (opcional)..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-mono"></textarea>
        </div>

        <!-- Declaração de Titularidade Autoral -->
        <div class="pt-1">
          <label class="flex items-start gap-2 cursor-pointer text-[11px] text-ink-soft select-none">
            <input type="checkbox" id="song-copyright-consent" required checked class="mt-0.5 w-3.5 h-3.5 rounded text-frevo-orange focus:ring-frevo-orange border-gray-300" />
            <span>Declaro ser o autor desta obra/arranjo ou possuir autorização legal, concordando com o <button type="button" onclick="openCopyrightModal()" class="text-frevo-orange font-bold hover:underline inline">Licenciamento Autoral</button>.</span>
          </label>
        </div>

        <!-- Indicador de Upload & Barra de Progresso no Envio Final -->
        <div id="submit-song-status" class="hidden p-3 bg-amber-50 rounded-xl border border-amber-200 text-left space-y-1.5">
          <div class="flex items-center justify-between text-xs font-bold text-amber-900">
            <span id="submit-song-status-label" class="flex items-center gap-1.5">
              <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Enviando mídia...
            </span>
            <span id="submit-upload-percentage" class="font-mono text-frevo-orange">0%</span>
          </div>
          <div class="w-full bg-amber-200/60 rounded-full h-2 overflow-hidden">
            <div id="submit-upload-progress-bar" class="bg-frevo-orange h-2 rounded-full transition-all duration-300" style="width: 15%;"></div>
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" id="btn-submit-song-action" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Publicar Música</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function handleAudioUploadSelection(input) {
  if (!input || !input.files || !input.files[0]) return;
  const file = input.files[0];
  const titleInput = document.getElementById('song-title-input');

  // Preencher título automaticamente com o nome limpo do arquivo se estiver vazio
  if (titleInput && !titleInput.value) {
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    titleInput.value = rawName.charAt(0).toUpperCase() + rawName.slice(1);
  }
}

async function submitNewSong(e) {
  e.preventDefault();
  const title = document.getElementById('song-title-input')?.value;
  const genre = document.getElementById('song-genre-input')?.value || 'Frevo de Rua';
  const albumId = document.getElementById('song-album-input')?.value || null;
  const lyrics = document.getElementById('song-lyrics-input')?.value || '';
  const allowDownload = document.getElementById('song-allow-download-input')?.checked ?? true;

  const audioFileInput = document.getElementById('song-audio-file');
  const scoreFileInput = document.getElementById('song-score-file');
  const coverFileInput = document.getElementById('song-cover-file');

  let audioUrl = document.getElementById('song-audio-input')?.value || '';
  let coverUrl = document.getElementById('song-cover-input')?.value || '';
  let scoreFileUrl = null;

  if (!title) return;

  const copyrightConsent = document.getElementById('song-copyright-consent')?.checked;
  if (!copyrightConsent) {
    showAlertModal('É necessário confirmar a declaração de direitos autorais para cadastrar a música.');
    return;
  }

  const statusEl = document.getElementById('submit-song-status');
  const statusLabel = document.getElementById('submit-song-status-label');
  const uploadPct = document.getElementById('submit-upload-percentage');
  const uploadBar = document.getElementById('submit-upload-progress-bar');
  const btnAction = document.getElementById('btn-submit-song-action');

  if (statusEl) statusEl.classList.remove('hidden');
  if (btnAction) {
    btnAction.disabled = true;
    btnAction.innerText = 'Publicando...';
  }

  const setUploadProgress = (pct, label) => {
    if (uploadBar) uploadBar.style.width = `${pct}%`;
    if (uploadPct) uploadPct.innerText = `${pct}%`;
    if (statusLabel && label) {
      statusLabel.innerHTML = `
        <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${label}
      `;
    }
  };

  try {
    const artistId = currentUserSession.artist_id || 'general';
    let durationSeconds = 180;

    // 1. Upload de Áudio MP3 / WAV e Detecção de Duração
    if (audioFileInput && audioFileInput.files && audioFileInput.files[0]) {
      const audioFile = audioFileInput.files[0];
      setUploadProgress(20, 'Processando e analisando áudio...');

      // Detectar duração precisa
      try {
        if (window.FrevoAudioEngine && typeof window.FrevoAudioEngine.decodeAudioFile === 'function') {
          const audioBuffer = await window.FrevoAudioEngine.decodeAudioFile(audioFile);
          if (audioBuffer && audioBuffer.duration && !isNaN(audioBuffer.duration)) {
            durationSeconds = Math.max(10, Math.round(audioBuffer.duration));
          }
        }
      } catch (e) {
        console.warn('[Song Upload] Duração padrão adotada:', e);
      }

      if (window.awsService) {
        const uploadedAudio = await window.awsService.uploadAudio(audioFile, artistId, (pct) => {
          setUploadProgress(Math.floor(20 + (pct * 0.4)), `Processando áudio (${pct}%)...`);
        });
        if (uploadedAudio) audioUrl = uploadedAudio;
      }
    }
    if (!audioUrl) {
      audioUrl = 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3';
    }

    // 2. Upload de Partitura PDF (Manual se fornecida)
    setUploadProgress(65, 'Processando partitura...');
    if (scoreFileInput && scoreFileInput.files && scoreFileInput.files[0] && window.awsService) {
      const uploadedScore = await window.awsService.uploadScore(scoreFileInput.files[0], artistId);
      if (uploadedScore) scoreFileUrl = uploadedScore;
    }

    // 3. Upload de Capa se selecionada
    setUploadProgress(85, 'Processando capa...');
    if (coverFileInput && coverFileInput.files && coverFileInput.files[0] && window.awsService) {
      const uploadedCover = await window.awsService.uploadSongCover(coverFileInput.files[0]);
      if (uploadedCover) coverUrl = uploadedCover;
    }
    if (!coverUrl) {
      coverUrl = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80';
    }

    setUploadProgress(95, 'Salvando na base do acervo...');

    const newSong = {
      id: `s-${Date.now()}`,
      title,
      artist: currentUserSession.name || currentUserProfile.name || 'Artista do Frevo',
      genre,
      description: 'Obra autêntica cadastrada no acervo oficial.',
      lyrics: lyrics ? lyrics.trim() : '',
      score_file: scoreFileUrl || 'partitura-oficial.pdf',
      score_path: scoreFileUrl || 'partitura-oficial.pdf',
      audio_url: audioUrl,
      cover_url: coverUrl,
      duration_seconds: durationSeconds,
      plays_count: 1,
      is_popular: true,
      album_id: albumId,
      status: 'published',
      downloads_count: 0,
      allow_download: allowDownload,
      author_id: currentUserSession.artist_id || 'a1',
      artist_id: currentUserSession.artist_id || null,
      submitted_by: currentUserSession.id || null
    };

    DB.songs.unshift(newSong);

    // Persistir no AWS
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.createSong(newSong);
    }

    setUploadProgress(100, 'Publicação concluída!');

    // Notificação Cultural In-App & Push
    const newNotif = {
      id: `notif-${Date.now()}`,
      type: 'score',
      targetId: newSong.id,
      title: 'Nova Música Cadastrada!',
      message: `${newSong.artist} lançou a faixa "${newSong.title}". Ouça agora no player!`,
      author: newSong.artist,
      author_avatar: currentUserSession.avatar,
      time_ago: 'Agora',
      read: false
    };
    DB.notifications = DB.notifications || [];
    DB.notifications.unshift(newNotif);
    updateNotificationBadge();

    closeModal();
    if (typeof renderSongs === 'function') renderSongs();
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
    showAlertModal(`Música "${newSong.title}" publicada com sucesso!`);
  } catch (err) {
    console.error('Erro ao publicar música:', err);
    showAlertModal('Erro ao enviar música: ' + err.message);
    if (btnAction) {
      btnAction.disabled = false;
      btnAction.innerText = 'Publicar Música';
    }
  }
}

window.openSubmitSongModal = openSubmitSongModal;
window.handleAudioUploadSelection = handleAudioUploadSelection;
window.submitNewSong = submitNewSong;
