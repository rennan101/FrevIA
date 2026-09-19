// ==============================================================================
// FREVAI - SISTEMA DE ALERTAS, CONFIRMAÇÕES & HISTÓRICO DE MODAIS (ZERO EMOJIS)
// ==============================================================================

let alertModalResolve = null;
window.modalHistoryStack = [];

function stripAllEmojis(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{24C2}-\u{1F251}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2300}-\u{23FF}✓✕▲▼♫★]/gu, '')
    .trim();
}

function showAlertModal(message, options = {}) {
  return new Promise((resolve) => {
    alertModalResolve = resolve;
    const modalEl = document.getElementById('app-alert-modal');
    const titleEl = document.getElementById('app-alert-title');
    const msgEl = document.getElementById('app-alert-message');
    const iconContainer = document.getElementById('app-alert-icon-container');
    const confirmBtn = document.getElementById('app-alert-confirm-btn');
    const cancelBtn = document.getElementById('app-alert-cancel-btn');

    if (!modalEl) {
      console.warn('Modal de alerta não encontrado no DOM:', message);
      resolve(true);
      return;
    }

    const cleanMsg = stripAllEmojis(String(message || ''));
    const lower = cleanMsg.toLowerCase();
    const type = options.type || (
      lower.includes('erro') || lower.includes('falha') || lower.includes('incorret')
        ? 'error'
        : lower.includes('sucesso') || lower.includes('aprovad') || lower.includes('bem-vindo') || lower.includes('salva')
          ? 'success'
          : lower.includes('atenção') || lower.includes('aviso') || lower.includes('certeza')
            ? 'warning'
            : 'info'
    );
    const title = options.title || (type === 'error' ? 'Atenção' : type === 'success' ? 'Sucesso' : type === 'warning' ? 'Aviso' : 'Informação');

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = cleanMsg;

    if (iconContainer) {
      iconContainer.className = `alert-modal-icon mb-4 icon-${type}`;
      if (type === 'success') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>`;
      } else if (type === 'error') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
      } else if (type === 'warning') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
      } else {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="8"></line></svg>`;
      }
    }

    if (confirmBtn) {
      confirmBtn.innerText = options.confirmText || 'Entendido';
      confirmBtn.className = `btn ${type === 'error' ? 'btn-destructive' : 'btn-primary'} px-5 py-2 text-xs rounded-xl font-bold shadow-md`;
    }

    if (cancelBtn) {
      if (options.showCancel) {
        cancelBtn.classList.remove('hidden');
        cancelBtn.innerText = options.cancelText || 'Cancelar';
      } else {
        cancelBtn.classList.add('hidden');
      }
    }

    modalEl.style.display = 'flex';
    void modalEl.offsetWidth;
    modalEl.classList.add('open');
  });
}

function closeAlertModal(confirmed = true) {
  const modalEl = document.getElementById('app-alert-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
    setTimeout(() => {
      modalEl.style.display = 'none';
    }, 250);
  }
  if (alertModalResolve) {
    const resolve = alertModalResolve;
    alertModalResolve = null;
    resolve(confirmed);
  }
}

function showConfirmModal(message, options = {}) {
  return showAlertModal(message, { ...options, showCancel: true, confirmText: options.confirmText || 'Confirmar' });
}

function showPlatformAlert(message, title = 'Aviso') {
  return showAlertModal(message, { title });
}

// -----------------------------------------------------------------------------
// HISTÓRICO & NAVEGAÇÃO DE MODAIS (PILHA INTELIGENTE COM PRESERVAÇÃO DE DADOS)
// -----------------------------------------------------------------------------

function updateModalBackBtn() {
  const backBtn = document.getElementById('global-modal-back-btn');
  if (!backBtn) return;
  if (window.modalHistoryStack && window.modalHistoryStack.length > 0) {
    backBtn.classList.remove('hidden');
  } else {
    backBtn.classList.add('hidden');
  }
}

function captureCurrentModalState(renderFn = null) {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody || !modal.classList.contains('open') || !modalBody.innerHTML.trim()) {
    return null;
  }

  // Capturar todos os valores de formulário
  const formValues = {};
  const inputs = modalBody.querySelectorAll('input, select, textarea');
  inputs.forEach((input, idx) => {
    const key = input.id || input.name || `field_${idx}`;
    if (input.type === 'checkbox' || input.type === 'radio') {
      formValues[key] = input.checked;
    } else {
      formValues[key] = input.value;
    }
  });

  return {
    html: modalBody.innerHTML,
    formValues: formValues,
    scrollTop: modalBody.scrollTop || 0,
    renderFn: renderFn
  };
}

function pushModalHistory(renderFn = null) {
  const state = captureCurrentModalState(renderFn);
  if (state) {
    window.modalHistoryStack = window.modalHistoryStack || [];
    window.modalHistoryStack.push(state);
    updateModalBackBtn();
  }
}

function goBackModal() {
  if (!window.modalHistoryStack || window.modalHistoryStack.length === 0) {
    closeModal();
    return;
  }

  const previousState = window.modalHistoryStack.pop();
  updateModalBackBtn();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  if (previousState) {
    if (typeof previousState.renderFn === 'function') {
      previousState.renderFn();
    } else if (previousState.html) {
      modalBody.innerHTML = previousState.html;
      
      // Restaurar valores dos campos
      if (previousState.formValues) {
        const inputs = modalBody.querySelectorAll('input, select, textarea');
        inputs.forEach((input, idx) => {
          const key = input.id || input.name || `field_${idx}`;
          if (previousState.formValues.hasOwnProperty(key)) {
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !!previousState.formValues[key];
            } else {
              input.value = previousState.formValues[key];
            }
          }
        });
      }

      if (previousState.scrollTop) {
        modalBody.scrollTop = previousState.scrollTop;
      }
    }
    modal.classList.add('open');
  } else {
    closeModal();
  }
}

// Fechamento Universal do Modal Global
function closeModal(clearHistory = true) {
  const modalEl = document.getElementById('global-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
    modalEl.classList.remove('active');
  }
  if (clearHistory) {
    window.modalHistoryStack = [];
    updateModalBackBtn();
  }
}

// Fechar com tecla ESC ou clique fora do conteúdo
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeAlertModal(false);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const globalModal = document.getElementById('global-modal');
  if (globalModal) {
    globalModal.addEventListener('click', (e) => {
      if (e.target === globalModal) {
        closeModal();
      }
    });
  }
});

// Exportações Globais
window.showAlertModal = showAlertModal;
window.closeAlertModal = closeAlertModal;
window.showConfirmModal = showConfirmModal;
window.showPlatformAlert = showPlatformAlert;
window.stripAllEmojis = stripAllEmojis;
window.closeModal = closeModal;
window.pushModalHistory = pushModalHistory;
window.goBackModal = goBackModal;
window.updateModalBackBtn = updateModalBackBtn;

