// ==========================================
// FrevAI - Map View Module
// Mapa cultural interativo, rotas Google Maps / Waze e embed
// ==========================================

function renderMapPointCardHtml(point) {
  return `
    <div class="map-point-card space-y-3 infinite-scroll-item">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="badge bg-frevo-orange/20 text-ink text-[11px] font-bold">${point.category}</span>
          <span class="text-[10px] text-muted font-semibold">Ponto Histórico</span>
        </div>
        <h3 class="font-display font-bold text-base text-ink">${point.name}</h3>
        <p class="text-xs text-muted font-medium mb-1">${point.address}</p>
        <p class="text-xs text-ink-soft leading-relaxed">${point.description || ''}</p>
      </div>

      <!-- Ações de Rotas e Navegação (Google Maps & Waze) -->
      <div class="flex gap-2 pt-1">
        <a href="https://www.google.com/maps/search/?api=1&query=${point.coords[0]},${point.coords[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gmaps text-xs flex-1 rounded-xl flex items-center justify-center gap-1.5 py-2.5 font-bold shadow-sm" title="Abrir rota no Google Maps">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Google Maps
        </a>

        <a href="https://waze.com/ul?ll=${point.coords[0]},${point.coords[1]}&navigate=yes" target="_blank" rel="noopener noreferrer" class="btn btn-waze text-xs flex-1 rounded-xl flex items-center justify-center gap-1.5 py-2.5 font-bold shadow-sm" title="Navegar pelo Waze">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24L4 22l3.05-.98C8.56 21.64 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-3.5 11c-.83 0-1.5-.67-1.5-1.5S7.67 10 8.5 10s1.5.67 1.5 1.5S9.33 13 8.5 13zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          Waze
        </a>
      </div>

      <button onclick="toggleMapEmbed('${point.id}')" class="btn btn-outline text-xs w-full rounded-xl flex items-center justify-center gap-1.5 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
        <span id="map-toggle-text-${point.id}">Ver Mapa no App</span>
      </button>

      <div id="map-embed-${point.id}" class="map-embed-container">
        <iframe 
          title="Mapa de ${point.name}"
          loading="lazy"
          src="https://maps.google.com/maps?q=${point.coords[0]},${point.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
}

function renderMap() {
  const container = document.getElementById('map-points-list');
  if (!container) return;

  InfiniteScrollManager.reset('map');
  const initialPoints = (DB.mapPoints || []).slice(0, InfiniteScrollManager.state.map.limit);

  container.innerHTML = `
    <div id="map-stream" class="map-stream-inner">
      ${initialPoints.map(point => renderMapPointCardHtml(point)).join('')}
    </div>
    <div id="sentinel-map" class="infinite-scroll-sentinel map-sentinel-col" data-view="map">
      ${(DB.mapPoints || []).length > initialPoints.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais pontos do mapa...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-map');
  if (sentinel && (DB.mapPoints || []).length > initialPoints.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreMap() {
  const stream = document.getElementById('map-stream');
  const sentinel = document.getElementById('sentinel-map');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.map;
  const start = (page - 1) * limit;
  const nextPoints = (DB.mapPoints || []).slice(start, start + limit);

  if (nextPoints.length > 0) {
    const html = nextPoints.map(point => renderMapPointCardHtml(point)).join('');
    sentinel.insertAdjacentHTML('beforebegin', html);
  }

  if (start + limit >= (DB.mapPoints || []).length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function toggleMapEmbed(pointId) {
  const container = document.getElementById(`map-embed-${pointId}`);
  const toggleText = document.getElementById(`map-toggle-text-${pointId}`);
  if (!container) return;

  const isOpen = container.classList.toggle('open');
  if (toggleText) {
    toggleText.innerText = isOpen ? 'Ocultar Mapa no App' : 'Ver Mapa no App';
  }
}

window.renderMapPointCardHtml = renderMapPointCardHtml;
window.renderMap = renderMap;
window.appendMoreMap = appendMoreMap;
window.toggleMapEmbed = toggleMapEmbed;
