// ==============================================================================
// FREVAI - SCORE ENGINE (PENTAGRAMAS SVG, PERFIS TONAIS & GERAÇÃO DE PDF)
// ==============================================================================

const FREVO_SONG_PROFILES = {
  's1': {
    key: 'Ré Maior (D)',
    keyAccidentals: [{ char: '♯', y: 14, x: 23 }, { char: '♯', y: 26, x: 28 }],
    bpm: 156,
    tempoLabel: 'Allegro Vivace (156 BPM)',
    lead: 'Trompete em Sib & Sax Alto',
    stave1Title: 'Pauta 1 — Ataque do Clarim & Metais em Ré Maior (Compassos 1–4)',
    stave2Title: 'Pauta 2 — Resposta Sincopada dos Saxofones & Cadência (Compassos 5–8)',
    stave1: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 414, stem: 'down', bar: 3 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 438, stem: 'down', bar: 3 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 468, stem: 'down', bar: 3, dynamic: 'ff' }
    ],
    stave2: [
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 58, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 182, stem: 'up', bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 228, stem: 'down', bar: 1 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 295, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 372, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 438, stem: 'up', bar: 3 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ]
  },
  's2': {
    key: 'Sol Maior (G)',
    keyAccidentals: [{ char: '♯', y: 14, x: 24 }],
    bpm: 160,
    tempoLabel: 'Presto Frevado (160 BPM)',
    lead: 'Clarinetes & Trompetes de Vara',
    stave1Title: 'Pauta 1 — Galope Virtuoso dos Clarinetes em Sol Maior',
    stave2Title: 'Pauta 2 — Chamada de Metais Graves & Percussão',
    stave1: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G5', staveY: 10, dur: 'eighth', freq: 783.99, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 236, stem: 'down', bar: 1 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 414, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'ff' }
    ],
    stave2: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'quarter', freq: 493.88, x: 236, stem: 'down', bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 414, stem: 'up', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ]
  },
  's3': {
    key: 'Dó Maior (C)',
    keyAccidentals: [],
    bpm: 164,
    tempoLabel: 'Vivacissimo Pernambucano (164 BPM)',
    lead: 'Clarins Triunfais & Orquestra Total',
    stave1Title: 'Pauta 1 — O Lendário Clarim de Vassourinhas em Dó Maior',
    stave2Title: 'Pauta 2 — Cascata de Semicolcheias & Furacão de Metais',
    stave1: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G5', staveY: 10, dur: 'quarter', freq: 783.99, x: 180, stem: 'down', bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'quarter', freq: 659.25, x: 228, stem: 'down', bar: 1 },
      { pitch: 'F5', staveY: 14, dur: 'eighth', freq: 698.46, x: 295, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 320, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 346, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 414, stem: 'down', bar: 3 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 438, stem: 'down', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 468, stem: 'down', bar: 3, dynamic: 'fff' }
    ],
    stave2: [
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 58, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 136, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 178, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 236, stem: 'up', bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 438, stem: 'down', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 468, stem: 'down', bar: 3, dynamic: 'ff' }
    ]
  }
};

