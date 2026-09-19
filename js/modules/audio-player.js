// ==============================================================================
// FREVAI - GERENCIADOR DE ÁUDIO GLOBAL, REPRODUÇÃO & MOTOR DE ÁUDIO
// ==============================================================================

let currentPlayingSong = null;
let currentPlaylist = [];
let currentPlaylistIndex = 0;
let isAudioPlaying = false;
let audioSeekInterval = null;

let globalAudioCtx = null;
let currentlyPlayingSongId = null;
let activeOscillatorsList = [];
let activeAudioTimeouts = [];

function stopFrevoAudioPlayback() {
  if (activeOscillatorsList && activeOscillatorsList.length > 0) {
    activeOscillatorsList.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    activeOscillatorsList = [];
  }

  if (activeAudioTimeouts && activeAudioTimeouts.length > 0) {
    activeAudioTimeouts.forEach(t => clearTimeout(t));
    activeAudioTimeouts = [];
  }

  if (currentlyPlayingSongId) {
    const btn = document.getElementById(`btn-audio-preview-${currentlyPlayingSongId}`);
    if (btn) {
      btn.className = 'btn bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all';
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Ouvir Arranjo Musical
      `;
    }
    currentlyPlayingSongId = null;
  }
}

function formatAudioTime(sec) {
  if (isNaN(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Inicialização dos Listeners do Elemento <audio> Nativo
function initFrevoAudioEngine() {
  const audioEl = document.getElementById('frevia-audio-element');
  if (!audioEl) return;

  audioEl.addEventListener('play', () => {
    isAudioPlaying = true;
    updateAudioPlayerUI();
  });

  audioEl.addEventListener('pause', () => {
    isAudioPlaying = false;
    updateAudioPlayerUI();
  });

  audioEl.addEventListener('ended', () => {
    nextTrack();
  });

  audioEl.addEventListener('timeupdate', () => {
    const curTime = audioEl.currentTime || 0;
    const durTime = audioEl.duration || (currentPlayingSong ? currentPlayingSong.duration_seconds : 180) || 180;
    
    const progressFill = document.getElementById('player-progress-fill');
    const timeCurEl = document.getElementById('player-time-current');
    const timeTotEl = document.getElementById('player-time-total');

    if (progressFill) {
      const pct = (curTime / durTime) * 100;
      progressFill.style.width = `${Math.min(pct, 100)}%`;
    }

    if (timeCurEl) timeCurEl.innerText = formatAudioTime(curTime);
    if (timeTotEl) timeTotEl.innerText = formatAudioTime(durTime);
  });

  audioEl.addEventListener('error', (err) => {
    console.warn('[FrevoAudio] Falha ao carregar arquivo de áudio remoto, usando sintetização:', err);
  });
}

// Tocar Música Especificada
function playSong(songId, playlist = null) {
  const song = (window.DB?.songs || []).find(s => s.id === songId);
  if (!song) return;

  stopFrevoAudioPlayback();

  // Definir Playlist
  if (playlist && Array.isArray(playlist)) {
    currentPlaylist = playlist;
  } else if (!currentPlaylist || currentPlaylist.length === 0 || !currentPlaylist.some(s => s.id === song.id)) {
    currentPlaylist = window.DB?.songs || [];
  }

  currentPlaylistIndex = currentPlaylist.findIndex(s => s.id === song.id);
  if (currentPlaylistIndex === -1) currentPlaylistIndex = 0;

  currentPlayingSong = song;

  // Incrementar contador de plays
  song.plays_count = (song.plays_count || 1200) + 1;

  const playerBar = document.getElementById('apple-audio-player');
  if (playerBar) {
    playerBar.classList.remove('hidden');
  }

  const audioEl = document.getElementById('frevia-audio-element');
  if (audioEl) {
    if (song.audio_url) {
      audioEl.src = song.audio_url;
      audioEl.play().catch(e => {
        console.log('[FrevoAudio] Autoplay restrito ou arquivo remoto, fallback sintetizador:', e);
        playFrevoAudioPreview(song.id);
      });
    } else {
      playFrevoAudioPreview(song.id);
    }
  }

  updateAudioPlayerUI();
  updateLyricsModalContent();

  if (window.FrevAIAnalytics) {
    window.FrevAIAnalytics.trackSongPlay(song);
  }

  if (typeof window.updateDynamicMetaTags === 'function') {
    window.updateDynamicMetaTags({
      title: `${song.title} (${song.artist})`,
      description: `Ouça "${song.title}" de ${song.artist} no acervo digital de Frevo do FrevAI.`
    });
  }
}

function togglePlayAudio() {
  const audioEl = document.getElementById('frevia-audio-element');
  if (!currentPlayingSong && window.DB?.songs?.length > 0) {
    playSong(window.DB.songs[0].id);
    return;
  }

  if (audioEl) {
    if (audioEl.paused) {
      audioEl.play().catch(e => console.warn(e));
      isAudioPlaying = true;
    } else {
      audioEl.pause();
      isAudioPlaying = false;
    }
  } else {
    isAudioPlaying = !isAudioPlaying;
  }

  updateAudioPlayerUI();
}

function nextTrack() {
  if (!currentPlaylist || currentPlaylist.length === 0) {
    currentPlaylist = window.DB?.songs || [];
  }
  currentPlaylistIndex = (currentPlaylistIndex + 1) % (currentPlaylist.length || 1);
  const nextSong = currentPlaylist[currentPlaylistIndex];
  if (nextSong) {
    playSong(nextSong.id, currentPlaylist);
  }
}

function prevTrack() {
  if (!currentPlaylist || currentPlaylist.length === 0) {
    currentPlaylist = window.DB?.songs || [];
  }
  currentPlaylistIndex = (currentPlaylistIndex - 1 + currentPlaylist.length) % (currentPlaylist.length || 1);
  const prevSong = currentPlaylist[currentPlaylistIndex];
  if (prevSong) {
    playSong(prevSong.id, currentPlaylist);
  }
}

function seekAudio(e) {
  const progressBar = document.getElementById('player-progress-bar');
  const audioEl = document.getElementById('frevia-audio-element');
  if (!progressBar || !audioEl) return;

  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));

  const targetTime = pct * (audioEl.duration || (currentPlayingSong ? currentPlayingSong.duration_seconds : 180) || 180);
  audioEl.currentTime = targetTime;

  const progressFill = document.getElementById('player-progress-fill');
  if (progressFill) progressFill.style.width = `${pct * 100}%`;
}

function setAudioVolume(val) {
  const audioEl = document.getElementById('frevia-audio-element');
  if (audioEl) {
    audioEl.volume = Math.max(0, Math.min(1, parseFloat(val)));
  }
}

function updateAudioPlayerUI() {
  if (!currentPlayingSong) return;

  const coverEl = document.getElementById('player-track-cover');
  const titleEl = document.getElementById('player-track-title');
  const artistEl = document.getElementById('player-track-artist');
  const playIcon = document.getElementById('player-play-icon');
  const pauseIcon = document.getElementById('player-pause-icon');

  if (coverEl) coverEl.src = currentPlayingSong.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80';
  if (titleEl) titleEl.innerText = currentPlayingSong.title || 'Música do Frevo';
  if (artistEl) artistEl.innerText = currentPlayingSong.artist || 'Artista Pernambucano';

  if (playIcon && pauseIcon) {
    if (isAudioPlaying) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    }
  }
}

// -----------------------------------------------------------------------------
// MODAL DE LETRAS IMERSIVO (ESTILO APPLE MUSIC)
// -----------------------------------------------------------------------------
function toggleLyricsModal() {
  const modal = document.getElementById('apple-lyrics-modal');
  if (!modal) return;

  if (modal.classList.contains('hidden')) {
    updateLyricsModalContent();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function openExpandedPlayer() {
  toggleLyricsModal();
}

function updateLyricsModalContent() {
  const song = currentPlayingSong || window.DB?.songs?.[0];
  if (!song) return;

  const titleEl = document.getElementById('lyrics-track-title');
  const artistEl = document.getElementById('lyrics-track-artist');
  const coverEl = document.getElementById('lyrics-track-cover');
  const contentEl = document.getElementById('lyrics-text-content');

  if (titleEl) titleEl.innerText = song.title;
  if (artistEl) artistEl.innerText = `${song.artist} • ${song.genre}`;
  if (coverEl) coverEl.src = song.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80';

  if (contentEl) {
    const rawLyrics = song.lyrics || `(Instrumental — Arranjo de Metais e Clarins)\nLá vem o frevo descendo a ladeira\nCom sombrinha colorida e alegria brasileira!`;
    const lines = rawLyrics.split('\n');

    contentEl.innerHTML = `
      <div class="mb-4 p-3 bg-white/10 rounded-2xl border border-white/15 flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase tracking-wider text-frevo-orange font-bold">Revisão do Artista</span>
          <p class="text-xs text-white/80">Letra oficial validada pela Salvaguarda</p>
        </div>
        <button onclick="openEditLyricsModal('${song.id}')" class="btn bg-white/15 hover:bg-white/25 text-white text-[11px] px-3 py-1 rounded-xl font-bold border border-white/20">
          Revisar Letra
        </button>
      </div>
      <div class="space-y-3">
        ${lines.map((line, idx) => {
          if (!line.trim()) return '<div class="h-3"></div>';
          const isNote = line.trim().startsWith('(') && line.trim().endsWith(')');
          return `
            <div class="lyrics-line ${isNote ? 'text-frevo-orange/80 italic text-sm' : ''}" onclick="this.classList.toggle('text-white')">
              ${line}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

function openEditLyricsModal(songId) {
  const song = (window.DB?.songs || []).find(s => s.id === songId) || currentPlayingSong;
  if (!song) return;

  const newLyrics = prompt('Edite a letra oficial desta obra:', song.lyrics || '');
  if (newLyrics !== null && newLyrics.trim() !== '') {
    song.lyrics = newLyrics;
    updateLyricsModalContent();
    if (typeof showAlertModal === 'function') showAlertModal('Letra atualizada e salva com sucesso!');
  }
}

async function playFrevoAudioPreview(songIdOrTitle) {
  try {
    const song = (window.DB?.songs || []).find(s => s.id === songIdOrTitle || s.title === songIdOrTitle) || window.DB?.songs?.[0];
    if (!song) return;

    if (currentlyPlayingSongId === song.id) {
      stopFrevoAudioPlayback();
      return;
    }

    stopFrevoAudioPlayback();

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      if (typeof showAlertModal === 'function') showAlertModal('Seu navegador não suporta a Web Audio API.');
      return;
    }

    if (!globalAudioCtx || globalAudioCtx.state === 'closed') {
      globalAudioCtx = new AudioContextClass();
    }
    if (globalAudioCtx.state === 'suspended') {
      await globalAudioCtx.resume();
    }

    currentlyPlayingSongId = song.id;

    const btn = document.getElementById(`btn-audio-preview-${song.id}`);
    if (btn) {
      btn.className = 'btn bg-frevo-red text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-md transition-all';
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="animate-pulse">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Parar Arranjo Musical
      `;
    }

    const profile = typeof getSongMusicalProfile === 'function' ? getSongMusicalProfile(song) : null;
    if (!profile) return;

    const melodyNotes = [...profile.stave1, ...profile.stave2];
    const beatDuration = 60 / profile.bpm;

    let currentTime = globalAudioCtx.currentTime + 0.05;
    let noteStartTime = currentTime;

    // 1. Tocar Melodia dos Metais / Instrumento Principal
    melodyNotes.forEach((n, idx) => {
      const durSeconds = (n.dur === 'quarter' ? 0.9 : 0.45) * beatDuration;

      const osc = globalAudioCtx.createOscillator();
      const gain = globalAudioCtx.createGain();
      const filter = globalAudioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(n.freq, noteStartTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, noteStartTime);
      filter.frequency.exponentialRampToValueAtTime(700, noteStartTime + durSeconds);

      gain.gain.setValueAtTime(0.001, noteStartTime);
      gain.gain.linearRampToValueAtTime(0.22, noteStartTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStartTime + durSeconds);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(globalAudioCtx.destination);

      osc.start(noteStartTime);
      osc.stop(noteStartTime + durSeconds);
      activeOscillatorsList.push(osc);

      // 2. Base Rítmica de Frevo (Surdo / Tarol Sincopado)
      if (idx % 2 === 0) {
        const bassOsc = globalAudioCtx.createOscillator();
        const bassGain = globalAudioCtx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(n.freq / 4 || 110, noteStartTime);
        bassGain.gain.setValueAtTime(0.25, noteStartTime);
        bassGain.gain.exponentialRampToValueAtTime(0.001, noteStartTime + 0.18);
        bassOsc.connect(bassGain);
        bassGain.connect(globalAudioCtx.destination);
        bassOsc.start(noteStartTime);
        bassOsc.stop(noteStartTime + 0.2);
        activeOscillatorsList.push(bassOsc);
      }

      noteStartTime += durSeconds + (0.04 * beatDuration);
    });

    const totalDurationMs = (noteStartTime - globalAudioCtx.currentTime) * 1000;
    const endTimeout = setTimeout(() => {
      stopFrevoAudioPlayback();
    }, totalDurationMs);
    activeAudioTimeouts.push(endTimeout);

  } catch (err) {
    console.error('[WebAudio] Erro ao sintetizar frevo:', err);
    stopFrevoAudioPlayback();
  }
}

// -----------------------------------------------------------------------------
// MOTOR DE ANÁLISE DE ÁUDIO CLIENT-SIDE (FREVO AUDIO ENGINE)
// -----------------------------------------------------------------------------
const FrevoAudioEngine = {
  audioCtx: null,

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  async decodeAudioFile(file) {
    const ctx = this.getAudioContext();
    if (!ctx) {
      throw new Error('Web Audio API não suportada neste navegador.');
    }
    const arrayBuffer = await file.arrayBuffer();
    return await ctx.decodeAudioData(arrayBuffer);
  },

  detectBPM(audioBuffer) {
    try {
      const sampleRate = audioBuffer.sampleRate;
      const channelData = audioBuffer.getChannelData(0);
      const maxSeconds = Math.min(45, audioBuffer.duration);
      const length = Math.floor(maxSeconds * sampleRate);
      
      const windowSize = Math.floor(sampleRate * 0.04);
      const energies = [];
      for (let i = 0; i < length; i += windowSize) {
        let sum = 0;
        const end = Math.min(i + windowSize, length);
        for (let j = i; j < end; j++) {
          sum += channelData[j] * channelData[j];
        }
        energies.push(Math.sqrt(sum / (end - i)));
      }

      const avgEnergy = energies.reduce((a, b) => a + b, 0) / (energies.length || 1);
      const threshold = avgEnergy * 1.35;
      const peaks = [];
      const minPeakDist = Math.floor(0.20 / (windowSize / sampleRate));

      for (let i = 1; i < energies.length - 1; i++) {
        if (energies[i] > threshold && energies[i] > energies[i - 1] && energies[i] > energies[i + 1]) {
          if (peaks.length === 0 || (i - peaks[peaks.length - 1]) >= minPeakDist) {
            peaks.push(i);
          }
        }
      }

      if (peaks.length < 5) return 146;

      const intervals = [];
      for (let i = 1; i < peaks.length; i++) {
        intervals.push((peaks[i] - peaks[i - 1]) * (windowSize / sampleRate));
      }

      const bpmCandidates = intervals.map(int => {
        let bpm = 60 / int;
        while (bpm < 110) bpm *= 2;
        while (bpm > 170) bpm /= 2;
        return Math.round(bpm);
      });

      const freqMap = {};
      bpmCandidates.forEach(b => {
        if (b >= 100 && b <= 175) {
          freqMap[b] = (freqMap[b] || 0) + 1;
        }
      });

      let bestBpm = 146;
      let maxCount = 0;
      for (const [b, count] of Object.entries(freqMap)) {
        if (count > maxCount) {
          maxCount = count;
          bestBpm = parseInt(b, 10);
        }
      }
      return bestBpm;
    } catch (e) {
      console.warn('[FrevoAudioEngine] Erro na detecção de BPM:', e);
      return 148;
    }
  },

  detectMusicalKey(audioBuffer) {
    try {
      const sampleRate = audioBuffer.sampleRate;
      const channelData = audioBuffer.getChannelData(0);
      const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const ptNames = {
        'C': 'Dó Maior (C)', 'C#': 'Dó Sustenido Maior (C#)', 'D': 'Ré Maior (D)',
        'D#': 'Mi Bemol Maior (Eb)', 'E': 'Mi Maior (E)', 'F': 'Fá Maior (F)',
        'F#': 'Fá Sustenido Maior (F#)', 'G': 'Sol Maior (G)', 'G#': 'Lá Bemol Maior (Ab)',
        'A': 'Lá Maior (A)', 'A#': 'Si Bemol Maior (Bb)', 'B': 'Si Maior (B)'
      };

      const chromaEnergy = new Array(12).fill(0);
      const step = Math.floor(sampleRate * 0.05);
      const fftSize = 2048;
      const totalSteps = Math.min(300, Math.floor((channelData.length - fftSize) / step));

      for (let s = 0; s < totalSteps; s += 2) {
        const offset = s * step;
        for (let noteIdx = 0; noteIdx < 12; noteIdx++) {
          const freq = 440 * Math.pow(2, (noteIdx - 9) / 12);
          for (let oct = -1; oct <= 1; oct++) {
            const f = freq * Math.pow(2, oct);
            if (f < 100 || f > 1500) continue;
            const period = Math.round(sampleRate / f);
            if (period > 2 && offset + period < channelData.length) {
              let corr = 0;
              for (let k = 0; k < 64; k++) {
                corr += channelData[offset + k] * channelData[offset + k + period];
              }
              chromaEnergy[noteIdx] += Math.max(0, corr);
            }
          }
        }
      }

      let dominantIdx = 2;
      let maxEnergy = -1;
      for (let i = 0; i < 12; i++) {
        if (chromaEnergy[i] > maxEnergy) {
          maxEnergy = chromaEnergy[i];
          dominantIdx = i;
        }
      }

      const noteStr = noteNames[dominantIdx];
      return {
        keyName: ptNames[noteStr] || `${noteStr} Maior`,
        rootNote: noteStr,
        scale: 'Maior'
      };
    } catch (e) {
      console.warn('[FrevoAudioEngine] Erro na detecção de tom:', e);
      return { keyName: 'Fá Maior (F)', rootNote: 'F', scale: 'Maior' };
    }
  }
};

window.currentPlayingSong = currentPlayingSong;
window.isAudioPlaying = isAudioPlaying;
window.initFrevoAudioEngine = initFrevoAudioEngine;
window.playSong = playSong;
window.togglePlayAudio = togglePlayAudio;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.seekAudio = seekAudio;
window.setAudioVolume = setAudioVolume;
window.updateAudioPlayerUI = updateAudioPlayerUI;
window.toggleLyricsModal = toggleLyricsModal;
window.openExpandedPlayer = openExpandedPlayer;
window.updateLyricsModalContent = updateLyricsModalContent;
window.openEditLyricsModal = openEditLyricsModal;
window.playFrevoAudioPreview = playFrevoAudioPreview;
window.stopFrevoAudioPlayback = stopFrevoAudioPlayback;
window.FrevoAudioEngine = FrevoAudioEngine;
