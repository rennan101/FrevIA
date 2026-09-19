// ==========================================
// FrevAI - Steps View Module
// Catálogo de passos da dança do Frevo, instruções e demonstrações
// ==========================================

function renderStepCardHtml(step) {
  const canManage = currentUserSession.role === 'admin';
  return `
    <div class="bg-white border border-line-strong rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm relative infinite-scroll-item">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-green/20 text-ink text-xs font-bold">${step.difficulty}</span>
          <span class="text-xs text-muted font-semibold">${step.category}</span>
        </div>
        <h3 class="font-display font-bold text-xl text-ink mb-1.5">Passo: ${step.name}</h3>
        <p class="text-xs text-ink-soft leading-relaxed mb-3">${step.description}</p>
        
        <div class="p-3 rounded-xl bg-surface-soft border border-line text-xs space-y-1">
          <span class="font-bold text-[10px] text-muted uppercase tracking-wider block">Como Executar:</span>
          <div class="whitespace-pre-line text-xs font-medium leading-relaxed">${step.instructions}</div>
        </div>

        ${step.media_url ? `
          <div class="mt-3 rounded-xl overflow-hidden border border-gray-200 bg-black/5">
            ${(step.media_type === 'video' || step.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i)) ? `
              <video src="${step.media_url}" controls playsinline preload="metadata" class="w-full h-44 object-cover rounded-xl"></video>
            ` : `
              <img src="${step.media_url}" alt="Demonstração do Passo ${step.name}" class="w-full h-44 object-cover rounded-xl" loading="lazy" />
            `}
          </div>
        ` : ''}
      </div>

      ${canManage ? `
        <div class="flex gap-2 pt-1 border-t border-gray-100">
          <button onclick="deleteStep('${step.id}')" class="text-xs text-frevo-red font-bold hover:underline">
            Excluir Passo
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderSteps() {
  const container = document.getElementById('steps-grid');
  if (!container) return;

  InfiniteScrollManager.reset('steps');
  const initialSteps = (DB.steps || []).slice(0, InfiniteScrollManager.state.steps.limit);

  container.innerHTML = `
    <div id="steps-stream" class="steps-stream-inner">
      ${initialSteps.map(step => renderStepCardHtml(step)).join('')}
    </div>
    <div id="sentinel-steps" class="infinite-scroll-sentinel steps-sentinel-col" data-view="steps">
      ${(DB.steps || []).length > initialSteps.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais passos...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-steps');
  if (sentinel && (DB.steps || []).length > initialSteps.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreSteps() {
  const stream = document.getElementById('steps-stream');
  const sentinel = document.getElementById('sentinel-steps');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.steps;
  const start = (page - 1) * limit;
  const nextSteps = (DB.steps || []).slice(start, start + limit);

  if (nextSteps.length > 0) {
    const html = nextSteps.map(step => renderStepCardHtml(step)).join('');
    sentinel.insertAdjacentHTML('beforebegin', html);
  }

  if (start + limit >= (DB.steps || []).length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function deleteStep(stepId) {
  if (confirm('Deseja realmente excluir este passo?')) {
    DB.steps = (DB.steps || []).filter(s => s.id !== stepId);
    renderSteps();
    if (typeof renderAdminCMS === 'function') renderAdminCMS();
  }
}

window.renderStepCardHtml = renderStepCardHtml;
window.renderSteps = renderSteps;
window.appendMoreSteps = appendMoreSteps;
window.deleteStep = deleteStep;
