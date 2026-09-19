# FrevAI — Central de Conhecimento & Arquitetura (Brain)

Bem-vindo ao **Brain** da plataforma **FrevAI**. Este documento serve como índice mestre e mapa mental interligado por **Wikilinks (`[[NomeDoArquivo]]`)**, projetado especialmente para navegação rápida no Obsidian, IDEs e sistemas de documentação.

---

## 🗺️ Mapa de Navegação Rápida (Wikilinks)

### 🏛️ 1. Arquitetura e Escopo
- [[escopo_e_arquitetura]] — Especificação técnica do ecossistema, 7 módulos da plataforma e objetivos de salvaguarda cultural.
- [[stack]] — Definição da stack tecnológica (AWS, Vanilla JS, PWA), schemas de dados e integrações.
- [[aurora_schema.sql]] — Schema DDL das tabelas PostgreSQL / Aurora (`artists`, `songs`, `albums`, `shows`, `steps`, `history`, `points`, `notifications`).
- [[package.json]] — Scripts de execução e metadados do projeto.
- [[manifest.json]] — Configuração de PWA para instalação no Android e iOS.
- [[sw.js]] — Service Worker para cache offline e estratégias de rede.

### 🎨 2. Design System e Regras Fundamentais
- [[GEMINI]] — **Diretrizes Obrigatórias:** ZERO emojis (uso estrito de SVGs profissionais), padrão visual de modais, isolamento estrito de notificações por usuário e regras regionais AWS (`sa-east-1`).
- [[design]] — Paleta de cores do Frevo (Ciano `#16C7D9`, Laranja `#FF8A00`, etc.), tipografia (*Bricolage Grotesque* & *Plus Jakarta Sans*) e superfícies neutras.

### 💻 3. Módulos de Código JavaScript (`js/`)
- [[js/config.js]] — Variáveis de ambiente, URLs do API Gateway AWS e chaves públicas.
- [[js/aws.js]] — Camada de serviços AWS (Cognito, DynamoDB/Aurora, S3 uploads, CRUD completo).
- [[js/app.js]] — Ponto de entrada da aplicação, inicialização de eventos e roteamento de views.

#### 📦 Submódulos e Serviços (`js/modules/`)
- [[js/modules/db]] — Store unificada (`DB`), dados mock e sincronização com banco.
- [[js/modules/auth]] — Gestão de sessão, controle de acesso baseado em papéis (RBAC) e estado do usuário autenticado.
- [[js/modules/audio-player]] — Motor de áudio (`FrevoAudioEngine`), player flutuante e reprodução de faixas.
- [[js/modules/score-engine]] — Renderizador de pautas musicais SVG, geração de PDF com `jsPDF` e perfis tonais.
- [[js/modules/notifications]] — Gerenciador de notificações, sino, isolamento de alertas e deep links.
- [[js/modules/infinite-scroll]] — `InfiniteScrollManager` com `IntersectionObserver` para rolagem contínua fluida.

#### 🖥️ Views e Telas (`js/modules/views/`)
- [[js/modules/views/feed]] — Feed cultural, publicações multimídia, curtidas e comentários.
- [[js/modules/views/artists]] — Diretório de artistas, perfis oficiais, filtros por vertente e favoritos.
- [[js/modules/views/songs]] — Catálogo musical, discografia, visualizador de partituras e controle de downloads (`allow_download`).
- [[js/modules/views/steps]] — Galeria pedagógica de passos de dança de frevo e tutoriais.
- [[js/modules/views/history]] — Linha do tempo histórica cronológica e marcos culturais.
- [[js/modules/views/map]] — Mapa cultural interativo e geocodificação de pontos turísticos/históricos.
- [[js/modules/views/admin]] — Painel de Gestão (CMS), curadoria de solicitações artísticas e moderação de conteúdo.

#### 🪟 Modais e Diálogos (`js/modules/modals/`)
- [[js/modules/modals/session-modal]] — Diálogo unificado de Login e Cadastro (Folião vs Artista).
- [[js/modules/modals/song-modal]] — Cadastro e upload de novas músicas e partituras oficiais.
- [[js/modules/modals/album-modal]] — Construtor de álbuns, upload de múltiplas faixas, ordenação e exclusão.
- [[js/modules/modals/alert-modal]] — Modal do sistema para alertas e confirmações com feedback visual.

---

## 🎯 4. Matriz de Permissões (RBAC)
Consulte [[escopo_e_arquitetura#3-matriz-de-acessos-por-cargo-rbac-e-arquitetura-de-notificacoes]] para detalhes completos sobre permissões por perfil (`guest`, `user`, `artist`, `admin`).

| Funcionalidade | Visitante (`guest`) | Folião (`user`) | Artista (`artist`) | Administrador (`admin`) |
| :--- | :---: | :---: | :---: | :---: |
| Navegação Pública | Sim | Sim | Sim | Sim |
| Player e Partituras | Sim | Sim | Sim | Sim |
| Download de Músicas | Conforme permissão do maestro | Conforme permissão do maestro | Próprio acervo + autorizadas | Acesso total |
| Cadastro de Álbuns/Músicas | Não | Não | Sim | Sim |
| Painel CMS / Curadoria | Não | Não | Não | Sim |

---

## 📌 5. Boas Práticas e Recomendações
1. **Regra de Ouro:** Não utilize emojis em strings ou componentes visuais; consulte sempre [[GEMINI]] e adote SVGs.
2. **Atualização da Documentação:** Ao criar novas rotas ou componentes, mantenha este [[brain]] e os arquivos pertinentes atualizados.