function getSongMusicalProfile(song) {
  if (!song) return FREVO_SONG_PROFILES['s1'];
  if (FREVO_SONG_PROFILES[song.id]) return FREVO_SONG_PROFILES[song.id];

  const hash = (song.title || song.id || 'frevo').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const keys = ['Ré Maior (D)', 'Sol Maior (G)', 'Dó Maior (C)', 'Fá Maior (F)', 'Lá Maior (A)', 'Mi Menor (Em)', 'Si Bemol Maior (Bb)'];
  const selectedKey = keys[hash % keys.length];
  const bpm = 140 + (hash % 26);

  const baseNotes = [
    { pitch: 'D4', staveY: 50, freq: 293.66 },
    { pitch: 'F#4', staveY: 42, freq: 369.99 },
    { pitch: 'G4', staveY: 38, freq: 392.00 },
    { pitch: 'A4', staveY: 34, freq: 440.00 },
    { pitch: 'B4', staveY: 30, freq: 493.88 },
    { pitch: 'C5', staveY: 26, freq: 523.25 },
    { pitch: 'D5', staveY: 22, freq: 587.33 },
    { pitch: 'E5', staveY: 18, freq: 659.25 },
    { pitch: 'F#5', staveY: 14, freq: 739.99 }
  ];

  const buildStaveNotes = (offset) => {
    const arr = [];
    const positions = [58, 84, 110, 136, 178, 204, 236, 295, 320, 346, 372, 414, 438, 468];
    for (let i = 0; i < positions.length; i++) {
      const noteIdx = (hash + i * 2 + offset) % baseNotes.length;
      const n = baseNotes[noteIdx];
      const isQuarter = (i === 6 || i === 13);
      arr.push({
        pitch: n.pitch,
        staveY: n.staveY,
        dur: isQuarter ? 'quarter' : 'eighth',
        freq: n.freq,
        x: positions[i],
        stem: n.staveY < 30 ? 'down' : 'up',
        beam: (!isQuarter && i < 12) ? Math.floor(i / 2) + 1 : null,
        bar: i < 4 ? 0 : i < 7 ? 1 : i < 11 ? 2 : 3,
        dynamic: i === 13 ? 'ff' : undefined
      });
    }
    return arr;
  };

  return {
    key: selectedKey,
    keyAccidentals: selectedKey.includes('Ré') ? [{ char: '♯', y: 14, x: 23 }, { char: '♯', y: 26, x: 28 }] : [{ char: '♯', y: 14, x: 24 }],
    bpm: bpm,
    tempoLabel: `Allegro Frevado (${bpm} BPM)`,
    lead: song.genre?.includes('Bloco') ? 'Flautas & Coro de Pastoras' : 'Trompetes & Saxofones',
    stave1Title: `Pauta 1 — Tema Principal em ${selectedKey} (${song.genre || 'Frevo'})`,
    stave2Title: `Pauta 2 — Contraponto & Clímax Orquestral`,
    stave1: buildStaveNotes(0),
    stave2: buildStaveNotes(3)
  };
}

