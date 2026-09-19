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
      <div class="flex items-center gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-12 h-12 rounded-2xl bg-frevo-orange/10 text-frevo-orange flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Cadastrar Nova Música</h3>
          <p class="text-xs text-muted">Adicione faixas de áudio, partituras e letras ao acervo oficial</p>
        </div>
      </div>

      <form id="new-song-form" onsubmit="submitNewSong(event)" class="space-y-3.5">
        <div>
          <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Título da Música *</label>
          <input type="text" id="song-title-input" required placeholder="Ex: Passo da Fervura" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Gênero Tradicional</label>
            <select id="song-genre-input" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Livre">Frevo Livre</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Vincular a Álbum</label>
            <select id="song-album-input" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition">
              <option value="">(Single / Sem Álbum)</option>
              ${artistAlbums.map(alb => `<option value="${alb.id}">${alb.title}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Upload de Arquivo MP3/WAV -->
        <div>
          <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Arquivo de Áudio (MP3 / WAV) *</label>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-2xl space-y-2">
            <input type="file" id="song-audio-file" accept="audio/*" onchange="handleAudioUploadSelection(this)" class="text-xs text-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-red-50 file:text-red-600 hover:file:bg-red-100 cursor-pointer w-full transition" />
            <div class="text-[11px] text-muted">Ou informe uma URL externa de áudio:</div>
            <input type="url" id="song-audio-input" placeholder="https://exemplo.com/musica.mp3" class="w-full px-3.5 py-2 text-xs border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition font-mono" />
          </div>
        </div>

        <!-- Upload Opcional de Partitura PDF -->
        <div>
          <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Partitura Oficial (PDF)</label>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-2xl space-y-1.5">
            <input type="file" id="song-score-file" accept="application/pdf" class="text-xs text-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 cursor-pointer w-full transition" />
            <div class="text-[11px] text-muted">Envie a partitura diagramada em PDF (opcional).</div>
          </div>
        </div>

        <!-- Upload de Imagem de Capa -->
        <div>
          <label class="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Imagem de Capa da Faixa</label>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-2xl space-y-1.5">
            <input type="file" id="song-cover-file" accept="image/*" class="text-xs text-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-gray-200 file:text-ink hover:file:bg-gray-300 cursor-pointer w-full transition" />
            <input type="url" id="song-cover-input" placeholder="Ou URL da imagem (https://...)" class="w-full px-3.5 py-2 text-xs border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
          </div>
        </div>

        <!-- Permissão de Download pelo Maestro -->
        <div class="p-3.5 bg-surface-soft border border-gray-200 rounded-2xl flex items-center justify-between">
          <div class="pr-3">
            <label for="song-allow-download-input" class="text-xs font-bold text-ink block cursor-pointer">Permitir Download pelo Público</label>
            <span class="text-[11px] text-muted block">Se desmarcado, apenas você e administradores poderão baixar este áudio/partitura.</span>
          </div>
          <input type="checkbox" id="song-allow-download-input" checked class="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-gray-300 cursor-pointer" />
        </div>

        <!-- Letra Oficial (Manual e Resizable) -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-xs font-bold text-ink uppercase tracking-wider">Letra Oficial da Música</label>
            <span class="text-[10px] text-muted font-medium">Caixa redimensionável</span>
          </div>
          <textarea id="song-lyrics-input" rows="5" placeholder="Insira a letra da música completa aqui..." class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition resize-y min-h-[120px] max-h-[450px] leading-relaxed"></textarea>
        </div>

        <!-- Declaração de Titularidade Autoral -->
        <div class="pt-1">
          <label class="flex items-start gap-2 cursor-pointer text-xs text-ink-soft select-none">
            <input type="checkbox" id="song-copyright-consent" required checked class="mt-0.5 w-4 h-4 rounded text-red-600 focus:ring-red-500 border-gray-300" />
            <span>Declaro ser o autor desta obra ou possuir autorização legal, concordando com o <button type="button" onclick="openCopyrightModal()" class="text-red-600 font-bold hover:underline inline">Licenciamento Autoral</button>.</span>
          </label>
        </div>

        <!-- Indicador de Upload & Barra de Progresso no Envio Final -->
        <div id="submit-song-status" class="hidden p-3.5 bg-red-50/70 rounded-2xl border border-red-200 text-left space-y-1.5">
          <div class="flex items-center justify-between text-xs font-bold text-red-900">
            <span id="submit-song-status-label" class="flex items-center gap-1.5">
              <svg class="animate-spin text-red-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Enviando mídia para a nuvem...
            </span>
            <span id="submit-upload-percentage" class="font-mono text-red-600">0%</span>
          </div>
          <div class="w-full bg-red-200/60 rounded-full h-2 overflow-hidden">
            <div id="submit-upload-progress-bar" class="bg-red-600 h-2 rounded-full transition-all duration-300" style="width: 15%;"></div>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline px-5 py-2.5 text-xs rounded-xl font-bold flex-1">Cancelar</button>
          <button type="submit" id="btn-submit-song-action" class="btn btn-primary px-5 py-2.5 text-xs rounded-xl shadow-md font-bold flex-1">Publicar Música</button>
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
  const form = document.getElementById('new-song-form');
  if (window.ValidatorEngine && form) {
    window.ValidatorEngine.clearFormErrors(form);
  }

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

  if (window.ValidatorEngine) {
    const valResult = window.ValidatorEngine.validate({
      title,
      genre,
      author: currentUserSession?.name || 'Artista'
    }, 'song');

    if (!valResult.isValid) {
      if (valResult.errors.title) window.ValidatorEngine.showFieldError('song-title-input', valResult.errors.title);
      if (window.showToast) window.showToast('Por favor, preencha os campos obrigatórios corretamente.', 'warning');
      return;
    }
  }

  const copyrightConsent = document.getElementById('song-copyright-consent')?.checked;
  if (!copyrightConsent) {
    if (window.showToast) {
      window.showToast('Confirme a declaração de direitos autorais para continuar.', 'warning');
    } else {
      showAlertModal('É necessário confirmar a declaração de direitos autorais para cadastrar a música.');
    }
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
      coverUrl = '';
    }

    setUploadProgress(95, 'Salvando na base do acervo...');

    const newSong = {
      id: `s-${Date.now()}`,
      title,
      artist: currentUserSession.name || currentUserProfile.name || 'Artista do Frevo',
      genre,
      description: 'Obra autêntica cadastrada no acervo oficial.',
      lyrics: lyrics ? lyrics.trim() : '',
      score_file: scoreFileUrl || null,
      score_path: scoreFileUrl || null,
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
    if (typeof saveSongsLocal === 'function') saveSongsLocal();

    // Persistir no AWS
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.createSong(newSong);
    }

    setUploadProgress(100, 'Publicação concluída!');

    // Notificação Cultural In-App direcionada a foliões que seguem/favoritaram o artista
    const targetArtistId = newSong.artist_id || currentUserSession.artist_id || 'a1';
    const newNotif = {
      id: `notif-${Date.now()}`,
      type: 'score',
      targetId: newSong.id,
      forFavoritesOfArtist: targetArtistId,
      artist_id: targetArtistId,
      title: 'Novo Lançamento no Acervo!',
      message: `${newSong.artist} lançou a faixa "${newSong.title}". Ouça agora no player!`,
      author: newSong.artist,
      author_avatar: currentUserSession.avatar,
      time_ago: 'Agora mesmo',
      read: false,
      readBy: []
    };
    DB.notifications = DB.notifications || [];
    DB.notifications.unshift(newNotif);
    if (typeof saveNotificationsLocal === 'function') saveNotificationsLocal();
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
