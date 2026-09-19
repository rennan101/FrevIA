// ==============================================================================
// FREVAI SCHEMA VALIDATOR & FEEDBACK VISUAL INLINE
// Validação robusta de formulários estilo Zod/Yup com foco em acessibilidade e UX
// ==============================================================================

class ValidationError extends Error {
  constructor(errors) {
    super('Erro de validação');
    this.name = 'ValidationError';
    this.errors = errors; // Map de campo -> mensagem
  }
}

const Validators = {
  isEmail(str) {
    if (!str) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
  },

  isUrl(str) {
    if (!str) return false;
    try {
      const u = new URL(str);
      return u.protocol === 'http:' || u.protocol === 'https:';
    } catch {
      return false;
    }
  },

  isTicketUrl(str) {
    if (!str) return true; // Opcional
    const s = str.trim();
    if (!s) return true;
    return Validators.isUrl(s);
  }
};

// ============================================================================
// SCHEMAS DEFINIDOS PARA A PLATAFORMA FREVAI
// ============================================================================

const FormSchemas = {
  song: {
    title: { required: true, minLength: 2, label: 'Título da Obra' },
    genre: { required: true, label: 'Vertente do Frevo' },
    author: { required: true, minLength: 2, label: 'Compositor / Maestro' }
  },

  album: {
    title: { required: true, minLength: 2, label: 'Título do Álbum' },
    year: { 
      required: true, 
      custom: (val) => {
        const num = parseInt(val, 10);
        return num >= 1900 && num <= 2100;
      },
      message: 'Informe um ano válido (1900 a 2100)'
    },
    genre: { required: true, label: 'Gênero Principal' }
  },

  show: {
    title: { required: true, minLength: 2, label: 'Título do Evento' },
    date: { required: true, label: 'Data do Show' },
    time: { required: true, label: 'Horário do Show' },
    venue: { required: true, minLength: 3, label: 'Local / Espaço Cultural' },
    ticket_url: {
      custom: (val) => Validators.isTicketUrl(val),
      message: 'Informe uma URL válida (ex: https://sympla.com.br/...)'
    }
  },

  post: {
    title: { required: true, minLength: 3, label: 'Título da Notícia/Post' },
    content: { required: true, minLength: 10, label: 'Texto do Conteúdo' }
  },

  artistRequest: {
    name: { required: true, minLength: 3, label: 'Nome Artístico / Agremiação' },
    email: { 
      required: true, 
      custom: (val) => Validators.isEmail(val), 
      message: 'Informe um e-mail válido para contato' 
    },
    bio: { required: true, minLength: 20, label: 'Biografia Cultural' }
  }
};

// ============================================================================
// ENGINE DE VALIDAÇÃO E CONTROLE VISUAL NO DOM
// ============================================================================

const ValidatorEngine = {
  validate(data, schemaName) {
    const schema = FormSchemas[schemaName];
    if (!schema) return { isValid: true, errors: {} };

    const errors = {};

    for (const [field, rules] of Object.entries(schema)) {
      const val = data[field];
      const strVal = (val === null || val === undefined) ? '' : String(val).trim();

      if (rules.required && !strVal) {
        errors[field] = `O campo "${rules.label || field}" é obrigatório.`;
        continue;
      }

      if (rules.minLength && strVal.length < rules.minLength) {
        errors[field] = `O campo "${rules.label || field}" deve ter no mínimo ${rules.minLength} caracteres.`;
        continue;
      }

      if (rules.custom && !rules.custom(strVal)) {
        errors[field] = rules.message || `Valor inválido para o campo "${rules.label || field}".`;
        continue;
      }
    }

    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
  },

  showFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.classList.add('border-rose-500', 'bg-rose-50/20', 'focus:ring-rose-200');
    input.classList.remove('border-gray-200', 'focus:ring-frevo-purple', 'focus:ring-frevo-red');
    input.setAttribute('aria-invalid', 'true');

    // Elemento de erro inline
    let errorEl = document.getElementById(`${inputId}-error`);
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.id = `${inputId}-error`;
      errorEl.className = 'text-[11px] font-semibold text-rose-600 mt-1 flex items-center gap-1 transition-all';
      input.parentNode.appendChild(errorEl);
    }

    errorEl.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="flex-shrink-0">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span>${message}</span>
    `;
  },

  clearFieldError(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.classList.remove('border-rose-500', 'bg-rose-50/20', 'focus:ring-rose-200');
    input.removeAttribute('aria-invalid');

    const errorEl = document.getElementById(`${inputId}-error`);
    if (errorEl && errorEl.parentNode) {
      errorEl.parentNode.removeChild(errorEl);
    }
  },

  clearFormErrors(formElement) {
    if (!formElement) return;
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.id) this.clearFieldError(input.id);
    });
  }
};

window.Validators = Validators;
window.FormSchemas = FormSchemas;
window.ValidatorEngine = ValidatorEngine;
