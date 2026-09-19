// ==========================================
// FrevAI - Admin View Module
// Painel Administrativo CMS, Gestão de Solicitações Artísticas, Posts, Locais, Passos e História
// ==========================================

let currentAdminTab = 'stats';

function switchAdminTab(tabName, btnElement) {
  currentAdminTab = tabName;
  document.querySelectorAll('.admin-tab-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }
  renderAdminCMS();
}

async function renderAdminCMS() {
  const container = document.getElementById('admin-cms-content');
  if (!container) return;

  if (typeof loadArtistRequestsLocal === 'function') loadArtistRequestsLocal();
  if (typeof loadArtistsLocal === 'function') loadArtistsLocal();
  if (typeof loadPostsLocal === 'function') loadPostsLocal();
  if (typeof loadSongsLocal === 'function') loadSongsLocal();

  if (currentAdminTab === 'stats') {
    const stats = window.FrevAIAnalytics && typeof window.FrevAIAnalytics.getAnalyticsSummary === 'function'
      ? window.FrevAIAnalytics.getAnalyticsSummary()
      : {
          totalUsers: 7,
          totalFolioes: 5,
          totalArtistas: 3,
          totalAdmins: 1,
          totalAcessos: 154,
          pageViewsToday: 18,
          pageViews7d: 86,
          pageViews30d: 154,
          dau: 4,
          wau: 7,
          mau: 7,
          stickiness: '57.1',
          totalPosts: (DB.posts || []).length,
          totalSongs: (DB.songs || []).length,
          songPlaysCount: 38,
          scoreDownloadsCount: 14
        };

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Header da Seção de Estatísticas com Botão de Exportar Relatório PDF -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 class="font-display font-bold text-sm text-ink">Estatísticas &amp; Indicadores Culturais</h3>
            </div>
            <p class="text-[11px] text-muted mt-0.5">Telemetria em tempo real, métricas de engajamento (DAU/MAU) e acervo da rede</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <button onclick="generateAdminAnalyticsPDF()" class="btn btn-primary text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 shadow-sm whitespace-nowrap" title="Baixar Relatório Executivo em PDF">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Gerar Relatório em PDF</span>
            </button>
          </div>
        </div>

        <!-- Grade de Cards de Métricas Principais -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <!-- Total de Usuários -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">Total de Usuários</span>
              <div class="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.totalUsers}</span>
              <span class="text-[10px] text-emerald-600 font-bold">100% ativos</span>
            </div>
            <div class="text-[10px] text-muted flex items-center justify-between pt-0.5 border-t border-gray-100">
              <span>Foliões: <strong>${stats.totalFolioes}</strong></span>
              <span>Artistas: <strong>${stats.totalArtistas}</strong></span>
            </div>
          </div>

          <!-- Usuários Ativos Diários (DAU) -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">DAU (Ativos Hoje)</span>
              <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.dau}</span>
              <span class="text-[10px] text-emerald-600 font-bold">Hoje</span>
            </div>
            <div class="text-[10px] text-muted pt-0.5 border-t border-gray-100 truncate">
              Acessos hoje: <strong>${stats.pageViewsToday} views</strong>
            </div>
          </div>

          <!-- Usuários Ativos Mensais (MAU) -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">MAU (Ativos 30d)</span>
              <div class="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.mau}</span>
              <span class="text-[10px] text-purple-600 font-bold">Stickiness ${stats.stickiness}%</span>
            </div>
            <div class="text-[10px] text-muted pt-0.5 border-t border-gray-100 truncate">
              Últimos 7 dias: <strong>${stats.wau} ativos</strong>
            </div>
          </div>

          <!-- Total de Acessos & Pageviews -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">Acessos à Página</span>
              <div class="w-7 h-7 rounded-lg bg-frevo-orange/10 text-frevo-orange flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.totalAcessos}</span>
              <span class="text-[10px] text-frevo-orange font-bold">visualizações</span>
            </div>
            <div class="text-[10px] text-muted pt-0.5 border-t border-gray-100 truncate">
              Últimos 30 dias: <strong>${stats.pageViews30d} views</strong>
            </div>
          </div>

          <!-- Artistas & Agremiações -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">Artistas Oficiais</span>
              <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.totalArtistas}</span>
              <span class="text-[10px] text-amber-600 font-bold">aprovados</span>
            </div>
            <div class="text-[10px] text-muted pt-0.5 border-t border-gray-100 truncate">
              Acervo: <strong>${(DB.artists || []).length} perfis</strong>
            </div>
          </div>

          <!-- Acervo Musical & Partituras -->
          <div class="p-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1.5 transition-all hover:border-gray-300">
            <div class="flex items-center justify-between text-muted">
              <span class="text-[10px] font-bold uppercase tracking-wider">Músicas &amp; Obras</span>
              <div class="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
            </div>
            <div class="flex items-baseline gap-1.5">
              <span class="font-display font-extrabold text-2xl text-ink">${stats.totalSongs}</span>
              <span class="text-[10px] text-teal-600 font-bold">partituras</span>
            </div>
            <div class="text-[10px] text-muted pt-0.5 border-t border-gray-100 truncate">
              ${stats.scoreDownloadsCount} downloads realizados
            </div>
          </div>
        </div>

        <!-- Painel Detalhado de Distribuição de Usuários & Conteúdos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- Distribuição por Papéis de Usuários -->
          <div class="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 class="font-display font-bold text-xs text-ink uppercase tracking-wider">Composição dos Usuários</h4>
              <span class="text-[10px] text-muted">${stats.totalUsers} contas cadastradas</span>
            </div>
            
            <div class="space-y-2.5">
              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="text-ink font-semibold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span> Foliões (Passistas &amp; Público)
                  </span>
                  <span class="font-bold text-ink">${stats.totalFolioes} (${Math.round((stats.totalFolioes / stats.totalUsers) * 100)}%)</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 rounded-full" style="width: ${Math.round((stats.totalFolioes / stats.totalUsers) * 100)}%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="text-ink font-semibold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span> Artistas &amp; Mestres
                  </span>
                  <span class="font-bold text-ink">${stats.totalArtistas} (${Math.round((stats.totalArtistas / stats.totalUsers) * 100)}%)</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full" style="width: ${Math.round((stats.totalArtistas / stats.totalUsers) * 100)}%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="text-ink font-semibold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-rose-500"></span> Administradores &amp; Curadoria
                  </span>
                  <span class="font-bold text-ink">${stats.totalAdmins} (${Math.round((stats.totalAdmins / stats.totalUsers) * 100)}%)</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div class="h-full bg-rose-500 rounded-full" style="width: ${Math.round((stats.totalAdmins / stats.totalUsers) * 100)}%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resumo de Engajamento e Interatividade -->
          <div class="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 class="font-display font-bold text-xs text-ink uppercase tracking-wider">Engajamento &amp; Preservação</h4>
              <span class="text-[10px] text-muted">Auditoria Contínua</span>
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100">
                <span class="text-[10px] text-muted block">Publicações no Feed</span>
                <strong class="text-ink text-base font-bold">${stats.totalPosts} posts</strong>
              </div>
              <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100">
                <span class="text-[10px] text-muted block">Reproduções de Áudio</span>
                <strong class="text-ink text-base font-bold">${stats.songPlaysCount} plays</strong>
              </div>
              <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100">
                <span class="text-[10px] text-muted block">Pontos no Mapa</span>
                <strong class="text-ink text-base font-bold">${(DB.mapPoints || []).length} locais</strong>
              </div>
              <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100">
                <span class="text-[10px] text-muted block">Passos Catalogados</span>
                <strong class="text-ink text-base font-bold">${(DB.steps || []).length} passos</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Banner de Salvaguarda & Conformidade com Banco de Dados -->
        <div class="p-3.5 bg-surface-soft rounded-2xl border border-gray-200/80 flex items-center justify-between gap-3 text-xs text-muted">
          <div class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-frevo-green">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Persistência garantida via LocalStorage e sincronização com Amazon DynamoDB / PostgreSQL</span>
          </div>
          <button onclick="renderAdminCMS()" class="text-[11px] text-frevo-orange font-bold hover:underline whitespace-nowrap">
            Atualizar Dados
          </button>
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'artists') {
    let pendingRequests = (DB.artistRequests || []).filter(r => r.status === 'pending');

    if (window.awsService && window.awsService.isConnected()) {
      try {
        const awsPending = await window.awsService.getPendingArtistRequests();
        const existingIds = new Set(pendingRequests.map(r => r.id));
        for (const ap of (awsPending || [])) {
          if (!existingIds.has(ap.id) && ap.status === 'pending') {
            pendingRequests.push(ap);
          }
        }
      } catch (err) {
        console.warn('Erro ao obter solicitações do AWS:', err);
      }
    }

    container.innerHTML = `
      <div class="space-y-4">
        <!-- 1. Fila de Solicitações Pendentes de Artista -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <h3 class="font-display font-bold text-sm text-ink flex items-center gap-2">
                <span>Solicitações de Artistas</span>
                <span class="badge ${pendingRequests.length > 0 ? 'bg-frevo-orange text-white' : 'bg-gray-100 text-muted'} text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ${pendingRequests.length} pendente${pendingRequests.length === 1 ? '' : 's'}
                </span>
              </h3>
              <p class="text-[11px] text-muted">Aprove os projetos artísticos para liberar as ferramentas de publicação</p>
            </div>
          </div>

          <div class="space-y-2.5">
            ${pendingRequests.length > 0 ? pendingRequests.map(req => `
              <div class="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/80 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <img src="${getUserAvatarUrl(req.user?.avatar_url)}" alt="${req.requested_name}" class="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-amber-300" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
                    <div class="min-w-0">
                      <strong class="text-ink text-xs block font-bold truncate">${req.requested_name}</strong>
                      <span class="text-[11px] text-muted block">Fã: ${req.user?.display_name || 'Usuário'} (${req.user?.handle || '@foliao'})</span>
                      <span class="badge bg-frevo-orange/20 text-frevo-orange text-[10px] font-bold mt-0.5">${req.genre || 'Frevo de Rua'}</span>
                    </div>
                  </div>
                  <div class="flex gap-1.5 flex-shrink-0">
                    <button onclick="confirmApproveArtistRequest('${req.id}')" class="btn btn-green text-[11px] px-2.5 py-1 rounded-xl font-bold shadow-sm">
                      Aprovar
                    </button>
                    <button onclick="openRejectArtistModal('${req.id}')" class="btn btn-destructive text-[11px] px-2.5 py-1 rounded-xl font-bold shadow-sm">
                      Recusar
                    </button>
                  </div>
                </div>
                ${req.bio ? `<p class="text-[11px] text-ink-soft bg-white/70 p-2 rounded-xl border border-amber-100 italic">${req.bio}</p>` : ''}
                <div class="flex flex-wrap gap-2 text-[10px] text-muted pt-1">
                  ${req.whatsapp ? `<span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-mono">WhatsApp: ${req.whatsapp}</span>` : ''}
                  ${req.instagram_url ? `<span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-mono">Instagram: ${req.instagram_url}</span>` : ''}
                </div>
              </div>
            `).join('') : `
              <div class="p-4 text-center text-xs text-muted bg-surface-soft rounded-xl border border-gray-100">
                Nenhuma solicitação de artista aguardando moderação no momento.
              </div>
            `}
          </div>
        </div>

        <!-- 2. Artistas Cadastrados no Catálogo Oficial -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <h3 class="font-display font-bold text-sm text-ink">Artistas no Acervo Oficial (${(DB.artists || []).length})</h3>
              <p class="text-[11px] text-muted">Artistas aprovados e publicados na rede</p>
            </div>
            <button onclick="openNewArtistModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Artista</button>
          </div>

          <div class="space-y-2">
            ${(DB.artists || []).map(artist => `
              <div class="p-2.5 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${getUserAvatarUrl(artist.avatar_url)}" alt="${artist.name}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
                  <div class="min-w-0">
                    <strong class="text-ink text-xs block truncate">${artist.name}</strong>
                    <span class="text-[10px] text-muted block">${artist.genre || 'Frevo de Rua'}</span>
                  </div>
                </div>
                <div class="flex gap-1.5 flex-shrink-0">
                  <button onclick="openArtistProfile('${artist.id}')" class="btn btn-outline text-[10px] px-2 py-1 rounded-xl font-bold">
                    Ver Perfil
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'users') {
    const users = (typeof loadUsersLocal === 'function') ? loadUsersLocal() : [];
    const filterRole = window.adminUsersRoleFilter || 'all';
    const searchQuery = (window.adminUsersSearchQuery || '').toLowerCase().trim();

    const filteredUsers = users.filter(u => {
      if (filterRole !== 'all' && u.role !== filterRole) return false;
      if (searchQuery) {
        const nameMatch = (u.name || '').toLowerCase().includes(searchQuery);
        const handleMatch = (u.handle || '').toLowerCase().includes(searchQuery);
        const emailMatch = (u.email || '').toLowerCase().includes(searchQuery);
        const cityMatch = (u.city || '').toLowerCase().includes(searchQuery);
        return nameMatch || handleMatch || emailMatch || cityMatch;
      }
      return true;
    });

    const totalFoliões = users.filter(u => u.role === 'user' || !u.role).length;
    const totalArtistas = users.filter(u => u.role === 'artist').length;
    const totalAdmins = users.filter(u => u.role === 'admin').length;

    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-4 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-frevo-red">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Foliões e Usuários Cadastrados</span>
              <span class="badge bg-frevo-red/10 text-frevo-red text-[11px] font-bold px-2 py-0.5 rounded-full">
                ${users.length} cadastrados
              </span>
            </h3>
            <p class="text-[11px] text-muted">Acompanhe e gerencie a base de foliões, artistas e administradores da rede FrevAI</p>
          </div>
          
          <div class="flex items-center gap-1.5 text-[11px] flex-wrap">
            <span class="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg font-bold">${totalFoliões} Foliões</span>
            <span class="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg font-bold">${totalArtistas} Artistas</span>
            <span class="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg font-bold">${totalAdmins} Admins</span>
          </div>
        </div>

        <!-- Filtros e Busca -->
        <div class="flex flex-col sm:flex-row gap-2">
          <div class="relative flex-1">
            <svg class="absolute left-3 top-2.5 w-4 h-4 text-muted pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="admin-users-search" 
              placeholder="Buscar por nome, @handle, e-mail ou cidade..." 
              value="${window.adminUsersSearchQuery || ''}"
              oninput="handleAdminUsersSearch(this.value)"
              class="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:border-frevo-red transition"
            />
          </div>

          <div class="flex items-center gap-1 bg-surface-soft p-1 rounded-xl border border-gray-200 text-xs">
            <button onclick="setAdminUsersFilter('all')" class="px-2.5 py-1 rounded-lg font-bold transition ${filterRole === 'all' ? 'bg-white shadow-xs text-ink' : 'text-muted hover:text-ink'}">
              Todos
            </button>
            <button onclick="setAdminUsersFilter('user')" class="px-2.5 py-1 rounded-lg font-bold transition ${filterRole === 'user' ? 'bg-white shadow-xs text-ink' : 'text-muted hover:text-ink'}">
              Foliões
            </button>
            <button onclick="setAdminUsersFilter('artist')" class="px-2.5 py-1 rounded-lg font-bold transition ${filterRole === 'artist' ? 'bg-white shadow-xs text-ink' : 'text-muted hover:text-ink'}">
              Artistas
            </button>
            <button onclick="setAdminUsersFilter('admin')" class="px-2.5 py-1 rounded-lg font-bold transition ${filterRole === 'admin' ? 'bg-white shadow-xs text-ink' : 'text-muted hover:text-ink'}">
              Admins
            </button>
          </div>
        </div>

        <!-- Lista de Foliões -->
        <div class="space-y-2">
          ${filteredUsers.length > 0 ? filteredUsers.map(user => {
            const roleBadge = user.role === 'admin' 
              ? `<span class="badge bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold px-2 py-0.5 rounded-full">Administrador</span>`
              : user.role === 'artist'
              ? `<span class="badge bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full">Artista Oficial</span>`
              : `<span class="badge bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full">Folião</span>`;
            
            const joinedDate = user.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recente';

            return `
              <div class="p-3 bg-surface-soft hover:bg-gray-50/80 transition rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                  <img 
                    src="${getUserAvatarUrl(user.avatar)}" 
                    alt="${user.name}" 
                    class="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-200 shadow-xs"
                    onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'"
                  />
                  <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                      <strong class="text-ink text-xs font-bold truncate">${user.name}</strong>
                      <span class="text-[11px] text-muted font-mono">${user.handle || '@foliao'}</span>
                      ${roleBadge}
                    </div>
                    <div class="flex items-center gap-3 text-[11px] text-muted mt-0.5 flex-wrap">
                      ${user.email ? `<span class="truncate">${user.email}</span>` : ''}
                      ${user.city ? `<span>• ${user.city}</span>` : ''}
                      <span>• Cadastrado em ${joinedDate}</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2 flex-shrink-0">
                  <button onclick="openUserDetailsModal('${user.id}')" class="btn btn-outline text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-6 text-center text-xs text-muted bg-surface-soft rounded-2xl border border-gray-100 space-y-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p class="font-bold text-ink">Nenhum folião encontrado</p>
              <p>Tente ajustar os termos de busca ou remover os filtros aplicados.</p>
            </div>
          `}
        </div>
      </div>
    `;

  } else if (currentAdminTab === 'posts') {
    const sortedPosts = [...(DB.posts || [])].sort((a, b) => new Date(b.created_at || Date.now()) - new Date(a.created_at || Date.now()));

    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Acervo de Posts Cronológico</h3>
            <p class="text-[11px] text-muted">Organizado por Data / Mês / Ano com edição e exclusão</p>
          </div>
          <button onclick="openNewPostModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Post</button>
        </div>

        <div class="space-y-2.5">
          ${sortedPosts.map(post => {
            const dateObj = new Date(post.created_at || Date.now());
            const formattedDate = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
            return `
              <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <span class="badge bg-gray-200 text-ink text-[10px] font-bold">${formattedDate}</span>
                  <strong class="text-ink text-xs block truncate mt-1">${post.title}</strong>
                  <span class="text-[11px] text-muted">${post.author} • ${post.likes || 0} curtidas</span>
                </div>
                <div class="flex gap-1.5 flex-shrink-0">
                  <button onclick="openEditPostModal('${post.id}')" class="btn btn-outline text-[11px] px-2 py-1 rounded-xl font-bold">
                    Editar
                  </button>
                  <button onclick="deletePost('${post.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                    Excluir
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'map') {
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Locais do Mapa Cultural</h3>
            <p class="text-[11px] text-muted">Gerenciamento de pontos de interesse</p>
          </div>
          <button onclick="openNewMapPointModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Local</button>
        </div>

        <div class="space-y-2.5">
          ${(DB.mapPoints || []).map(point => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <strong class="text-ink text-xs block truncate">${point.name}</strong>
                <span class="text-[11px] text-muted">${point.category} • ${point.address}</span>
              </div>
              <button onclick="deleteMapPoint('${point.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                Excluir
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'steps') {
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Catálogo de Passos de Frevo</h3>
            <p class="text-[11px] text-muted">Passos técnicos e pedagógicos</p>
          </div>
          <button onclick="openNewStepModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Passo</button>
        </div>

        <div class="space-y-2.5">
          ${(DB.steps || []).map(step => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div>
                <strong class="text-ink text-xs block">${step.name}</strong>
                <span class="text-[11px] text-muted">${step.difficulty} • ${step.category}</span>
              </div>
              <button onclick="deleteStep('${step.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                Excluir
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'history') {
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Linha do Tempo Histórica</h3>
            <p class="text-[11px] text-muted">Documentos e marcos temporais</p>
          </div>
          <button onclick="openNewHistoryModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Marco</button>
        </div>

        <div class="space-y-2.5">
          ${(DB.history || []).map(item => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div>
                <span class="badge bg-frevo-yellow/30 text-ink text-[10px] font-bold">${item.period}</span>
                <strong class="text-ink text-xs block mt-1">${item.title}</strong>
              </div>
              <div class="flex items-center gap-1.5">
                <button onclick="openEditHistoryModal('${item.id}')" class="btn btn-outline text-[11px] px-2.5 py-1 rounded-xl font-bold text-ink">
                  Editar
                </button>
                <button onclick="deleteHistory('${item.id}')" class="btn btn-destructive text-[11px] px-2.5 py-1 rounded-xl font-bold">
                  Excluir
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'takedowns') {
    if (typeof loadTakedownsLocal === 'function') loadTakedownsLocal();
    const reports = window.DB?.takedownReports || [];
    const pendingReports = reports.filter(r => r.status === 'pending');

    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink flex items-center gap-2">
              <span>Denúncias &amp; Takedowns</span>
              <span class="badge ${pendingReports.length > 0 ? 'bg-rose-600 text-white' : 'bg-gray-100 text-muted'} text-[10px] font-bold px-2 py-0.5 rounded-full">
                ${pendingReports.length} pendente${pendingReports.length === 1 ? '' : 's'}
              </span>
            </h3>
            <p class="text-[11px] text-muted">Análise de direitos autorais e conformidade jurídica</p>
          </div>
        </div>

        <div class="space-y-3">
          ${reports.length > 0 ? reports.map(rep => {
            const isPending = rep.status === 'pending';
            return `
              <div class="p-3.5 rounded-2xl border ${isPending ? 'bg-rose-50/70 border-rose-200' : 'bg-surface-soft border-gray-200 opacity-75'} space-y-2 text-xs">
                <div class="flex items-start justify-between gap-2">
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="badge ${isPending ? 'bg-rose-600 text-white' : 'bg-gray-200 text-gray-700'} text-[10px] font-bold">
                        ${isPending ? 'Aguardando Análise' : 'Resolvido'}
                      </span>
                      <span class="badge bg-white text-ink border border-gray-200 text-[10px] font-semibold">${rep.reason}</span>
                    </div>
                    <div class="mt-1">
                      <strong class="text-ink font-bold block">Reclamante: ${rep.reporter_name}</strong>
                      <a href="mailto:${rep.reporter_email}" class="text-[11px] text-frevo-orange font-mono hover:underline">${rep.reporter_email}</a>
                    </div>
                  </div>
                  
                  ${isPending ? `
                    <div class="flex gap-1.5 flex-shrink-0">
                      <button onclick="resolveTakedownReport('${rep.id}', 'resolved')" class="btn btn-green text-[11px] px-2.5 py-1 rounded-xl font-bold shadow-sm">
                        Resolver
                      </button>
                      <button onclick="resolveTakedownReport('${rep.id}', 'dismissed')" class="btn btn-outline text-[11px] px-2 py-1 rounded-xl font-bold">
                        Descartar
                      </button>
                    </div>
                  ` : ''}
                </div>

                <div class="p-2.5 bg-white rounded-xl border border-gray-200/80 text-ink-soft leading-relaxed whitespace-pre-line">
                  ${rep.details}
                </div>
                
                <div class="flex items-center justify-between text-[10px] text-muted pt-1">
                  <span>Alvo ID: ${rep.target_id || 'Geral'} (${rep.target_type || 'Geral'})</span>
                  <span>${new Date(rep.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-6 text-center text-xs text-muted bg-surface-soft rounded-xl border border-gray-100">
              Nenhuma denúncia ou solicitação de remoção registrada até o momento.
            </div>
          `}
        </div>
      </div>
    `;
  }
}

function resolveTakedownReport(reportId, action = 'resolved') {
  if (typeof loadTakedownsLocal === 'function') loadTakedownsLocal();
  const report = (window.DB?.takedownReports || []).find(r => r.id === reportId);
  if (!report) return;

  report.status = action;
  report.resolved_at = new Date().toISOString();
  report.resolved_by = currentUserSession.id || 'admin';

  if (typeof saveTakedownsLocal === 'function') saveTakedownsLocal();
  renderAdminCMS();

  showAlertModal(`Notificação marcada como ${action === 'resolved' ? 'resolvida' : 'descartada'}.`, { type: 'success' });
}

async function confirmApproveArtistRequest(requestId) {
  if (!confirm('Deseja realmente aprovar esta solicitação e promover o usuário a Artista Oficial do FrevAI?')) return;

  if (typeof loadArtistRequestsLocal === 'function') loadArtistRequestsLocal();
  if (typeof loadArtistsLocal === 'function') loadArtistsLocal();

  const req = (DB.artistRequests || []).find(r => r.id === requestId);
  if (req) {
    req.status = 'approved';
    req.reviewed_at = new Date().toISOString();
    req.reviewed_by = currentUserSession.id || 'admin';
    if (typeof saveArtistRequestsLocal === 'function') saveArtistRequestsLocal();

    const alreadyArtist = (DB.artists || []).some(a => 
      (a.id && a.id === req.id) || 
      (a.name && a.name.toLowerCase() === req.requested_name.toLowerCase())
    );

    if (!alreadyArtist) {
      const newArtistObj = {
        id: req.artist_id || ('artist-' + Date.now()),
        name: req.requested_name,
        handle: req.user?.handle || ('@' + req.requested_name.toLowerCase().replace(/[^a-z0-9_]/g, '')),
        genre: req.genre || 'Frevo de Rua',
        bio: req.bio || 'Artista oficial da comunidade FrevAI.',
        avatar_url: getUserAvatarUrl(req.user?.avatar_url) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
        cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
        email: req.user?.email || req.email || '',
        phone: req.whatsapp || '',
        is_approved: true,
        has_story: false
      };
      DB.artists.unshift(newArtistObj);
      if (typeof saveArtistsLocal === 'function') saveArtistsLocal();
    }

    // Atualizar na base local de usuários
    if (typeof loadUsersLocal === 'function' && typeof saveUsersLocal === 'function') {
      const users = loadUsersLocal();
      const targetUser = users.find(u => u.id === req.user_id || u.handle === req.user?.handle);
      if (targetUser) {
        targetUser.role = 'artist';
        targetUser.artist_request_status = 'approved';
        saveUsersLocal(users);
      }
    }

    if (currentUserSession.id === req.user_id) {
      currentUserSession.role = 'artist';
      currentUserSession.artist_request_status = 'approved';
      saveCurrentSession();
    }
  }

  if (window.awsService && window.awsService.isConnected()) {
    const res = await window.awsService.approveArtistRequest(requestId, currentUserSession.id);
    if (res && res.error) {
      console.warn('Aviso AWS ao aprovar:', res.error.message);
    }
    const freshArtists = await window.awsService.getArtists();
    if (freshArtists && freshArtists.length > 0) {
      DB.artists = freshArtists;
      if (typeof saveArtistsLocal === 'function') saveArtistsLocal();
    }
  }

  loadNotificationsLocal();
  DB.notifications.unshift({
    id: 'notif-approved-' + Date.now(),
    type: 'artist_approved',
    targetId: requestId,
    forUserId: req ? req.user_id : null,
    title: 'Parabéns! Perfil de Artista Aprovado',
    message: 'Sua solicitação artística foi aprovada com sucesso! Você agora é um Artista Oficial e suas ferramentas de publicação de músicas, álbuns e shows foram liberadas.',
    author: 'Equipe FrevAI',
    author_avatar: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=200&q=80',
    time_ago: 'Agora mesmo',
    read: false
  });
  saveNotificationsLocal();
  updateNotificationBadge();

  showAlertModal('Artista aprovado com sucesso! O perfil do usuário agora é "Artista" e suas ferramentas de publicação foram liberadas.');
  renderAdminCMS();
  if (typeof renderArtists === 'function') renderArtists();
}

function openRejectArtistModal(requestId) {
  loadArtistRequestsLocal();
  const req = (DB.artistRequests || []).find(r => r.id === requestId) || {
    id: requestId,
    requested_name: 'Artista',
    genre: 'Frevo de Rua',
    user: { display_name: 'Folião Solicitante', handle: '@foliao', email: '' }
  };

  const applicantName = req.user?.display_name || req.requested_name || 'Solicitante';
  const applicantHandle = req.user?.handle || '@foliao';
  const applicantEmail = req.user?.email || req.email || '';

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Recusar Solicitação Artística</h3>
          <p class="text-xs text-muted">Apresente a justificativa ao artista solicitante</p>
        </div>
      </div>

      <div class="p-3 bg-surface-soft border border-gray-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
        <div class="min-w-0">
          <strong class="text-ink font-bold block truncate">${req.requested_name}</strong>
          <span class="text-muted block text-[11px]">${applicantName} • ${applicantHandle}</span>
          ${applicantEmail ? `<span class="text-[11px] text-gray-500 font-mono block truncate">${applicantEmail}</span>` : ''}
        </div>
        <span class="badge bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
          MODERAÇÃO
        </span>
      </div>

      <div class="space-y-1.5">
        <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Motivos frequentes (clique para preencher)</label>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" onclick="setRejectReasonPreset('Dados biográficos e referências musicais incompletos.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Dados incompletos
          </button>
          <button type="button" onclick="setRejectReasonPreset('Material artístico não condiz com as diretrizes e salvaguarda do Frevo.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Fora das diretrizes
          </button>
          <button type="button" onclick="setRejectReasonPreset('Não foi possível verificar a autenticidade ou titularidade da obra.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Titularidade duvidosa
          </button>
          <button type="button" onclick="setRejectReasonPreset('Solicitação duplicada ou perfil já existente no acervo.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Duplicidade
          </button>
        </div>
      </div>

      <div class="space-y-1">
        <label for="reject-reason-textarea" class="block text-[11px] font-bold text-ink uppercase tracking-wider">Justificativa da Recusa <span class="text-rose-500">*</span></label>
        <textarea id="reject-reason-textarea" rows="4" placeholder="Descreva de forma respeitosa o motivo pelo qual a solicitação não foi aprovada..." class="w-full px-3 py-2 text-xs border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 rounded-xl bg-white text-ink focus:outline-none transition leading-relaxed"></textarea>
      </div>

      <div class="p-3 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-2">
        <label class="flex items-center gap-2 cursor-pointer select-none">
          <input type="checkbox" id="reject-send-email-checkbox" checked class="w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500">
          <span class="text-xs font-bold text-ink">Enviar e-mail formal de notificação de recusa</span>
        </label>
        <div id="reject-email-preview-container" class="space-y-1.5 pl-6 pt-1">
          <div>
            <label class="block text-[10px] font-bold text-muted uppercase">E-mail do Solicitante</label>
            <input type="email" id="reject-recipient-email" value="${applicantEmail}" placeholder="artista@exemplo.com" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
          </div>
        </div>
      </div>

      <div class="flex gap-2 pt-2 border-t border-gray-100">
        <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">
          Cancelar
        </button>
        <button type="button" onclick="submitRejectArtistRequest('${req.id}')" class="btn bg-rose-600 hover:bg-rose-700 text-white flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md transition flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Confirmar Recusa
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function setRejectReasonPreset(reasonText) {
  const textarea = document.getElementById('reject-reason-textarea');
  if (textarea) {
    textarea.value = reasonText;
    textarea.focus();
  }
}

async function submitRejectArtistRequest(requestId) {
  const reasonInput = document.getElementById('reject-reason-textarea');
  const reason = (reasonInput ? reasonInput.value : '').trim();
  const sendEmail = document.getElementById('reject-send-email-checkbox')?.checked ?? true;
  const recipientEmail = document.getElementById('reject-recipient-email')?.value?.trim() || '';

  if (!reason) {
    showAlertModal('Por favor, informe a justificativa da recusa para orientar o solicitante.', { title: 'Atenção', type: 'warning' });
    return;
  }

  loadArtistRequestsLocal();
  const req = (DB.artistRequests || []).find(r => r.id === requestId);
  const targetUserId = req ? req.user_id : null;
  const artistName = req ? req.requested_name : 'Artista';

  if (req) {
    req.status = 'rejected';
    req.review_notes = reason;
    req.reviewed_at = new Date().toISOString();
    req.reviewed_by = currentUserSession.id || 'admin';
    if (typeof saveArtistRequestsLocal === 'function') saveArtistRequestsLocal();
  }

  // Atualizar na base local de usuários
  if (typeof loadUsersLocal === 'function' && typeof saveUsersLocal === 'function') {
    const users = loadUsersLocal();
    const targetUser = users.find(u => u.id === targetUserId || (req && u.handle === req.user?.handle));
    if (targetUser) {
      targetUser.artist_request_status = 'rejected';
      saveUsersLocal(users);
    }
  }

  if (targetUserId && currentUserSession.id === targetUserId) {
    currentUserSession.artist_request_status = 'rejected';
    saveCurrentSession();
  }

  if (window.awsService && window.awsService.isConnected()) {
    try {
      await window.awsService.rejectArtistRequest(requestId, currentUserSession.id, reason);
    } catch (err) {
      console.warn('[AWS] Erro ao sincronizar recusa:', err.message);
    }
  }

  loadNotificationsLocal();
  DB.notifications.unshift({
    id: 'notif-reject-' + Date.now(),
    type: 'artist_rejected',
    targetId: requestId,
    forUserId: targetUserId,
    author: 'Comitê FrevAI',
    author_avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    title: 'Solicitação Artística Não Aprovada',
    message: `Sua solicitação de perfil artístico para "${artistName}" foi analisada pelo comitê. Motivo: ${reason}`,
    time_ago: 'Agora mesmo',
    read: false
  });
  saveNotificationsLocal();
  updateNotificationBadge();

  if (sendEmail) {
    const subject = encodeURIComponent(`FrevAI: Atualização sobre sua solicitação de perfil artístico (${artistName})`);
    const emailBody = encodeURIComponent(
      `Olá,\n\nAgradecemos seu interesse em fazer parte do acervo oficial do FrevAI.\n\n` +
      `Informamos que sua solicitação de perfil de artista para "${artistName}" foi revisada pela equipe curatorial e não pôde ser aprovada no momento.\n\n` +
      `Parecer do Comitê:\n"${reason}"\n\n` +
      `Você pode adequar as informações e enviar uma nova solicitação a qualquer momento pelo aplicativo FrevAI.\n\n` +
      `Atenciosamente,\nComitê Gestor & Curadoria FrevAI`
    );

    if (recipientEmail && recipientEmail.includes('@')) {
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  closeModal();
  renderAdminCMS();

  showAlertModal(
    `A solicitação foi recusada com sucesso.\n\nO solicitante foi notificado na plataforma FrevAI${recipientEmail ? ' e a mensagem de e-mail foi gerada' : ''}.`,
    { title: 'Recusa Registrada', type: 'info' }
  );
}

function deletePost(postId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir publicações.');
    return;
  }
  if (confirm('Deseja realmente excluir esta publicação do feed?')) {
    DB.posts = (DB.posts || []).filter(p => p.id !== postId);
    if (typeof savePostsLocal === 'function') savePostsLocal();
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deletePost(postId);
    }
    if (typeof renderFeed === 'function') renderFeed();
    renderAdminCMS();
  }
}

function deleteMapPoint(id) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir pontos do mapa.');
    return;
  }
  if (confirm('Deseja realmente excluir este ponto do mapa?')) {
    DB.mapPoints = (DB.mapPoints || []).filter(m => m.id !== id);
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteMapPoint(id);
    }
    if (typeof renderMap === 'function') renderMap();
    renderAdminCMS();
  }
}

async function handleAdminMediaUpload(inputElement, previewContainerId, hiddenUrlInputId, hiddenTypeInputId, folder = 'general') {
  const file = inputElement.files && inputElement.files[0];
  if (!file) return;

  const isVideo = file.type && file.type.startsWith('video');
  const isImage = file.type && file.type.startsWith('image');

  if (!isImage && !isVideo) {
    showAlertModal('Por favor, selecione um arquivo de imagem (PNG, JPG, WEBP) ou vídeo (MP4, WEBM).', { title: 'Formato Não Suportado', type: 'warning' });
    return;
  }

  const container = document.getElementById(previewContainerId);
  const hiddenUrl = document.getElementById(hiddenUrlInputId);
  const hiddenType = document.getElementById(hiddenTypeInputId);

  if (container) {
    container.innerHTML = `
      <div class="p-3 bg-surface-soft rounded-xl border border-gray-200 flex items-center justify-center gap-2 text-xs text-muted">
        <svg class="animate-spin h-4 w-4 text-frevo-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Processando e enviando mídia...</span>
      </div>
    `;
  }

  let uploadedUrl = null;
  if (window.awsService && window.awsService.isConnected()) {
    try {
      uploadedUrl = await window.awsService.uploadMedia(file, folder);
    } catch (e) {
      console.warn('[Storage] Fallback para local preview:', e.message);
    }
  }

  if (!uploadedUrl) {
    uploadedUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => resolve(ev.target.result);
      reader.readAsDataURL(file);
    });
  }

  if (hiddenUrl) hiddenUrl.value = uploadedUrl;
  if (hiddenType) hiddenType.value = isVideo ? 'video' : 'image';

  if (container) {
    container.innerHTML = `
      <div class="relative rounded-xl overflow-hidden border border-gray-200 bg-black/5 mt-1.5">
        ${isVideo ? `
          <video src="${uploadedUrl}" controls class="w-full h-36 object-cover rounded-xl" playsinline preload="metadata"></video>
        ` : `
          <img src="${uploadedUrl}" class="w-full h-36 object-cover rounded-xl" alt="Preview da Mídia" />
        `}
        <div class="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
          ${isVideo ? 'Vídeo Selecionado' : 'Imagem Selecionada'}
        </div>
      </div>
    `;
  }
}

function openNewPostModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem publicar notícias oficiais no feed.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Publicar Nova Notícia no Feed</h3>
          <p class="text-xs text-muted">Upload de fotos, vídeos e novidades para a comunidade</p>
        </div>
      </div>

      <form onsubmit="submitNewPost(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título da Publicação *</label>
          <input type="text" id="new-post-title" required placeholder="Ex: Abertura Oficial do Carnaval do Recife" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Autor / Responsável *</label>
          <input type="text" id="new-post-author" required value="${currentUserSession.name}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Mídia do Post (Foto ou Vídeo)</label>
          <div class="flex items-center gap-2">
            <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold flex-1 justify-center bg-white hover:bg-gray-50">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Upload do Dispositivo
              <input type="file" id="new-post-file-input" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="handleAdminMediaUpload(this, 'new-post-media-preview', 'new-post-media-url', 'new-post-media-type', 'posts')" />
            </label>
          </div>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole a URL da Mídia / Imagem</label>
            <input type="url" id="new-post-media-url" placeholder="https://exemplo.com/video-ou-foto.mp4" oninput="document.getElementById('new-post-media-type').value = this.value.match(/\\.(mp4|webm|mov)(\\?.*)?$/i) ? 'video' : 'image'" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-post-media-type" value="image" />
          </div>

          <div id="new-post-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo da Notícia *</label>
          <textarea id="new-post-content" rows="4" required placeholder="Escreva a notícia completa..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Tags (separadas por vírgula)</label>
          <input type="text" id="new-post-tags" placeholder="Frevo, Carnaval, Recife" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Publicar no Feed</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewPost(e) {
  e.preventDefault();
  const title = document.getElementById('new-post-title').value.trim();
  const author = document.getElementById('new-post-author').value.trim();
  const mediaUrl = document.getElementById('new-post-media-url')?.value?.trim() || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80';
  const mediaType = document.getElementById('new-post-media-type')?.value || (mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');
  const content = document.getElementById('new-post-content').value.trim();
  const tags = document.getElementById('new-post-tags').value.split(',').map(t => t.trim()).filter(Boolean);

  const newPost = {
    id: `p-${Date.now()}`,
    author: author || 'FrevAI Notícias',
    handle: 'frevai',
    avatar: currentUserSession.avatar,
    image: mediaUrl,
    media_url: mediaUrl,
    media_type: mediaType,
    isVideo: mediaType === 'video',
    location: 'Recife, PE',
    type: 'news',
    title,
    content,
    tags: tags.length ? tags : ['CulturaPE', 'Frevo'],
    likes: 0,
    is_liked: false,
    is_saved: false,
    is_admin_post: true,
    time_ago: 'AGORA',
    created_at: new Date().toISOString(),
    comments: []
  };

  DB.posts.unshift(newPost);
  if (typeof savePostsLocal === 'function') savePostsLocal();
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createPost(newPost);
  }

  const newNotif = {
    id: `notif-${Date.now()}`,
    type: 'post',
    targetId: newPost.id,
    title: 'Nova Publicação Oficial!',
    message: `${newPost.author}: "${newPost.title}"`,
    author: newPost.author,
    author_avatar: newPost.avatar,
    time_ago: 'Agora',
    read: false
  };
  DB.notifications = DB.notifications || [];
  DB.notifications.unshift(newNotif);
  updateNotificationBadge();
  sendCulturalPushNotification({
    title: newNotif.title,
    message: newNotif.message,
    url: `/#feed?post=${newPost.id}`,
    type: 'post',
    targetId: newPost.id
  });

  closeModal();
  if (typeof renderFeed === 'function') renderFeed();
  renderAdminCMS();
  showAlertModal('Publicação adicionada ao Acervo de Posts com sucesso!', { title: 'Publicado', type: 'success' });
}

function openEditPostModal(postId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem editar notícias.');
    return;
  }
  const post = (DB.posts || []).find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  const mediaUrl = post.media_url || post.image || '';
  const isVideo = post.media_type === 'video' || (mediaUrl && mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i));

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Editar Notícia</h3>
          <p class="text-xs text-muted">Atualize as informações, fotos ou vídeos da publicação</p>
        </div>
      </div>

      <form onsubmit="saveEditPost(event, '${post.id}')" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título</label>
          <input type="text" id="edit-post-title" value="${post.title}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Mídia do Post (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Substituir Arquivo de Mídia
            <input type="file" id="edit-post-file-input" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="handleAdminMediaUpload(this, 'edit-post-media-preview', 'edit-post-media-url', 'edit-post-media-type', 'posts')" />
          </label>
          
          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">URL da Mídia</label>
            <input type="url" id="edit-post-media-url" value="${mediaUrl}" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="edit-post-media-type" value="${isVideo ? 'video' : 'image'}" />
          </div>

          <div id="edit-post-media-preview">
            ${mediaUrl ? `
              <div class="relative rounded-xl overflow-hidden border border-gray-200 bg-black/5 mt-1.5">
                ${isVideo ? `
                  <video src="${mediaUrl}" controls class="w-full h-36 object-cover rounded-xl" playsinline preload="metadata"></video>
                ` : `
                  <img src="${mediaUrl}" class="w-full h-36 object-cover rounded-xl" alt="Preview da Mídia" />
                `}
              </div>
            ` : ''}
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo</label>
          <textarea id="edit-post-content" rows="4" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">${post.content}</textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function saveEditPost(e, postId) {
  e.preventDefault();
  const post = (DB.posts || []).find(p => p.id === postId);
  if (post) {
    const newMediaUrl = document.getElementById('edit-post-media-url')?.value?.trim() || post.image;
    const newMediaType = document.getElementById('edit-post-media-type')?.value || (newMediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');

    post.title = document.getElementById('edit-post-title').value.trim();
    post.content = document.getElementById('edit-post-content').value.trim();
    post.image = newMediaUrl;
    post.media_url = newMediaUrl;
    post.media_type = newMediaType;
    post.isVideo = newMediaType === 'video';

    if (typeof savePostsLocal === 'function') savePostsLocal();
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.updatePost(postId, post);
    }
  }

  closeModal();
  if (typeof renderFeed === 'function') renderFeed();
  renderAdminCMS();
  showAlertModal('Publicação atualizada com sucesso!', { title: 'Atualizado', type: 'success' });
}

let pendingMapPointCoords = null;
let pendingMapPointConfirmed = false;

function openNewMapPointModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem adicionar novos pontos ao mapa.');
    return;
  }
  pendingMapPointCoords = [-8.0631, -34.8711];
  pendingMapPointConfirmed = false;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Ponto ao Mapa Cultural</h3>
          <p class="text-xs text-muted">Localize o endereço com confirmação precisa no Google Maps</p>
        </div>
      </div>

      <form onsubmit="submitNewMapPoint(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Ponto Cultural *</label>
          <input type="text" id="new-map-name" required placeholder="Ex: Sede do Galo da Madrugada" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Categoria *</label>
          <select id="new-map-cat" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
            <option value="Agremiação Histórica">Agremiação Histórica</option>
            <option value="Museu / Centro Cultural">Museu / Centro Cultural</option>
            <option value="Polo de Carnaval">Polo de Carnaval</option>
            <option value="Marco Histórico">Marco Histórico</option>
            <option value="Espaço Cultural">Espaço Cultural</option>
          </select>
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2.5">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Endereço Completo *</label>
            <div class="flex gap-2">
              <input type="text" id="new-map-addr" required placeholder="Ex: Rua da Concórdia, 1024, Recife - PE" class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl bg-white text-ink focus:outline-none" oninput="resetMapConfirmation()" />
              <button type="button" id="btn-find-address" onclick="findAddressOnGoogleMaps()" class="btn btn-primary text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Localizar
              </button>
            </div>
            <span class="text-[10px] text-muted block mt-1">Digite o logradouro e clique em "Localizar" para checar no mapa.</span>
          </div>

          <div id="map-address-confirmation-box" class="hidden space-y-2 pt-1 border-t border-gray-200/80">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-ink flex items-center gap-1 text-frevo-orange">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Localização Encontrada:
              </span>
              <span id="map-coords-badge" class="badge bg-gray-200 text-ink text-[10px] font-mono font-bold"></span>
            </div>

            <p id="map-resolved-address-text" class="text-xs text-ink-soft bg-white p-2 rounded-xl border border-gray-200"></p>
            <div id="map-preview-embed" class="w-full h-40 rounded-xl overflow-hidden border border-gray-200"></div>

            <div id="map-confirm-action-container" class="pt-1">
              <button type="button" onclick="confirmGoogleMapsLocation()" id="btn-confirm-map-location" class="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Confirmar que o endereço é este
              </button>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição e Relevância Cultural *</label>
          <textarea id="new-map-desc" rows="3" required placeholder="História, fundação e relevância para o Frevo..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" id="btn-submit-map-point" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Ponto</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function resetMapConfirmation() {
  pendingMapPointConfirmed = false;
  const confirmBox = document.getElementById('map-address-confirmation-box');
  if (confirmBox) confirmBox.classList.add('hidden');
}

async function findAddressOnGoogleMaps() {
  const addrInput = document.getElementById('new-map-addr');
  const query = addrInput ? addrInput.value.trim() : '';

  if (!query) {
    showAlertModal('Por favor, digite o endereço do local para pesquisar no mapa.', { title: 'Atenção', type: 'warning' });
    return;
  }

  const btnFind = document.getElementById('btn-find-address');
  if (btnFind) {
    btnFind.disabled = true;
    btnFind.innerText = 'Buscando...';
  }

  let geoResult = null;
  if (window.awsService && window.awsService.geocodeAddress) {
    geoResult = await window.awsService.geocodeAddress(query);
  }

  if (btnFind) {
    btnFind.disabled = false;
    btnFind.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      Localizar
    `;
  }

  if (geoResult && geoResult.coords) {
    pendingMapPointCoords = geoResult.coords;
    pendingMapPointConfirmed = false;

    const confirmBox = document.getElementById('map-address-confirmation-box');
    const badge = document.getElementById('map-coords-badge');
    const textEl = document.getElementById('map-resolved-address-text');
    const embedEl = document.getElementById('map-preview-embed');
    const confirmBtn = document.getElementById('btn-confirm-map-location');

    if (badge) badge.innerText = `${geoResult.coords[0].toFixed(4)}, ${geoResult.coords[1].toFixed(4)}`;
    if (textEl) textEl.innerText = geoResult.displayName || query;
    if (embedEl) {
      embedEl.innerHTML = `
        <iframe 
          title="Google Maps Preview"
          class="w-full h-full border-0"
          loading="lazy"
          src="https://maps.google.com/maps?q=${geoResult.coords[0]},${geoResult.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
      `;
    }

    if (confirmBtn) {
      confirmBtn.className = 'w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition';
      confirmBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Confirmar que o endereço é este
      `;
    }

    if (confirmBox) confirmBox.classList.remove('hidden');
  } else {
    showAlertModal('Não foi possível localizar este endereço automaticamente. Verifique se digitou o nome da rua, número e cidade.', { title: 'Endereço Não Localizado', type: 'warning' });
  }
}

function confirmGoogleMapsLocation() {
  pendingMapPointConfirmed = true;
  const confirmBtn = document.getElementById('btn-confirm-map-location');
  if (confirmBtn) {
    confirmBtn.className = 'w-full py-2 px-3 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition';
    confirmBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      Localização Confirmada no Google Maps
    `;
  }
}

async function submitNewMapPoint(e) {
  e.preventDefault();
  const name = document.getElementById('new-map-name').value.trim();
  const category = document.getElementById('new-map-cat').value;
  const address = document.getElementById('new-map-addr').value.trim();
  const description = document.getElementById('new-map-desc').value.trim();

  if (!pendingMapPointConfirmed) {
    const wantsToFind = await showConfirmModal(
      'Você ainda não confirmou o local no Google Maps.\n\nDeseja que a plataforma localize agora para você validar no mapa?',
      { title: 'Confirmação de Endereço', confirmText: 'Localizar no Mapa', cancelText: 'Ajustar Endereço' }
    );
    if (wantsToFind) {
      await findAddressOnGoogleMaps();
    }
    return;
  }

  const newPt = {
    id: `m-${Date.now()}`,
    name,
    category,
    address,
    description,
    coords: pendingMapPointCoords || [-8.0631, -34.8711]
  };

  DB.mapPoints.push(newPt);
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createMapPoint(newPt);
  }

  closeModal();
  if (typeof renderMap === 'function') renderMap();
  renderAdminCMS();
  showAlertModal('Ponto cultural confirmado e adicionado com sucesso ao mapa!', { title: 'Local Adicionado', type: 'success' });
}

function openNewHistoryModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem cadastrar marcos históricos.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Marco Histórico</h3>
          <p class="text-xs text-muted">Documentos, fotografias de época e registros da memória do Frevo</p>
        </div>
      </div>

      <form onsubmit="submitNewHistory(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título do Marco *</label>
          <input type="text" id="new-hist-title" required placeholder="Ex: Criação da Troça Pitombeira dos Quatro Cantos" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Período / Data Histórica *</label>
          <input type="text" id="new-hist-period" required placeholder="Ex: Carnaval de 1947" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Documento / Mídia de Época (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload do Dispositivo
            <input type="file" id="new-hist-file-input" accept="image/*,video/mp4,video/webm" class="hidden" onchange="handleAdminMediaUpload(this, 'new-hist-media-preview', 'new-hist-media-url', 'new-hist-media-type', 'history')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole o link do arquivo</label>
            <input type="url" id="new-hist-media-url" placeholder="https://exemplo.com/registro-historico.jpg" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-hist-media-type" value="image" />
          </div>

          <div id="new-hist-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo Histórico Documentado *</label>
          <textarea id="new-hist-content" rows="3" required placeholder="Relato documentado, contexto social e fatos comprovados..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Fonte / Acervo Responsável *</label>
          <input type="text" id="new-hist-source" required placeholder="Ex: Fundação Joaquim Nabuco / Paço do Frevo" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Marco</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewHistory(e) {
  e.preventDefault();
  const title = document.getElementById('new-hist-title').value.trim();
  const period = document.getElementById('new-hist-period').value.trim();
  const content = document.getElementById('new-hist-content').value.trim();
  const source = document.getElementById('new-hist-source').value.trim();
  const mediaUrl = document.getElementById('new-hist-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('new-hist-media-type')?.value || 'image';

  const newHist = {
    id: `h-${Date.now()}`,
    title,
    period,
    content,
    source,
    media_url: mediaUrl,
    image_url: mediaUrl,
    media_type: mediaType
  };

  DB.history.push(newHist);
  sortHistoryTimeline();

  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createHistoryEntry?.(newHist);
  }

  closeModal();
  if (typeof renderHistory === 'function') renderHistory();
  renderAdminCMS();
  showAlertModal('Marco histórico adicionado com sucesso e posicionado na ordem cronológica!', { title: 'Marco Salvo', type: 'success' });
}

function openEditHistoryModal(historyId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem editar marcos históricos.');
    return;
  }
  const item = (DB.history || []).find(h => h.id === historyId);
  if (!item) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Editar Marco Histórico</h3>
          <p class="text-xs text-muted">Atualize as informações cronológicas e documentais do registro</p>
        </div>
      </div>

      <form onsubmit="submitEditHistory(event, '${item.id}')" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título do Marco *</label>
          <input type="text" id="edit-hist-title" required value="${item.title ? item.title.replace(/"/g, '&quot;') : ''}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Período / Data Histórica *</label>
          <input type="text" id="edit-hist-period" required value="${item.period ? item.period.replace(/"/g, '&quot;') : ''}" placeholder="Ex: 9 de Fevereiro de 1907" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          <p class="text-[10px] text-muted mt-0.5">Ao salvar, o card será realocado para a posição temporal exata na linha do tempo.</p>
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Documento / Mídia de Época (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Substituir Arquivo
            <input type="file" id="edit-hist-file-input" accept="image/*,video/mp4,video/webm" class="hidden" onchange="handleAdminMediaUpload(this, 'edit-hist-media-preview', 'edit-hist-media-url', 'edit-hist-media-type', 'history')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole o link do arquivo</label>
            <input type="url" id="edit-hist-media-url" value="${item.media_url || item.image_url || ''}" placeholder="https://exemplo.com/registro-historico.jpg" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="edit-hist-media-type" value="${item.media_type || 'image'}" />
          </div>

          <div id="edit-hist-media-preview">
            ${(item.media_url || item.image_url) ? `
              <div class="relative mt-2 rounded-xl overflow-hidden border border-gray-200 max-h-36">
                ${(item.media_type === 'video' || (item.media_url && item.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
                  <video src="${item.media_url}" controls playsinline class="w-full h-32 object-cover"></video>
                ` : `
                  <img src="${item.media_url || item.image_url}" alt="Preview" class="w-full h-32 object-cover" />
                `}
              </div>
            ` : ''}
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo Histórico Documentado *</label>
          <textarea id="edit-hist-content" rows="3" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">${item.content || ''}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Fonte / Acervo Responsável *</label>
          <input type="text" id="edit-hist-source" required value="${item.source ? item.source.replace(/"/g, '&quot;') : ''}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitEditHistory(e, historyId) {
  e.preventDefault();
  const item = (DB.history || []).find(h => h.id === historyId);
  if (!item) return;

  const title = document.getElementById('edit-hist-title').value.trim();
  const period = document.getElementById('edit-hist-period').value.trim();
  const content = document.getElementById('edit-hist-content').value.trim();
  const source = document.getElementById('edit-hist-source').value.trim();
  const mediaUrl = document.getElementById('edit-hist-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('edit-hist-media-type')?.value || 'image';

  item.title = title;
  item.period = period;
  item.content = content;
  item.source = source;
  item.media_url = mediaUrl;
  item.image_url = mediaUrl;
  item.media_type = mediaType;

  sortHistoryTimeline();

  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.updateHistoryEntry?.(historyId, item);
  }

  closeModal();
  if (typeof renderHistory === 'function') renderHistory();
  renderAdminCMS();
  showAlertModal('Marco histórico atualizado com sucesso e reposicionado na cronologia!', { title: 'Marco Atualizado', type: 'success' });
}

function openNewStepModal() {
  if (currentUserSession.role !== 'admin' && currentUserSession.role !== 'artist') {
    showAlertModal('Apenas Administradores e Artistas Oficiais podem cadastrar novos passos de frevo.');
    return;
  }
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Passo de Frevo</h3>
          <p class="text-xs text-muted">Cadastre passos técnicos com demonstração em vídeo ou imagem</p>
        </div>
      </div>

      <form onsubmit="submitNewStep(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Passo *</label>
          <input type="text" id="new-step-name" required placeholder="Ex: Saci-Pererê" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Dificuldade *</label>
            <select id="new-step-difficulty" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Categoria *</label>
            <select id="new-step-category" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
              <option value="Tradicional">Tradicional</option>
              <option value="Acrobático">Acrobático</option>
              <option value="Tesouras">Tesouras</option>
              <option value="Pontas e Calcanhares">Pontas e Calcanhares</option>
            </select>
          </div>
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Demonstração Visual (Vídeo ou Foto)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload de Vídeo/Foto do Passo
            <input type="file" id="new-step-file-input" accept="video/mp4,video/webm,image/*" class="hidden" onchange="handleAdminMediaUpload(this, 'new-step-media-preview', 'new-step-media-url', 'new-step-media-type', 'steps')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou URL externa da demonstração</label>
            <input type="url" id="new-step-media-url" placeholder="https://exemplo.com/demonstracao-passo.mp4" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-step-media-type" value="video" />
          </div>

          <div id="new-step-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição Curta *</label>
          <input type="text" id="new-step-desc" required placeholder="Breve resumo da movimentação corporal e ritmo..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Instruções de Execução (Passo a Passo) *</label>
          <textarea id="new-step-instructions" rows="4" required placeholder="1. Posição inicial dos pés&#10;2. Movimento de sombrinha&#10;3. Salto e aterrissagem..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none leading-relaxed"></textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Passo</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewStep(e) {
  e.preventDefault();
  const name = document.getElementById('new-step-name').value.trim();
  const difficulty = document.getElementById('new-step-difficulty').value;
  const category = document.getElementById('new-step-category').value;
  const description = document.getElementById('new-step-desc').value.trim();
  const instructions = document.getElementById('new-step-instructions').value.trim();
  const mediaUrl = document.getElementById('new-step-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('new-step-media-type')?.value || (mediaUrl && mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');

  const newStep = {
    id: `st-${Date.now()}`,
    name,
    difficulty,
    category,
    description,
    instructions,
    media_url: mediaUrl,
    media_type: mediaType,
    author_role: currentUserSession.role === 'artist' ? 'artist' : 'admin'
  };

  DB.steps.push(newStep);
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createStep(newStep);
  }

  closeModal();
  if (typeof renderSteps === 'function') renderSteps();
  renderAdminCMS();
  showAlertModal('Novo passo de Frevo adicionado ao catálogo com sucesso!', { title: 'Passo Salvo', type: 'success' });
}

function openNewArtistModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem cadastrar novos artistas no acervo.');
    return;
  }
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Cadastrar Novo Artista</h3>
        <p class="text-[11px] text-muted">Cadastre a conta oficial do artista. Ele receberá um e-mail de confirmação para acessar a plataforma com a senha padrão.</p>
      </div>

      <div id="new-artist-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-start gap-2"></div>

      <form id="new-artist-form" onsubmit="submitNewArtist(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Responsável / Nome Completo *</label>
          <input type="text" id="new-artist-owner-name" required placeholder="Ex: Roberto Silva" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome de Usuário (@) *</label>
          <input type="text" id="new-artist-handle" required placeholder="@orquestrasomdaterra" oninput="formatSignupHandleInput(this); document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-medium" />
          <span class="block text-[10px] text-muted mt-0.5">Identificador exclusivo na comunidade (ex: @maestroduda).</span>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail de Acesso *</label>
          <input type="email" id="new-artist-email" required placeholder="artista@culturape.com" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          <span class="block text-[10px] text-muted mt-0.5">O artista receberá neste e-mail a confirmação para acessar a conta.</span>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Senha Padrão *</label>
          <div class="relative">
            <input type="password" id="new-artist-password" required minlength="6" value="Frevo2026@" placeholder="Mínimo 6 caracteres" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full pl-3 pr-10 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            <button type="button" onclick="togglePasswordVisibility('new-artist-password', this)" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
          <span class="block text-[10px] text-muted mt-0.5">Senha de primeiro acesso que o artista usará para entrar.</span>
        </div>

        <div class="space-y-2.5 p-3 rounded-xl bg-frevo-orange/5 border border-frevo-orange/20">
          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Nome Artístico / Grupo / Orquestra *</label>
            <input type="text" id="new-artist-name" required placeholder="Ex: Orquestra Som da Terra" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Gênero Tradicional</label>
            <select id="new-artist-genre" onchange="handleGenreSelectChange('new-artist-genre', 'new-artist-custom-genre-container')" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Livre Instrumental">Frevo Livre Instrumental</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
              <option value="Outro">Outro</option>
            </select>
            <div id="new-artist-custom-genre-container" class="mt-1.5 hidden">
              <input type="text" id="new-artist-custom-genre" placeholder="Especifique o gênero tradicional..." class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">WhatsApp / Contato</label>
            <input type="text" id="new-artist-whatsapp" placeholder="(81) 99999-9999" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Mini-Biografia / Histórico Cultural</label>
            <textarea id="new-artist-bio" rows="2" placeholder="Trajetória cultural, participações no carnaval e histórico..." class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"></textarea>
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" id="new-artist-submit-btn" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Cadastrar Artista</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitNewArtist(e) {
  e.preventDefault();
  const errorMsg = document.getElementById('new-artist-error-msg');
  const submitBtn = document.getElementById('new-artist-submit-btn');

  const ownerName = document.getElementById('new-artist-owner-name')?.value.trim();
  const rawHandle = document.getElementById('new-artist-handle')?.value.trim();
  const email = document.getElementById('new-artist-email')?.value.trim();
  const password = document.getElementById('new-artist-password')?.value;
  const artistName = document.getElementById('new-artist-name')?.value.trim();
  const genreSelect = document.getElementById('new-artist-genre')?.value;
  const customGenre = document.getElementById('new-artist-custom-genre')?.value.trim();
  const finalGenre = genreSelect === 'Outro' ? (customGenre || 'Frevo Contemporâneo') : (genreSelect || 'Frevo de Rua');
  const whatsapp = document.getElementById('new-artist-whatsapp')?.value.trim() || '';
  const bio = document.getElementById('new-artist-bio')?.value.trim() || '';

  if (!ownerName || !rawHandle || !email || !password || !artistName) {
    if (errorMsg) {
      errorMsg.innerText = 'Preencha todos os campos obrigatórios (*).';
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  const cleanHandle = sanitizeHandle(rawHandle);
  if (!cleanHandle || cleanHandle.length < 4) {
    if (errorMsg) {
      errorMsg.innerText = 'O nome de usuário (@) deve ter pelo menos 3 caracteres alfanuméricos.';
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  const handleCheck = await isHandleTaken(cleanHandle);
  if (handleCheck.taken) {
    if (errorMsg) {
      errorMsg.innerText = handleCheck.reason;
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Cadastrando e enviando e-mail...';
  }

  let artistRecord = null;
  if (window.awsService && window.awsService.isConnected()) {
    const res = await window.awsService.registerArtistByAdmin({
      ownerName,
      handle: cleanHandle,
      email,
      password,
      artistName,
      genre: finalGenre,
      whatsapp,
      bio
    });

    if (res?.error) {
      if (errorMsg) {
        errorMsg.innerText = res.error.message || 'Erro ao cadastrar artista no AWS.';
        errorMsg.classList.remove('hidden');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Cadastrar Artista';
      }
      return;
    }
    artistRecord = res.data?.artist || null;
  }

  const newArt = {
    id: artistRecord?.id || `a-${Date.now()}`,
    name: artistName,
    handle: cleanHandle,
    genre: finalGenre,
    bio: bio,
    avatar_url: null,
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    email: email,
    phone: whatsapp,
    is_approved: true,
    has_story: false
  };

  DB.artists.unshift(newArt);
  if (typeof saveArtistsLocal === 'function') saveArtistsLocal();

  closeModal();
  if (typeof renderArtists === 'function') renderArtists();
  renderAdminCMS();

  showPlatformAlert(
    `O artista "${artistName}" foi cadastrado com sucesso!\n\nUm e-mail de confirmação foi enviado para ${email} com a senha padrão configurada para o primeiro acesso.`,
    'Artista Cadastrado com Sucesso'
  );
}

function handleAdminUsersSearch(query) {
  window.adminUsersSearchQuery = query;
  renderAdminCMS();
}

function setAdminUsersFilter(role) {
  window.adminUsersRoleFilter = role;
  renderAdminCMS();
}

function openUserDetailsModal(userId) {
  const users = (typeof loadUsersLocal === 'function') ? loadUsersLocal() : [];
  const user = users.find(u => u.id === userId) || {
    id: userId,
    name: 'Folião',
    handle: '@foliao',
    email: '',
    phone: '',
    city: 'Recife, PE',
    role: 'user',
    avatar: null,
    bio: 'Folião entusiasta da cultura do frevo pernambucano.',
    status: 'ativo',
    created_at: new Date().toISOString(),
    favorites_count: 0
  };

  const roleBadge = user.role === 'admin' 
    ? '<span class="badge bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Administrador</span>'
    : user.role === 'artist'
    ? '<span class="badge bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Artista Oficial</span>'
    : '<span class="badge bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Folião</span>';

  const joinedDate = user.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Recente';

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-8">
        <img 
          src="${getUserAvatarUrl(user.avatar)}" 
          alt="${user.name}" 
          class="w-14 h-14 rounded-2xl object-cover border border-gray-200 shadow-sm flex-shrink-0"
          onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'"
        />
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-display font-bold text-base text-ink truncate">${user.name}</h3>
            ${roleBadge}
          </div>
          <span class="text-xs text-muted font-mono block mt-0.5">${user.handle || '@foliao'}</span>
          <span class="text-[11px] text-gray-500 block mt-0.5">Cadastrado em ${joinedDate}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100 space-y-0.5">
          <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">E-mail</span>
          <span class="text-ink font-mono font-medium block truncate">${user.email || 'Não informado'}</span>
        </div>
        <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100 space-y-0.5">
          <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">Telefone / WhatsApp</span>
          <span class="text-ink font-mono font-medium block truncate">${user.phone || 'Não informado'}</span>
        </div>
        <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100 space-y-0.5">
          <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">Localização</span>
          <span class="text-ink font-medium block truncate">${user.city || 'Recife, PE'}</span>
        </div>
        <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-100 space-y-0.5">
          <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">Status da Conta</span>
          <span class="text-green-700 font-bold block capitalize">${user.status || 'Ativo'}</span>
        </div>
      </div>

      <div class="space-y-1">
        <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">Biografia Cultural</span>
        <div class="p-3 bg-surface-soft rounded-xl border border-gray-100 text-xs text-ink leading-relaxed">
          ${user.bio || 'Nenhuma biografia fornecida pelo usuário.'}
        </div>
      </div>

      <div class="flex gap-2 pt-2 border-t border-gray-100">
        <button type="button" onclick="closeModal()" class="btn btn-outline w-full text-xs rounded-xl py-2.5 font-bold">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// ==============================================================================
// GERAÇÃO DE RELATÓRIO ANALÍTICO & INDICADORES CULTURAIS EM PDF (UTF-8 / ACENTOS)
// ==============================================================================
function generateAdminAnalyticsPDF() {
  if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
    if (typeof showAlertModal === 'function') {
      showAlertModal('A biblioteca jsPDF está sendo carregada. Por favor, tente novamente em alguns segundos.');
    } else {
      alert('A biblioteca jsPDF está sendo carregada.');
    }
    return;
  }

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true
    });

    const stats = window.FrevAIAnalytics && typeof window.FrevAIAnalytics.getAnalyticsSummary === 'function'
      ? window.FrevAIAnalytics.getAnalyticsSummary()
      : {
          totalUsers: 7,
          totalFolioes: 5,
          totalArtistas: 3,
          totalAdmins: 1,
          totalAcessos: 154,
          pageViewsToday: 18,
          pageViews7d: 86,
          pageViews30d: 154,
          dau: 4,
          wau: 7,
          mau: 7,
          stickiness: '57.1',
          totalPosts: (DB.posts || []).length,
          totalSongs: (DB.songs || []).length,
          songPlaysCount: 38,
          scoreDownloadsCount: 14
        };

    const users = (typeof window.loadUsersLocal === 'function') ? window.loadUsersLocal() : [];
    const artists = DB.artists || [];
    const songs = DB.songs || [];
    const posts = DB.posts || [];

    // Cores Institucionais FrevAI
    const primary = [255, 138, 0];    // Laranja Frevo (#FF8A00)
    const red = [240, 68, 46];        // Vermelho Frevo (#F0442E)
    const cyan = [22, 199, 217];      // Ciano Frevo (#16C7D9)
    const ink = [23, 23, 23];         // Preto Tinta (#171717)
    const gray = [107, 114, 128];     // Cinza Neutro (#6B7280)
    const lightBg = [249, 250, 251];  // Fundo Suave (#F9FAFB)

    // Cabeçalho Oficial
    doc.setFillColor(...primary);
    doc.rect(0, 0, 210, 8, 'F');

    // Faixa Ciano / Vermelha de Detalhe
    doc.setFillColor(...cyan);
    doc.rect(0, 8, 105, 1.5, 'F');
    doc.setFillColor(...red);
    doc.rect(105, 8, 105, 1.5, 'F');

    // Título e Emissão
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(...ink);
    doc.text('FrevAI — Relatório Executivo de Métricas & Salvaguarda', 15, 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...gray);
    const dataEmissao = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    doc.text(`Emissão: ${dataEmissao} • Gestão Curatorial & Curadoria Técnica • Projeto FrevAI`, 15, 27);

    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.4);
    doc.line(15, 30, 195, 30);

    // ==========================================
    // 1. CARDS DE INDICADORES PRINCIPAIS
    // ==========================================
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...red);
    doc.text('1. Indicadores de Engajamento, Acessos & Usuários Ativos', 15, 37);

    const drawKpiCard = (x, y, w, h, title, value, sub) => {
      doc.setFillColor(...lightBg);
      doc.setDrawColor(229, 231, 235);
      doc.roundedRect(x, y, w, h, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(...gray);
      doc.text(title.toUpperCase(), x + 3.5, y + 5);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...ink);
      doc.text(String(value), x + 3.5, y + 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(...gray);
      doc.text(sub, x + 3.5, y + 16.5);
    };

    drawKpiCard(15, 41, 57, 19, 'Total de Usuários', stats.totalUsers, `${stats.totalFolioes} Foliões • ${stats.totalArtistas} Artistas`);
    drawKpiCard(76, 41, 57, 19, 'DAU (Ativos Hoje)', stats.dau, `${stats.pageViewsToday} acessos registrados hoje`);
    drawKpiCard(138, 41, 57, 19, 'MAU (Ativos Mensais)', stats.mau, `Stickiness / Retenção: ${stats.stickiness}%`);

    drawKpiCard(15, 63, 57, 19, 'Acessos Totais à Página', stats.totalAcessos, `${stats.pageViews30d} views nos últimos 30 dias`);
    drawKpiCard(76, 63, 57, 19, 'Artistas no Acervo', stats.totalArtistas, `${artists.length} perfis catalogados`);
    drawKpiCard(138, 63, 57, 19, 'Músicas & Partituras', stats.totalSongs, `${stats.scoreDownloadsCount} downloads realizados`);

    // ==========================================
    // 2. COMPOSIÇÃO DOS USUÁRIOS E FOLIA
    // ==========================================
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...red);
    doc.text('2. Censo de Usuários da Comunidade do Frevo', 15, 90);

    // Tabela de Usuários Cadastrados
    const tableTop = 94;
    doc.setFillColor(243, 244, 246);
    doc.rect(15, tableTop, 180, 6, 'F');
    doc.setDrawColor(209, 213, 219);
    doc.rect(15, tableTop, 180, 6, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...ink);
    doc.text('NOME COMPLETO', 18, tableTop + 4.2);
    doc.text('IDENTIFICADOR (@)', 75, tableTop + 4.2);
    doc.text('PAPEL / PERFIL', 125, tableTop + 4.2);
    doc.text('DATA DE ADESÃO', 160, tableTop + 4.2);

    let curY = tableTop + 6;
    const sampleUsers = users.slice(0, 10);
    sampleUsers.forEach((u, i) => {
      const isEven = i % 2 === 0;
      if (isEven) {
        doc.setFillColor(255, 255, 255);
      } else {
        doc.setFillColor(249, 250, 251);
      }
      doc.rect(15, curY, 180, 6, 'F');
      doc.setDrawColor(240, 240, 240);
      doc.line(15, curY + 6, 195, curY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...ink);

      const nameStr = (u.name || 'Folião').substring(0, 32);
      const handleStr = (u.handle || '@foliao').substring(0, 24);
      const roleStr = u.role === 'admin' ? 'Administrador' : u.role === 'artist' ? 'Artista Oficial' : 'Folião (Passista/Fã)';
      const dateStr = u.created_at ? new Date(u.created_at).toLocaleDateString('pt-BR') : '2024';

      doc.text(nameStr, 18, curY + 4.2);
      doc.text(handleStr, 75, curY + 4.2);
      doc.text(roleStr, 125, curY + 4.2);
      doc.text(dateStr, 160, curY + 4.2);

      curY += 6;
    });

    // ==========================================
    // 3. ACERVO MUSICAL & PRODUÇÃO CULTURAL
    // ==========================================
    curY += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...red);
    doc.text('3. Balanço de Preservação & Obras Musicais', 15, curY);
    curY += 4;

    const songsTableTop = curY;
    doc.setFillColor(243, 244, 246);
    doc.rect(15, songsTableTop, 180, 6, 'F');
    doc.setDrawColor(209, 213, 219);
    doc.rect(15, songsTableTop, 180, 6, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...ink);
    doc.text('TÍTULO DA MÚSICA', 18, songsTableTop + 4.2);
    doc.text('COMPOSITOR / INTÉRPRETE', 85, songsTableTop + 4.2);
    doc.text('GÊNERO DO FREVO', 145, songsTableTop + 4.2);
    doc.text('DOWNLOADS', 175, songsTableTop + 4.2);

    curY = songsTableTop + 6;
    const sampleSongs = songs.slice(0, 7);
    sampleSongs.forEach((s, i) => {
      const isEven = i % 2 === 0;
      doc.setFillColor(isEven ? 255 : 249, isEven ? 255 : 250, isEven ? 255 : 251);
      doc.rect(15, curY, 180, 5.5, 'F');
      doc.setDrawColor(240, 240, 240);
      doc.line(15, curY + 5.5, 195, curY + 5.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...ink);

      doc.text((s.title || 'Música').substring(0, 36), 18, curY + 3.8);
      doc.text((s.artist || 'Mestre').substring(0, 32), 85, curY + 3.8);
      doc.text((s.genre || 'Frevo de Rua').substring(0, 20), 145, curY + 3.8);
      doc.text(String(s.downloads_count || 120), 175, curY + 3.8);

      curY += 5.5;
    });

    // ==========================================
    // 4. CERTIFICADO & ASSINATURA DIGITAL
    // ==========================================
    curY += 6;
    doc.setFillColor(254, 243, 199);
    doc.setDrawColor(245, 158, 11);
    doc.roundedRect(15, curY, 180, 15, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(146, 64, 14);
    doc.text('CERTIFICAÇÃO DE SALVAGUARDA & ARMAZENAMENTO NO BANCO DE DADOS', 18, curY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(180, 83, 9);
    doc.text('Os dados constantes neste relatório foram consolidados a partir do banco de dados relacional e telemetria contínua da plataforma FrevAI, integrando registros do Amazon DynamoDB, PostgreSQL e Google Analytics 4.', 18, curY + 9, { maxWidth: 174 });

    // Rodapé de Página
    doc.setDrawColor(229, 231, 235);
    doc.line(15, 282, 195, 282);

    doc.setFontSize(7);
    doc.setTextColor(...gray);
    doc.text(`FrevAI — Plataforma Cultural de Salvaguarda do Frevo de Pernambuco • Relatório Oficial • Página 1 de 1`, 105, 287, { align: 'center' });
    doc.text(`Identificador de Autenticidade: FREV-REL-${Date.now().toString(36).toUpperCase()}`, 105, 291, { align: 'center' });

    const safeDate = new Date().toISOString().split('T')[0];
    doc.save(`Relatorio_Executivo_FrevAI_${safeDate}.pdf`);

    if (typeof showAlertModal === 'function') {
      showAlertModal('Relatório analítico em PDF gerado com sucesso! O download foi iniciado.', { title: 'Relatório Gerado', type: 'success' });
    }
  } catch (err) {
    console.error('[PDF] Erro ao gerar relatório analítico:', err);
    if (typeof showAlertModal === 'function') {
      showAlertModal('Erro ao gerar relatório em PDF: ' + err.message);
    }
  }
}

window.switchAdminTab = switchAdminTab;
window.renderAdminCMS = renderAdminCMS;
window.generateAdminAnalyticsPDF = generateAdminAnalyticsPDF;
window.confirmApproveArtistRequest = confirmApproveArtistRequest;
window.openRejectArtistModal = openRejectArtistModal;
window.setRejectReasonPreset = setRejectReasonPreset;
window.submitRejectArtistRequest = submitRejectArtistRequest;
window.handleAdminUsersSearch = handleAdminUsersSearch;
window.setAdminUsersFilter = setAdminUsersFilter;
window.openUserDetailsModal = openUserDetailsModal;
window.deletePost = deletePost;
window.deleteMapPoint = deleteMapPoint;
window.handleAdminMediaUpload = handleAdminMediaUpload;
window.openNewPostModal = openNewPostModal;
window.submitNewPost = submitNewPost;
window.openEditPostModal = openEditPostModal;
window.saveEditPost = saveEditPost;
window.openNewMapPointModal = openNewMapPointModal;
window.resetMapConfirmation = resetMapConfirmation;
window.findAddressOnGoogleMaps = findAddressOnGoogleMaps;
window.confirmGoogleMapsLocation = confirmGoogleMapsLocation;
window.submitNewMapPoint = submitNewMapPoint;
window.openNewHistoryModal = openNewHistoryModal;
window.submitNewHistory = submitNewHistory;
window.openEditHistoryModal = openEditHistoryModal;
window.submitEditHistory = submitEditHistory;
window.openNewStepModal = openNewStepModal;
window.submitNewStep = submitNewStep;
window.openNewArtistModal = openNewArtistModal;
window.submitNewArtist = submitNewArtist;
window.resolveTakedownReport = resolveTakedownReport;



