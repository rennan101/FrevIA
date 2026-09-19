// ==============================================================================
// FREVAI - SISTEMA DE NOTIFICAÇÕES & PUSH COM ISOLAMENTO ESTRITO POR USUÁRIO
// Cada conta (Admin, Maestro, Folião, Visitante) possui sua própria caixa e badges
// ==============================================================================

function isNotificationReadForSession(notif, currentUserId) {
  if (!notif) return true;
  if (Array.isArray(notif.readBy) && currentUserId) {
    if (notif.readBy.includes(currentUserId)) return true;
  }
  if (notif.forUserId && currentUserId && notif.forUserId === currentUserId) {
    return Boolean(notif.read);
  }
  return Boolean(notif.read);
}

function getVisibleNotificationsForCurrentSession() {
  if (typeof loadNotificationsLocal === 'function') loadNotificationsLocal();
  const session = window.currentUserSession || {};
  const currentUserId = session.id;
  const userRole = session.role || 'guest';
  const userArtistId = session.artist_id;
  const userFavorites = Array.isArray(session.favorites) ? session.favorites : [];
  const isAdmin = userRole === 'admin';
  const isArtist = userRole === 'artist';

  const filtered = (window.DB?.notifications || []).filter(n => {
    // 1. Destinada especificamente a este ID de usuário
    if (n.forUserId) {
      return n.forUserId === currentUserId || (userArtistId && n.forUserId === userArtistId);
    }

    // 2. Destinada a um cargo específico
    if (n.forRole) {
      if (n.forRole === 'admin') return isAdmin;
      if (n.forRole === 'artist') return isArtist || isAdmin;
      if (n.forRole === 'user') return userRole === 'user';
      if (n.forRole === 'guest') return userRole === 'guest';
      return n.forRole === userRole;
    }

    // 3. Notificação disparada para fãs que favoritaram um artista
    if (n.forFavoritesOfArtist) {
      return userFavorites.includes(n.forFavoritesOfArtist);
    }

    // 4. Se for visitante, não exibe notificações de sistema fechadas
    if (userRole === 'guest') {
      return n.type === 'welcome' || n.forRole === 'guest';
    }

    // 5. Notificação de transmissão geral explícita
    return Boolean(n.broadcast);
  });

  // Mapeia cada notificação com o status de leitura individualizado
  return filtered.map(n => ({
    ...n,
    read: isNotificationReadForSession(n, currentUserId)
  }));
}

function updateNotificationBadge() {
  const badge = document.getElementById('header-notification-badge');
  if (!badge) return;
  const visibleNotifs = getVisibleNotificationsForCurrentSession();
  const unreadCount = visibleNotifs.filter(n => !n.read).length;
  badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

function sendCulturalPushNotification({ title, message, url, type, targetId, forUserId, forRole }) {
  const session = window.currentUserSession || {};
  const currentUserId = session.id;

  // Se a notificação for direcionada a outro usuário, não exibe push local
  if (forUserId && forUserId !== currentUserId) return;
  if (forRole && forRole !== session.role && session.role !== 'admin') return;

  if (!('Notification' in window)) return;
  const notifUrl = url || (type === 'post' ? `/#feed?post=${targetId}` : `/#songs?score=${targetId}`);

  if (Notification.permission === 'granted') {
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, {
          body: message,
          icon: 'assets/icons/icon-192x192.png',
          badge: 'assets/icons/icon-192x192.png',
          vibrate: [100, 50, 100],
          data: { url: notifUrl, type, targetId }
        });
      }).catch(err => {
        console.warn('SW push notification fallback:', err);
      });
    } else {
      try {
        const nativeNotif = new Notification(title, {
          body: message,
          icon: 'assets/icons/icon-192x192.png'
        });
        nativeNotif.onclick = () => {
          window.focus();
          handleNotificationClick(null, type, targetId);
        };
      } catch (e) {}
    }
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission();
  }
}

