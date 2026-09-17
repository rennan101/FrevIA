# FrevAI — Diretrizes do Projeto e Regras de Desenvolvimento

Este documento estabelece as regras obrigatórias de design, código e boas práticas da plataforma **FrevAI**. Qualquer alteração ou nova funcionalidade deve seguir rigorosamente os princípios aqui definidos.

---

## 1. Regra Fundamental: ZERO EMOJIS na UI e Código
- **Proibido expressamente:** Nunca utilize emojis em botões, textos, modais, alertas, cabeçalhos, formulários ou qualquer componente da interface.
- **Padrão Oficial:** Use **sempre e exclusivamente ícones SVG profissionais** (estilo Feather Icons / Heroicons / Lucide), com classes Tailwind consistentes (`w-4 h-4`, `w-5 h-5`, etc.), espessuras de traço padronizadas (`stroke-width="2"`) e cores harmonizadas com o tema.

---

## 2. Padrões de Design e Modais da Plataforma
Todos os modais, janelas suspensas e diálogos devem seguir o Design System oficial:
1. **Estrutura Visual:**
   - Superfície suave (`bg-white` ou `bg-surface-soft`), bordas sutis (`border border-gray-200` ou `border-[#DDD8CE]`), sombras refinadas (`shadow-2xl`).
   - Cantos arredondados padronizados (`rounded-2xl` ou `rounded-3xl`).
   - Tipografia de alto padrão com fontes definidas da plataforma (`font-display` para títulos, `font-sans` para textos e inputs).
   - Cabeçalho com ícone descritivo SVG em container de destaque (`w-12 h-12 rounded-xl flex items-center justify-center`), título sem serifa legível e botão de fechar acessível (`w-5 h-5`).
2. **Campos e Ações:**
   - Inputs e textareas com `border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl px-4 py-2.5 outline-none transition`.
   - Botões com hierarquia visual clara:
     - Primário/Ação: `btn-primary` ou `bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition`.
     - Destrutivo/Recusa: `bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition`.
     - Secundário/Cancelar: `btn-outline` ou `border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium px-5 py-2.5 rounded-xl transition`.
3. **Responsividade:**
   - Devem conter largura máxima adaptativa (`max-w-md`, `max-w-lg` ou `max-w-xl`), limite de altura com rolagem suave (`max-h-[90vh] overflow-y-auto`) e suporte pleno para visualização mobile.

---

## 3. Consulta e Atualização Contínua da Documentação
- Antes de implementar qualquer botão, funcionalidade, modal ou rota:
  - **Sempre consultar os arquivos de documentação** (`design.md`, `stack.md`, `README.md`, etc.) para localizar botões, sessões, funções, scripts, arquivos e regras de arquitetura com rapidez e precisão.
  - **Manter a documentação atualizada**: Ao criar novas rotas, tabelas no Supabase, funções globais ou componentes reutilizáveis, documente-os imediatamente nos arquivos pertinentes para manter a base de conhecimento sincronizada.

---

## 4. Gestão de Notificações e Comunicações
- **Fluxo de Solicitações e Moderação:**
  - Todas as decisões tomadas pela moderação/admin (aprovações, recusas, solicitações de ajuste) devem notificar o usuário internamente na plataforma (`DB.notifications`) com mensagem clara e objetiva.
  - Para eventos críticos (como a recusa de uma solicitação de perfil artístico), deve ser fornecido o motivo claro da recusa e também disparado um e-mail formal de notificação ao usuário solicitante informando o parecer e orientações para reenvio.
