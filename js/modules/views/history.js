// ==========================================
// FrevAI - History View Module
// Linha do tempo histórica do Frevo, ordenação cronológica inteligente
// ==========================================

function parseHistoryYear(periodStr) {
  if (!periodStr) return 9999;
  const str = String(periodStr).toLowerCase();

  const yearMatches = str.match(/\b(1[6789]\d\d|20\d\d)\b/g);
  let baseYear = null;
  if (yearMatches && yearMatches.length > 0) {
    baseYear = parseInt(yearMatches[0], 10);
  }

  if (baseYear === null) {
    const centuryMatch = str.match(/s[eé]culo\s+([xvi]+)/i);
    if (centuryMatch) {
      const rom = centuryMatch[1].toUpperCase();
      let num = 0;
      if (rom === 'XVIII') num = 18;
      else if (rom === 'XIX') num = 19;
      else if (rom === 'XX') num = 20;
      else if (rom === 'XXI') num = 21;
      if (num > 0) {
        baseYear = (num - 1) * 100 + (str.includes('final') ? 85 : (str.includes('meados') ? 50 : 1));
      }
    }
  }

  if (baseYear === null) return 9999;

  const months = ['janeiro', 'fevereiro', 'março', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  let monthIndex = 0;
  for (let i = 0; i < months.length; i++) {
    if (str.includes(months[i])) {
      monthIndex = i + 1;
      break;
    }
  }

  let day = 1;
  const dayMatch = str.match(/\b([0-2]?\d|3[01])\s+de\s+[a-zç]+/i);
  if (dayMatch) {
    day = parseInt(dayMatch[1], 10);
  }

  return baseYear + (monthIndex / 12) + (day / 365);
}

function sortHistoryTimeline() {
  if (Array.isArray(DB.history)) {
    DB.history.sort((a, b) => parseHistoryYear(a.period) - parseHistoryYear(b.period));
  }
}

function renderHistoryItemHtml(item) {
  const isAdmin = currentUserSession.role === 'admin';

  return `
    <div class="relative pl-6 pb-6 border-l-2 border-frevo-yellow last:border-l-0 infinite-scroll-item">
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-frevo-yellow border-2 border-paper shadow-sm"></div>
      <div class="bg-white border border-line-strong rounded-2xl p-4 space-y-2 shadow-sm transition hover:shadow-md">
        <div class="flex items-center justify-between gap-2">
          <span class="badge bg-frevo-yellow/40 text-ink text-[11px] font-bold">${item.period}</span>
          ${isAdmin ? `
            <div class="flex items-center gap-1">
              <button onclick="openEditHistoryModal('${item.id}')" class="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Editar Marco">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button onclick="deleteHistory('${item.id}')" class="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition" title="Excluir Marco">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ` : ''}
        </div>
        <h3 class="font-display font-bold text-lg text-ink">${item.title}</h3>
        <p class="text-xs text-ink-soft leading-relaxed">${item.content}</p>
        ${(item.media_url || item.image_url) ? `
          <div class="mt-2.5 rounded-xl overflow-hidden border border-gray-200 bg-black/5">
            ${(item.media_type === 'video' || (item.media_url && item.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
              <video src="${item.media_url}" controls playsinline preload="metadata" class="w-full h-44 object-cover rounded-xl"></video>
            ` : `
              <img src="${item.media_url || item.image_url}" alt="${item.title}" class="w-full h-44 object-cover rounded-xl" loading="lazy" />
            `}
          </div>
        ` : ''}
        <div class="pt-2 text-[11px] text-muted border-t border-line">
          <strong>Fonte:</strong> ${item.source}
        </div>
      </div>
    </div>
  `;
}

function renderHistory() {
  const container = document.getElementById('history-timeline');
  if (!container) return;

  sortHistoryTimeline();

  InfiniteScrollManager.reset('history');
  const initialHistory = (DB.history || []).slice(0, InfiniteScrollManager.state.history.limit);

  container.innerHTML = `
    <div id="history-stream">
      ${initialHistory.map(item => renderHistoryItemHtml(item)).join('')}
    </div>
    <div id="sentinel-history" class="infinite-scroll-sentinel" data-view="history">
      ${(DB.history || []).length > initialHistory.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais fatos históricos...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-history');
  if (sentinel && (DB.history || []).length > initialHistory.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreHistory() {
  const stream = document.getElementById('history-stream');
  const sentinel = document.getElementById('sentinel-history');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.history;
  const start = (page - 1) * limit;
  const nextHistory = (DB.history || []).slice(start, start + limit);

  if (nextHistory.length > 0) {
    const html = nextHistory.map(item => renderHistoryItemHtml(item)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= (DB.history || []).length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function deleteHistory(id) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir marcos históricos.');
    return;
  }
  if (confirm('Deseja realmente excluir este marco histórico da linha do tempo?')) {
    DB.history = (DB.history || []).filter(h => h.id !== id);
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteHistoryEntry?.(id);
    }
    renderHistory();
    if (typeof renderAdminCMS === 'function') renderAdminCMS();
    showAlertModal('Marco histórico removido com sucesso!', { title: 'Marco Excluído', type: 'success' });
  }
}

window.parseHistoryYear = parseHistoryYear;
window.sortHistoryTimeline = sortHistoryTimeline;
window.renderHistoryItemHtml = renderHistoryItemHtml;
window.renderHistory = renderHistory;
window.appendMoreHistory = appendMoreHistory;
window.deleteHistory = deleteHistory;
