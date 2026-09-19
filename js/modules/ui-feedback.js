// ==============================================================================
// FREVAI UI FEEDBACK — SISTEMA DE TOASTS & SKELETON SCREENS
// Padrão visual elegante, acessível, não-bloqueante e ZERO emojis
// ==============================================================================

const ToastManager = {
  container: null,

  init() {
    if (this.container) return;
    let container = document.getElementById('frevai-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'frevai-toast-container';
      container.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-[2000] flex flex-col items-center gap-2 pointer-events-none w-full max-w-sm px-4';
      document.body.appendChild(container);
    }
    this.container = container;
  },

  show(message, type = 'info', duration = 3500) {
    this.init();
    if (!this.container || !message) return;

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 transform translate-y-3 opacity-0 text-xs font-semibold max-w-md w-full';

    let iconSvg = '';
    let styleClasses = '';

    switch (type) {
      case 'success':
        styleClasses = 'bg-emerald-950/90 text-emerald-100 border-emerald-700/60 shadow-emerald-950/20';
        iconSvg = `<svg class="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        break;
      case 'error':
        styleClasses = 'bg-rose-950/90 text-rose-100 border-rose-700/60 shadow-rose-950/20';
        iconSvg = `<svg class="w-4 h-4 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
        break;
      case 'warning':
        styleClasses = 'bg-amber-950/90 text-amber-100 border-amber-700/60 shadow-amber-950/20';
        iconSvg = `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
        break;
      default:
        styleClasses = 'bg-gray-900/90 text-gray-100 border-gray-700/60 shadow-black/20';
        iconSvg = `<svg class="w-4 h-4 text-frevo-orange flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
        break;
    }

    toast.className += ` ${styleClasses}`;
    toast.innerHTML = `
      ${iconSvg}
      <span class="flex-1 truncate leading-tight">${message}</span>
      <button class="text-white/60 hover:text-white p-0.5" aria-label="Fechar">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    const closeBtn = toast.querySelector('button');
    if (closeBtn) {
      closeBtn.onclick = () => this.dismiss(toast);
    }

    this.container.appendChild(toast);

    // Animar entrada
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Auto dismiss
    const timer = setTimeout(() => {
      this.dismiss(toast);
    }, duration);

    toast.dataset.timerId = timer;
  },

  dismiss(toast) {
    if (!toast || !toast.parentNode) return;
    if (toast.dataset.timerId) clearTimeout(toast.dataset.timerId);

    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');

    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }
};

const SkeletonHelper = {
  getFeedCardSkeleton() {
    return `
      <div class="p-4 bg-white rounded-3xl border border-gray-100 shadow-sm animate-pulse space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div class="space-y-1.5 flex-1">
            <div class="h-3.5 bg-gray-200 rounded-md w-1/3"></div>
            <div class="h-2.5 bg-gray-100 rounded-md w-1/4"></div>
          </div>
        </div>
        <div class="w-full h-56 bg-gray-200 rounded-2xl"></div>
        <div class="space-y-2 pt-1">
          <div class="h-4 bg-gray-200 rounded-md w-3/4"></div>
          <div class="h-3 bg-gray-100 rounded-md w-full"></div>
          <div class="h-3 bg-gray-100 rounded-md w-2/3"></div>
        </div>
      </div>
    `;
  },

  getSongCardSkeleton() {
    return `
      <div class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm animate-pulse flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-gray-200 flex-shrink-0"></div>
          <div class="space-y-1.5 flex-1 min-w-0">
            <div class="h-3 bg-gray-200 rounded w-1/2"></div>
            <div class="h-2.5 bg-gray-100 rounded w-1/3"></div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-gray-200"></div>
          <div class="w-8 h-8 rounded-xl bg-gray-200"></div>
        </div>
      </div>
    `;
  },

  getArtistCardSkeleton() {
    return `
      <div class="p-4 bg-white rounded-3xl border border-gray-100 shadow-sm animate-pulse flex flex-col items-center text-center space-y-3">
        <div class="w-20 h-20 rounded-2xl bg-gray-200"></div>
        <div class="space-y-1.5 w-full flex flex-col items-center">
          <div class="h-3.5 bg-gray-200 rounded w-2/3"></div>
          <div class="h-2.5 bg-gray-100 rounded w-1/2"></div>
        </div>
      </div>
    `;
  }
};

window.ToastManager = ToastManager;
window.showToast = (msg, type, dur) => ToastManager.show(msg, type, dur);
window.SkeletonHelper = SkeletonHelper;
