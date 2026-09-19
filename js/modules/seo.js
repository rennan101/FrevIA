// ==============================================================================
// FREVAI - SEO DINÂMICO, OPEN GRAPH & COMPARTILHAMENTO SOCIAL
// ==============================================================================

function setMetaTag(attr, key, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateDynamicMetaTags({ title, description, image, url, type = 'website' } = {}) {
  const defaultTitle = 'FrevAI — A Rede Social Cultural do Frevo';
  const defaultDesc = 'A rede social cultural do Frevo de Pernambuco. Salvaguarda, partituras, artistas, áudios e memória das agremiações.';
  const defaultImage = 'https://main.d4g55spy61el0.amplifyapp.com/assets/icons/icon-512x512.png';
  const currentUrl = url || window.location.href;

  const fullTitle = title ? `${title} — FrevAI` : defaultTitle;
  const fullDesc = description || defaultDesc;
  const fullImage = image || defaultImage;

  // 1. Atualizar Título do Documento
  document.title = fullTitle;

  // 2. Metatags Primárias
  setMetaTag('name', 'description', fullDesc);

  // 3. Open Graph / Facebook / WhatsApp
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:title', fullTitle);
  setMetaTag('property', 'og:description', fullDesc);
  setMetaTag('property', 'og:image', fullImage);
  setMetaTag('property', 'og:url', currentUrl);

  // 4. Twitter / X Cards
  setMetaTag('property', 'twitter:card', 'summary_large_image');
  setMetaTag('property', 'twitter:title', fullTitle);
  setMetaTag('property', 'twitter:description', fullDesc);
  setMetaTag('property', 'twitter:image', fullImage);
  setMetaTag('property', 'twitter:url', currentUrl);
}

async function shareCulturalContent({ title, text, url } = {}) {
  const shareUrl = url || window.location.href;
  const shareTitle = title || 'FrevAI — O Universo do Frevo de Pernambuco';
  const shareText = text || 'Venha conhecer as partituras, histórias e artistas do Frevo de Pernambuco no FrevAI!';

  if (window.FrevAIAnalytics) {
    window.FrevAIAnalytics.track('share_content', { title: shareTitle, url: shareUrl });
  }

  // 1. Tenta usar Web Share API nativa (mobile e navegadores modernos)
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
      return true;
    } catch (err) {
      if (err.name === 'AbortError') return false;
    }
  }

  // 2. Fallback: Modal de Compartilhamento Direto
  openShareModal({ title: shareTitle, text: shareText, url: shareUrl });
}

function openShareModal({ title, text, url }) {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${text}\n\n${url}`);

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-frevo-cyan/15 text-frevo-cyan flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Compartilhar Cultura</h3>
          <p class="text-xs text-muted">Dissemine o Frevo com amigos e redes sociais</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2.5">
        <!-- WhatsApp -->
        <a href="https://api.whatsapp.com/send?text=${encodedText}" target="_blank" rel="noopener noreferrer" class="p-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl flex flex-col items-center gap-1.5 transition text-green-900 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-green-600 group-hover:scale-110 transition-transform">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
          </svg>
          <span class="text-[11px] font-bold">WhatsApp</span>
        </a>

        <!-- Twitter / X -->
        <a href="https://twitter.com/intent/tweet?text=${encodedText}" target="_blank" rel="noopener noreferrer" class="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl flex flex-col items-center gap-1.5 transition text-slate-900 group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-slate-800 group-hover:scale-110 transition-transform">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span class="text-[11px] font-bold">X / Twitter</span>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" rel="noopener noreferrer" class="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-2xl flex flex-col items-center gap-1.5 transition text-blue-900 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-blue-600 group-hover:scale-110 transition-transform">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span class="text-[11px] font-bold">Facebook</span>
        </a>
      </div>

      <!-- Copiar Link -->
      <div class="space-y-1.5 pt-1">
        <label class="block text-[10px] font-bold text-muted uppercase">Link Direto</label>
        <div class="flex gap-2">
          <input type="text" readonly value="${url}" id="share-modal-url-input" class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink font-mono focus:outline-none" />
          <button type="button" onclick="copyShareModalLink()" id="btn-copy-share-modal" class="btn btn-primary text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copiar
          </button>
        </div>
      </div>

      <div class="pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline w-full text-xs rounded-xl py-2 font-bold">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function copyShareModalLink() {
  const input = document.getElementById('share-modal-url-input');
  const btn = document.getElementById('btn-copy-share-modal');
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
      if (btn) {
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Copiado!`;
        setTimeout(() => {
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copiar`;
        }, 2500);
      }
    });
  }
}

// Exportações Globais
window.updateDynamicMetaTags = updateDynamicMetaTags;
window.shareCulturalContent = shareCulturalContent;
window.openShareModal = openShareModal;
window.copyShareModalLink = copyShareModalLink;
