// ==============================================================================
// FREVAI - CONFORMIDADE JURÍDICA, LGPD, TERMOS DE USO & TAKEDOWN DE CONTEÚDO
// ==============================================================================

function loadTakedownsLocal() {
  const saved = localStorage.getItem('frevai_takedown_reports');
  if (saved) {
    try {
      window.DB = window.DB || {};
      window.DB.takedownReports = JSON.parse(saved);
    } catch (e) {}
  }
}

function saveTakedownsLocal() {
  if (window.DB && window.DB.takedownReports) {
    localStorage.setItem('frevai_takedown_reports', JSON.stringify(window.DB.takedownReports));
  }
}

// -----------------------------------------------------------------------------
// 1. TERMOS DE USO DA PLATAFORMA
// -----------------------------------------------------------------------------
function openTermsModal() {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-frevo-orange/10 text-frevo-orange flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Termos de Uso</h3>
          <p class="text-xs text-muted">Salvaguarda Cultural e Diretrizes da Comunidade FrevAI</p>
        </div>
      </div>

      <div class="space-y-3.5 text-xs text-ink-soft leading-relaxed">
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100">
          <strong class="text-ink block font-bold mb-1">1. Objeto & Salvaguarda Cultural</strong>
          <p>O <strong>FrevAI</strong> é uma plataforma digital colaborativa dedicada à salvaguarda, difusão, preservação e fruição da tradição do Frevo de Pernambuco (Patrimônio Cultural Imaterial da Humanidade pela UNESCO). O uso da plataforma é gratuito e rege-se pelos presentes Termos.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">2. Cadastro, Papéis e Responsabilidade</strong>
          <p>Ao criar uma conta (como Folião, Fã ou Artista/Mestre), o usuário declara que todas as informações prestadas são verídicas. O perfil de Artista requer análise prévia do comitê curatorial para liberação de ferramentas de publicação.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">3. Propriedade Intelectual & Partituras</strong>
          <p>Todas as partituras, composições e gravações disponibilizadas no acervo permanecem sob titularidade moral e patrimonial de seus respectivos autores ou herdeiros. O download em PDF de partituras e o streaming de áudios são autorizados estritamente para estudo, pesquisa, preservação e execução musical comunitária.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">4. Conduta do Usuário e Proibições</strong>
          <p>É expressamente proibido publicar conteúdo ofensivo, discriminatório, comercial não autorizado, ou que viole direitos autorais de terceiros. A moderação reserva-se o direito de suspender contas e remover publicações em desacordo com as diretrizes.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">5. Alterações dos Termos</strong>
          <p>O comitê gestor do FrevAI pode atualizar estes Termos periodicamente. O uso contínuo da plataforma após alterações constitui aceitação tácita.</p>
        </div>
      </div>

      <div class="pt-2 border-t border-gray-100 flex gap-2">
        ${hasHistory ? `
          <button type="button" onclick="goBackModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Voltar
          </button>
        ` : ''}
        <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">
          Entendido
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// -----------------------------------------------------------------------------
// 2. POLÍTICA DE PRIVACIDADE & LGPD
// -----------------------------------------------------------------------------
function openPrivacyModal() {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;
  const dpoEmail = window.FREVIA_CONFIG?.DPO_CONTACT_EMAIL || 'privacidade@frevai.com.br';

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-frevo-green/15 text-frevo-green flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Política de Privacidade & LGPD</h3>
          <p class="text-xs text-muted">Tratamento de Dados Pessoais (Lei nº 13.709/2018)</p>
        </div>
      </div>

      <div class="space-y-3.5 text-xs text-ink-soft leading-relaxed">
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100">
          <strong class="text-ink block font-bold mb-1">Compromisso com a sua Privacidade</strong>
          <p>O FrevAI respeita a sua privacidade e garante conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD). Esta política detalha como coletamos, tratamos e protegemos seus dados.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">1. Dados Coletados</strong>
          <ul class="list-disc pl-4 space-y-1">
            <li><strong>Cadastro básico:</strong> Nome completo, identificador exclusivo (@handle), e-mail e foto de perfil opcional.</li>
            <li><strong>Perfil Artístico:</strong> Nome artístico, gênero do frevo, WhatsApp de contato (opcional) e biografia.</li>
            <li><strong>Navegação & Interação:</strong> Histórico de partituras salvas, artistas favoritados e preferências de reprodução musical.</li>
          </ul>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">2. Finalidade do Tratamento</strong>
          <p>Os dados são utilizados exclusivamente para autenticação segura (Amazon Cognito), personalização da experiência cultural, notificação de lançamentos de partituras e moderação curatorial.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">3. Armazenamento e Segurança</strong>
          <p>Seus dados são armazenados em nuvem segura na região América do Sul (AWS sa-east-1) com criptografia em trânsito (HTTPS/TLS) e repouso (KMS/PostgreSQL).</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">4. Seus Direitos (Art. 18 da LGPD)</strong>
          <p>Você tem o direito de acessar, retificar, solicitar a portabilidade ou a exclusão definitiva dos seus dados pessoais a qualquer momento pelo painel de configurações ou entrando em contato com nosso Encarregado de Dados (DPO).</p>
        </div>

        <div class="p-3 bg-gray-50 rounded-xl border border-gray-200 text-[11px]">
          <strong>Canal do Encarregado (DPO):</strong>
          <a href="mailto:${dpoEmail}" class="text-frevo-orange font-bold hover:underline block mt-0.5">${dpoEmail}</a>
        </div>
      </div>

      <div class="pt-2 border-t border-gray-100 flex gap-2">
        ${hasHistory ? `
          <button type="button" onclick="goBackModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Voltar
          </button>
        ` : ''}
        <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">
          Compreendido
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// -----------------------------------------------------------------------------
// 3. TERMO DE CESSÃO E LICENCIAMENTO AUTORAL PARA MESTRES & ARTISTAS
// -----------------------------------------------------------------------------
function openCopyrightModal() {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-frevo-purple/15 text-frevo-purple flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Licenciamento Autoral</h3>
          <p class="text-xs text-muted">Diretrizes de Cessão e Difusão de Partituras e Áudios</p>
        </div>
      </div>

      <div class="space-y-3.5 text-xs text-ink-soft leading-relaxed">
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100">
          <strong class="text-ink block font-bold mb-1">Declaração de Titularidade & Salvaguarda</strong>
          <p>Ao cadastrar obras musicais, arranjos ou partituras no FrevAI, o compositor, maestro ou agremiação atesta ser titular legítimo dos direitos autorais patrimoniais ou devidamente autorizado para difusão pública.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">1. Licença Não Exclusiva e Gratuita</strong>
          <p>O autor concede ao FrevAI uma licença não exclusiva, gratuita e de abrangência cultural para indexar, reproduzir em streaming e permitir o download educacional das partituras em formato PDF.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">2. Controle pelo Autor</strong>
          <p>O compositor pode a qualquer instante habilitar ou desabilitar a permissão de download público de sua partitura, bem como editar informações de regência ou excluir a obra do acervo digital.</p>
        </div>

        <div>
          <strong class="text-ink block font-bold mb-1">3. Créditos e Reconhecimento Moral</strong>
          <p>O FrevAI compromete-se a preservar e exibir com destaque os créditos oficiais de composição, arranjo e regência em todas as visualizações, fichas técnicas e folhas de partitura geradas em PDF.</p>
        </div>
      </div>

      <div class="pt-2 border-t border-gray-100 flex gap-2">
        ${hasHistory ? `
          <button type="button" onclick="goBackModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Voltar
          </button>
        ` : ''}
        <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">
          Entendido
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// -----------------------------------------------------------------------------
// 4. CANAL DE DENÚNCIA / TAKEDOWN DE CONTEÚDO (DIREITOS AUTORAIS / INADEQUADO)
// -----------------------------------------------------------------------------
function openTakedownModal(targetId = '', targetType = 'geral', targetTitle = '') {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;
  const currentEmail = (window.currentUserSession && window.currentUserSession.email) || '';
  const currentName = (window.currentUserSession && window.currentUserSession.name) || '';

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Denúncia / Notificação de Remoção</h3>
          <p class="text-xs text-muted">Canal oficial para direitos autorais e moderação de conteúdo</p>
        </div>
      </div>

      <form id="takedown-form" onsubmit="submitTakedownReport(event)" class="space-y-3">
        <input type="hidden" id="takedown-target-id" value="${targetId}" />
        <input type="hidden" id="takedown-target-type" value="${targetType}" />

        ${targetTitle ? `
          <div class="p-2.5 bg-surface-soft rounded-xl border border-gray-200 text-xs">
            <span class="text-[10px] text-muted uppercase font-bold block">Objeto da Notificação:</span>
            <strong class="text-ink">${targetTitle}</strong>
          </div>
        ` : ''}

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Motivo da Notificação *</label>
          <select id="takedown-reason" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
            <option value="Direitos Autorais (Violação / Não Autorizado)">Violação de Direitos Autorais / Uso Indevido de Obra</option>
            <option value="Informação Falsa ou Imprecisa">Informação Histórica Falsa ou Biografia Imprecisa</option>
            <option value="Conteúdo Ofensivo ou Inadequado">Conteúdo Ofensivo, Discriminatório ou Inadequado</option>
            <option value="Falsa Identidade / Impersonação">Falsa Identidade ou Impersonação de Artista/Agremiação</option>
            <option value="Outro Motivo">Outro Motivo</option>
          </select>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Seu Nome / Razão Social *</label>
          <input type="text" id="takedown-name" required value="${currentName}" placeholder="Nome completo do reclamante ou representante legal" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">E-mail de Contato *</label>
          <input type="email" id="takedown-email" required value="${currentEmail}" placeholder="seuemail@exemplo.com" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Detalhamento da Ocorrência *</label>
          <textarea id="takedown-details" required rows="4" placeholder="Descreva os fatos, links de comprovação de titularidade ou o motivo detalhado para análise da moderação..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange leading-relaxed"></textarea>
        </div>

        <div class="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
          <strong>Processamento Curatorial:</strong> Todas as denúncias são analisadas pelo comitê gestor do FrevAI. Caso comprovada a irregularidade, o conteúdo é imediatamente suspenso ou retificado.
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold">
            ${hasHistory ? 'Voltar' : 'Cancelar'}
          </button>
          <button type="submit" class="btn bg-rose-600 hover:bg-rose-700 text-white flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">
            Enviar Notificação
          </button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitTakedownReport(e) {
  e.preventDefault();
  const targetId = document.getElementById('takedown-target-id')?.value || '';
  const targetType = document.getElementById('takedown-target-type')?.value || 'geral';
  const reason = document.getElementById('takedown-reason')?.value || 'Direitos Autorais';
  const name = document.getElementById('takedown-name')?.value?.trim() || '';
  const email = document.getElementById('takedown-email')?.value?.trim() || '';
  const details = document.getElementById('takedown-details')?.value?.trim() || '';

  if (!name || !email || !details) {
    if (typeof showAlertModal === 'function') showAlertModal('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  loadTakedownsLocal();
  window.DB = window.DB || {};
  window.DB.takedownReports = window.DB.takedownReports || [];

  const newReport = {
    id: 'takedown-' + Date.now(),
    target_id: targetId,
    target_type: targetType,
    reason: reason,
    reporter_name: name,
    reporter_email: email,
    details: details,
    created_at: new Date().toISOString(),
    status: 'pending'
  };

  window.DB.takedownReports.unshift(newReport);
  saveTakedownsLocal();

  // Disparar notificação para o comitê de administradores
  if (typeof loadNotificationsLocal === 'function') loadNotificationsLocal();
  window.DB.notifications = window.DB.notifications || [];
  window.DB.notifications.unshift({
    id: 'notif-takedown-' + Date.now(),
    type: 'takedown_report',
    targetId: newReport.id,
    title: 'Nova Denúncia de Conteúdo / Takedown',
    message: `${name} enviou uma notificação sobre ${reason}. Verifique na aba de Denúncias no CMS.`,
    author: 'Sistema de Denúncias',
    author_avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
    time_ago: 'Agora mesmo',
    read: false,
    forRole: 'admin'
  });
  if (typeof saveNotificationsLocal === 'function') saveNotificationsLocal();
  if (typeof updateNotificationBadge === 'function') updateNotificationBadge();

  if (window.FrevAIAnalytics) {
    window.FrevAIAnalytics.track('takedown_reported', { reason, target_type: targetType });
  }

  closeModal();

  if (typeof showAlertModal === 'function') {
    showAlertModal(
      'Sua notificação foi registrada com sucesso!\n\nNossa equipe curatorial analisará as informações em até 48 horas e entrará em contato pelo e-mail informado caso necessário.',
      { title: 'Notificação Recebida', type: 'success' }
    );
  }
}

// Exportações Globais
window.openTermsModal = openTermsModal;
window.openPrivacyModal = openPrivacyModal;
window.openCopyrightModal = openCopyrightModal;
window.openTakedownModal = openTakedownModal;
window.submitTakedownReport = submitTakedownReport;
window.loadTakedownsLocal = loadTakedownsLocal;
window.saveTakedownsLocal = saveTakedownsLocal;