function renderStaveSvgHtml(notesList, accidentals = [], staveTitle = '') {
  return `
    <div class="relative bg-white/80 p-3 rounded-xl border border-stone-200 shadow-sm space-y-1">
      ${staveTitle ? `<div class="text-[10px] font-serif font-bold text-stone-600 uppercase tracking-wide flex items-center justify-between"><span>${staveTitle}</span><span class="text-[9px] text-frevo-orange font-mono">2/4</span></div>` : ''}
      <svg class="w-full h-16 select-none" viewBox="0 0 500 58">
        <!-- 5 Linhas da Pauta Musical -->
        <line x1="0" y1="14" x2="500" y2="14" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="22" x2="500" y2="22" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="30" x2="500" y2="30" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="38" x2="500" y2="38" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="46" x2="500" y2="46" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        
        <!-- Clave de Sol -->
        <text x="3" y="42" font-size="36" font-family="serif" font-weight="bold" fill="#171717">𝄞</text>
        
        <!-- Armadura de Clave (Acidentes) -->
        ${accidentals.map(acc => `<text x="${acc.x}" y="${acc.y + 4}" font-size="11" font-family="serif" font-weight="bold" fill="#171717">${acc.char}</text>`).join('')}

        <!-- Compasso 2/4 -->
        <text x="36" y="27" font-size="14" font-family="serif" font-weight="bold" fill="#171717">2</text>
        <text x="36" y="43" font-size="14" font-family="serif" font-weight="bold" fill="#171717">4</text>
        
        <!-- Barras de Compasso -->
        <line x1="154" y1="14" x2="154" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="272" y1="14" x2="272" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="390" y1="14" x2="390" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="496" y1="14" x2="496" y2="46" class="real-sheet-barline" stroke="#111" stroke-width="2.5"/>

        <!-- Notas Musicais Autênticas -->
        ${notesList.map((n) => {
          const isDown = n.stem === 'down';
          const stemX = isDown ? n.x - 3.8 : n.x + 3.8;
          const stemY2 = isDown ? n.staveY + 22 : n.staveY - 22;
          const hasLedger = n.staveY >= 54 || n.staveY <= 6;

          return `
            <g class="musical-note-group">
              ${hasLedger ? `<line x1="${n.x - 7}" y1="${n.staveY}" x2="${n.x + 7}" y2="${n.staveY}" stroke="#5A544A" stroke-width="1.2"/>` : ''}
              <ellipse cx="${n.x}" cy="${n.staveY}" rx="4.5" ry="3.3" transform="rotate(-18 ${n.x} ${n.staveY})" fill="${n.dur === 'half' ? 'none' : '#171717'}" stroke="#171717" stroke-width="${n.dur === 'half' ? '1.8' : '0'}"/>
              <line x1="${stemX}" y1="${n.staveY}" x2="${stemX}" y2="${stemY2}" stroke="#171717" stroke-width="1.6"/>
              ${n.dynamic ? `<text x="${n.x - 2}" y="55" font-size="11" font-family="serif" font-style="italic" font-weight="bold" fill="#C53030">${n.dynamic}</text>` : ''}
            </g>
          `;
        }).join('')}

        <!-- Ligaduras e Beams -->
        ${(() => {
          let beams = '';
          for (let i = 0; i < notesList.length - 1; i++) {
            const n1 = notesList[i];
            const n2 = notesList[i + 1];
            if (n1.beam && n2.beam && n1.beam === n2.beam && n1.stem === n2.stem) {
              const isDown = n1.stem === 'down';
              const x1 = isDown ? n1.x - 3.8 : n1.x + 3.8;
              const y1 = isDown ? n1.staveY + 22 : n1.staveY - 22;
              const x2 = isDown ? n2.x - 3.8 : n2.x + 3.8;
              const y2 = isDown ? n2.staveY + 22 : n2.staveY - 22;
              beams += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#171717" stroke-width="2.8"/>`;
            }
          }
          return beams;
        })()}
      </svg>
    </div>
  `;
}

function generateAndDownloadScorePdf(song) {
  try {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      if (typeof showAlertModal === 'function') showAlertModal('Biblioteca de PDF carregando... Por favor, tente novamente em alguns instantes.');
      return false;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const cyan = [22, 199, 217];
    const orange = [255, 138, 0];
    const red = [240, 68, 46];
    const ink = [23, 23, 23];
    const gray = [115, 115, 115];

    const profile = getSongMusicalProfile(song);

    // Cabeçalho Oficial
    doc.setFillColor(244, 241, 234);
    doc.rect(0, 0, 210, 30, 'F');

    // Faixa colorida Frevo
    doc.setFillColor(...cyan);
    doc.rect(0, 30, 70, 2.5, 'F');
    doc.setFillColor(...orange);
    doc.rect(70, 30, 70, 2.5, 'F');
    doc.setFillColor(...red);
    doc.rect(140, 30, 70, 2.5, 'F');

    // Títulos Institucionais
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('FREVIA — ACERVO DIGITAL DA SALVAGUARDA DO FREVO DE PERNAMBUCO', 105, 11, { align: 'center' });

    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text('PATRIMÔNIO CULTURAL IMATERIAL DA HUMANIDADE (UNESCO / IPHAN)', 105, 17, { align: 'center' });
    doc.text('DOCUMENTO OFICIAL DE PARTITURA E ARRANJO MUSICAL', 105, 22, { align: 'center' });

    // Título da Obra
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(...ink);
    doc.text((song.title || 'PARTITURA DO FREVO').toUpperCase(), 105, 43, { align: 'center' });

    // Dados do Compositor / Gênero / Tom / Andamento
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...red);
    doc.text(`GÊNERO: ${(song.genre || 'Frevo de Rua').toUpperCase()} • TOM: ${profile.key.toUpperCase()}`, 20, 52);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...ink);
    doc.text(`Compositor / Arranjador: ${song.artist || 'Maestro do Frevo'} • ${profile.lead}`, 20, 58);
    doc.text(`Andamento: ${profile.tempoLabel} • Compasso: 2/4 Frevado`, 20, 64);
    doc.text(`Instrumentação: Orquestra de Frevo (Sopros, Metais, Palhetas e Percussão Tradicional)`, 20, 70);

    // Linha divisória
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(20, 74, 190, 74);

    // Pauta Musical
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('PAUTA MUSICAL & GRADE DE ARRANJO', 20, 81);

    const drawPdfStaff = (notes, startY, label) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...gray);
      doc.text(label, 20, startY - 2);

      // 5 Linhas da Pauta
      doc.setDrawColor(120, 120, 120);
      doc.setLineWidth(0.3);
      for (let line = 0; line < 5; line++) {
        doc.line(20, startY + (line * 2.5), 190, startY + (line * 2.5));
      }

      // Clave de Sol
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...ink);
      doc.text('𝄞', 22, startY + 8);

      // Compasso 2/4
      doc.setFontSize(7.5);
      doc.text('2', 28, startY + 4);
      doc.text('4', 28, startY + 8.5);

      // Barras de Compasso
      doc.setDrawColor(80, 80, 80);
      doc.setLineWidth(0.4);
      doc.line(70, startY, 70, startY + 10);
      doc.line(110, startY, 110, startY + 10);
      doc.line(150, startY, 150, startY + 10);
      doc.line(190, startY, 190, startY + 10);
      doc.line(190.8, startY, 190.8, startY + 10);

      // Notas mapeadas
      const scaleX = (x) => 20 + ((x / 500) * 170);
      const scaleY = (staveY) => startY + ((staveY - 14) / 32) * 10;

      doc.setFillColor(23, 23, 23);
      doc.setDrawColor(23, 23, 23);
      doc.setLineWidth(0.4);

      notes.forEach(n => {
        const nx = scaleX(n.x);
        const ny = scaleY(n.staveY);
        doc.circle(nx, ny, 1.2, n.dur === 'half' ? 'S' : 'F');
        const stemDown = n.stem === 'down';
        const stemY2 = stemDown ? ny + 5.5 : ny - 5.5;
        const stemX = stemDown ? nx - 1.1 : nx + 1.1;
        doc.line(stemX, ny, stemX, stemY2);
      });
    };

    drawPdfStaff(profile.stave1, 89, profile.stave1Title);
    drawPdfStaff(profile.stave2, 112, profile.stave2Title);

    // Letra / Diretrizes
    const lyricsY = 136;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...cyan);
    doc.text('LETRA OFICIAL & DIRETRIZES DE EXECUÇÃO', 20, lyricsY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...ink);
    
    const lyricsContent = song.lyrics || 
      `Instrumental de Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.\n\nObservação de Arranjo: Acelerar a dinâmica nos trombones e surdos na transição do refrão.`;

    const splitLyrics = doc.splitTextToSize(lyricsContent, 170);
    doc.text(splitLyrics, 20, lyricsY + 6);

    // Rodapé de Autenticidade
    doc.setDrawColor(220, 220, 220);
    doc.line(20, 275, 190, 275);

    doc.setFontSize(7);
    doc.setTextColor(...gray);
    doc.text(`Documento gerado digitalmente pela plataforma FrevAI em ${new Date().toLocaleDateString('pt-BR')} • Licença de Salvaguarda Aberta`, 105, 281, { align: 'center' });
    doc.text(`ID do Registro: FREV-${(song.id || '00000000').substring(0, 8).toUpperCase()} • Autenticado para pesquisa e execução cultural`, 105, 285, { align: 'center' });

    const safeTitle = (song.title || 'Partitura').replace(/[^a-zA-Z0-9_-]/g, '_');
    doc.save(`Partitura_${safeTitle}.pdf`);
    return true;
  } catch (err) {
    console.error('[PDF] Erro ao gerar partitura em PDF:', err);
    if (typeof showAlertModal === 'function') showAlertModal('Erro ao processar PDF da partitura: ' + err.message);
    return false;
  }
}

function openScoreModal(title, artist, songId) {
  const song = (window.DB?.songs || []).find(s => s.id === songId) || { id: songId, title, artist, genre: 'Frevo de Rua', downloads_count: 120 };
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const profile = getSongMusicalProfile(song);
  const isPlayingThis = (window.currentlyPlayingSongId === song.id);

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Partitura &amp; Arranjo Musical</h3>
        <p class="text-[11px] text-muted">Acervo Digital Oficial da Salvaguarda • ${profile.key}</p>
      </div>

      <div class="p-4 bg-surface-soft border border-gray-100 rounded-2xl space-y-2 text-left">
        <div class="flex items-center justify-between">
          <span class="badge bg-frevo-cyan/20 text-ink text-[11px] font-bold">${song.genre}</span>
          <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
        </div>
        <h3 class="font-display font-bold text-lg text-ink leading-tight">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange">${song.artist} • ${profile.lead}</p>
        <p class="text-xs text-muted leading-relaxed">${song.description || 'Partitura oficial formatada com pauta musical, grade de arranjo e letra completa.'}</p>
      </div>

      <!-- Barra de andamento e prévia sonora -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-surface-soft rounded-xl text-xs font-medium text-ink-soft border border-gray-100 flex-wrap gap-2">
        <div class="flex items-center gap-2 text-xs flex-wrap">
          <span class="w-2.5 h-2.5 rounded-full ${isPlayingThis ? 'bg-frevo-red animate-ping' : 'bg-frevo-green animate-pulse'}"></span>
          <span>Andamento: <strong>${profile.tempoLabel}</strong></span>
          <span class="text-gray-300">•</span>
          <span>Tom: <strong>${profile.key}</strong></span>
        </div>
        <button onclick="playFrevoAudioPreview('${song.id}')" class="btn ${isPlayingThis ? 'bg-frevo-red text-white' : 'bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange'} text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all">
          ${isPlayingThis
            ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> Parar`
            : `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Ouvir Prévia`}
        </button>
      </div>

      <!-- Folha de Partitura Real com Pentagrama SVG -->
      <div class="real-sheet-canvas p-4 space-y-3 shadow-inner overflow-y-auto" style="max-height: 320px;">
        <div class="text-center pb-2 border-b border-stone-300">
          <span class="text-[9px] tracking-widest uppercase text-stone-500 font-bold block mb-0.5">Sociedade dos Músicos do Frevo de Pernambuco</span>
          <h4 class="text-xl font-serif font-black text-stone-900 tracking-wider uppercase">${song.title}</h4>
          <span class="text-[11px] font-serif italic text-stone-700">Composição &amp; Arranjo: ${song.artist} • ${profile.lead}</span>
        </div>
        <div class="space-y-3">
          ${renderStaveSvgHtml(profile.stave1, profile.keyAccidentals, profile.stave1Title)}
          ${renderStaveSvgHtml(profile.stave2, profile.keyAccidentals, profile.stave2Title)}
        </div>
        <div class="pt-3 border-t border-stone-300">
          <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-800 mb-1.5">Letra Oficial &amp; Diretrizes de Regência</h4>
          <div class="bg-white/80 p-3 rounded-xl border border-stone-200 text-xs font-serif text-stone-800 whitespace-pre-line leading-relaxed">
            ${song.lyrics || 'Instrumental — Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.'}
          </div>
        </div>
      </div>

      ${canDownloadSong(song) ? `
        <button onclick="downloadScore('${song.id}')" class="btn btn-cyan w-full text-xs rounded-xl shadow-md py-3 font-bold flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Baixar Partitura em PDF
        </button>
      ` : `
        <div class="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center text-xs text-muted flex items-center justify-center gap-2 font-medium">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-400">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Download não habilitado pelo maestro desta obra
        </div>
      `}
    </div>
  `;

  modal.classList.add('open');
}

function downloadScore(songId) {
  const song = (window.DB?.songs || []).find(s => s.id === songId) || { id: songId, title: 'Frevo da Saudade', artist: 'Maestro do Frevo', genre: 'Frevo de Rua', downloads_count: 120 };
  
  if (!canDownloadSong(song)) {
    if (typeof showAlertModal === 'function') showAlertModal('O download desta obra não foi autorizado pelo maestro/artista.');
    return;
  }

  const success = generateAndDownloadScorePdf(song);
  if (success !== false) {
    song.downloads_count = (song.downloads_count || 120) + 1;
    if (typeof renderSongs === 'function') renderSongs();
    if (typeof renderProfileGallery === 'function') renderProfileGallery();
    if (typeof closeModal === 'function') closeModal();
  }
}

function downloadCurrentSongScorePDF() {
  const songId = window.currentlyPlayingSongId || (window.currentPlayingSong ? window.currentPlayingSong.id : 's1');
  if (songId) {
    downloadScore(songId);
  } else {
    if (typeof showAlertModal === 'function') showAlertModal('Nenhuma partitura selecionada no momento.');
  }
}

window.FREVO_SONG_PROFILES = FREVO_SONG_PROFILES;
window.getSongMusicalProfile = getSongMusicalProfile;
window.renderStaveSvgHtml = renderStaveSvgHtml;
window.generateAndDownloadScorePdf = generateAndDownloadScorePdf;
window.openScoreModal = openScoreModal;
window.downloadScore = downloadScore;
window.downloadCurrentSongScorePDF = downloadCurrentSongScorePDF;