function markAllNotificationsAsRead() {
  const session = window.currentUserSession || {};
  const currentUserId = session.id;
  const visible = getVisibleNotificationsForCurrentSession();
  const visibleIds = new Set(visible.map(n => n.id));

  (window.DB?.notifications || []).forEach(n => {
    if (visibleIds.has(n.id)) {
      if (n.forUserId === currentUserId) {
        n.read = true;
      }
      n.readBy = Array.isArray(n.readBy) ? n.readBy : [];
      if (currentUserId && !n.readBy.includes(currentUserId)) {
        n.readBy.push(currentUserId);
      }
    }
  });

  if (typeof saveNotificationsLocal === 'function') saveNotificationsLocal();
  updateNotificationBadge();
  openNotificationsModal();
}

function handleNotificationClick(notifId, type, targetId) {
  const session = window.currentUserSession || {};
  const currentUserId = session.id;

  if (notifId) {
    const notif = (window.DB?.notifications || []).find(n => n.id === notifId);
    if (notif) {
      if (notif.forUserId === currentUserId) {
        notif.read = true;
      }
      notif.readBy = Array.isArray(notif.readBy) ? notif.readBy : [];
      if (currentUserId && !notif.readBy.includes(currentUserId)) {
        notif.readBy.push(currentUserId);
      }
    }
    if (typeof saveNotificationsLocal === 'function') saveNotificationsLocal();
  }
  updateNotificationBadge();
  if (typeof closeModal === 'function') closeModal();

  if (type === 'post') {
    if (typeof switchView === 'function') switchView('feed');
    setTimeout(() => {
      const el = document.getElementById(`post-card-${targetId}`) || document.querySelector(`[data-post-id="${targetId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-pulse');
        setTimeout(() => el.classList.remove('highlight-pulse'), 3500);
      }
    }, 280);
  } else if (type === 'score') {
    if (typeof switchView === 'function') switchView('songs');
    const song = (window.DB?.songs || []).find(s => s.id === targetId);
    if (song) {
      setTimeout(() => {
        if (typeof openScoreModal === 'function') openScoreModal(song.title, song.artist, song.id);
      }, 250);
    }
  } else if (type === 'artist_request') {
    if (typeof switchView === 'function') switchView('admin');
    if (typeof currentAdminTab !== 'undefined') window.currentAdminTab = 'artists';
    document.querySelectorAll('.admin-tab-pill').forEach(b => {
      b.classList.toggle('active', b.innerText.toLowerCase().includes('solicitaç') || b.innerText.toLowerCase().includes('artista'));
    });
    if (typeof renderAdminCMS === 'function') renderAdminCMS();
  } else if (type === 'artist_rejected') {
    if (typeof loadNotificationsLocal === 'function') loadNotificationsLocal();
    const notif = (window.DB?.notifications || []).find(n => n.id === notifId);
    const feedback = notif ? notif.message : 'Sua solicitação artística não pôde ser aprovada no momento.';
    if (typeof showAlertModal === 'function') {
      showAlertModal(
        `${feedback}\n\nVocê pode atualizar seus dados biográficos e links artísticos na aba de perfil e enviar uma nova solicitação a qualquer momento.`,
        { title: 'Parecer da Curadoria', type: 'info' }
      );
    }
  } else if (type === 'artist_approved') {
    if (typeof switchView === 'function') switchView('profile');
    if (typeof showAlertModal === 'function') {
      showAlertModal(
        'Parabéns! Seu perfil de Artista Oficial já está ativo. Você já pode cadastrar partituras e gerenciar suas obras.',
        { title: 'Artista Verificado', type: 'success' }
      );
    }
  }
}

// Modal do Sino de Notificações
function openNotificationsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  const notifications = getVisibleNotificationsForCurrentSession();
  const unreadCount = notifications.filter(n => !n.read).length;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Notificações</h3>
          <p class="text-xs text-muted">${unreadCount > 0 ? `${unreadCount} não lida(s)` : 'Tudo em dia!'}</p>
        </div>
        ${unreadCount > 0 ? `
          <button onclick="markAllNotificationsAsRead()" class="text-[11px] font-bold text-frevo-orange hover:underline">
            Marcar todas como lidas
          </button>
        ` : ''}
      </div>

      <div class="space-y-2.5 max-h-72 overflow-y-auto pr-1">
        ${notifications.length > 0 ? notifications.map(notif => `
          <div onclick="handleNotificationClick('${notif.id}', '${notif.type}', '${notif.targetId}')" class="notification-item p-3.5 ${notif.read ? 'bg-white border border-gray-100 opacity-80' : 'bg-surface-soft border border-frevo-orange/30 shadow-sm'} rounded-2xl flex items-start gap-3 cursor-pointer hover:border-frevo-orange transition-all">
            <div class="relative flex-shrink-0">
              <img src="${notif.author_avatar || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'}" alt="${notif.author || 'FrevAI'}" class="w-10 h-10 rounded-full object-cover border border-gray-200" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'%3E%3Crect width=\\'100\\%\\' height=\\'100\\%\\' fill=\\'%23E5E7EB\\'/ %3E%3C/svg%3E'" />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-white ${notif.type === 'score' ? 'bg-frevo-cyan' : notif.type === 'artist_request' ? 'bg-frevo-green' : notif.type === 'artist_rejected' ? 'bg-rose-500' : notif.type === 'artist_approved' ? 'bg-emerald-500' : 'bg-frevo-orange'}">
                ${notif.type === 'score' 
                  ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>' 
                  : notif.type === 'artist_request'
                    ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                    : notif.type === 'artist_rejected'
                      ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                      : notif.type === 'artist_approved'
                        ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                        : '<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-1 mb-0.5">
                <strong class="text-ink text-xs font-bold truncate block">${notif.title}</strong>
                ${!notif.read ? '<span class="w-2 h-2 rounded-full bg-frevo-orange flex-shrink-0 animate-pulse"></span>' : ''}
              </div>
              <p class="text-[11px] text-ink-soft leading-snug line-clamp-2">${notif.message}</p>
              <div class="flex items-center justify-between mt-1.5 pt-1 border-t border-gray-100/60">
                <span class="text-[10px] text-muted font-medium">${notif.time_ago || 'Recentemente'}</span>
                <span class="text-[10px] font-bold text-frevo-orange flex items-center gap-0.5">
                  ${notif.type === 'score' ? 'Ver Partitura' : notif.type === 'artist_request' ? 'Revisar no CMS' : notif.type === 'artist_rejected' ? 'Ver Justificativa' : notif.type === 'artist_approved' ? 'Acessar Perfil' : 'Ver no Feed'} &rarr;
                </span>
              </div>
            </div>
          </div>
        `).join('') : `
          <div class="p-6 text-center bg-surface-soft rounded-2xl border border-gray-100">
            <p class="text-xs text-muted">Nenhuma notificação na sua caixa de entrada.</p>
          </div>
        `}
      </div>

      <button onclick="closeModal()" class="btn btn-outline w-full text-xs rounded-xl py-2 font-bold text-ink">
        Fechar
      </button>
    </div>
  `;

  modal.classList.add('open');
}

async function togglePushNotifications() {
  if (!('Notification' in window)) {
    if (typeof showAlertModal === 'function') showAlertModal('Notificações não são suportadas por este navegador.');
    return;
  }

  if (Notification.permission === 'granted') {
    if (typeof showAlertModal === 'function') showAlertModal('Notificações já estão ativadas para o FrevAI!', { type: 'success' });
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      if (typeof showAlertModal === 'function') showAlertModal('Notificações ativadas com sucesso! Você receberá avisos de novos frevos e lançamentos.', { type: 'success' });
    } else {
      if (typeof showAlertModal === 'function') showAlertModal('Permissão de notificações não concedida no navegador.');
    }
  } catch (err) {
    if (typeof showAlertModal === 'function') showAlertModal('Não foi possível solicitar permissão no momento.');
  }
}

window.getVisibleNotificationsForCurrentSession = getVisibleNotificationsForCurrentSession;
window.updateNotificationBadge = updateNotificationBadge;
window.renderNotificationsBadge = updateNotificationBadge;
window.sendCulturalPushNotification = sendCulturalPushNotification;
window.markAllNotificationsAsRead = markAllNotificationsAsRead;
window.handleNotificationClick = handleNotificationClick;
window.openNotificationsModal = openNotificationsModal;
window.togglePushNotifications = togglePushNotifications;
