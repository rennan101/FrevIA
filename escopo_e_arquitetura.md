# Especificação do Projeto — FrevAI / FrevIA
**Ecossistema Digital, Cultural e Interativo do Frevo de Pernambuco**

---

## 1. Escopo do Projeto

O **FrevAI / FrevIA** é uma plataforma digital e ecossistema cultural transmídia (web responsiva e PWA/mobile-first), concebido para conectar fazedores de cultura, artistas, passistas, pesquisadores, agremiações e o público apaixonado pelo Frevo em Pernambuco e no mundo.

O projeto une a salvaguarda do **Patrimônio Cultural Imaterial da Humanidade (UNESCO)** à **inovação tecnológica e Inteligência Artificial**, estruturando canais de difusão, memória histórica viva, catálogo de partituras e letras, aprendizado prático de passos, geolocalização cultural e ferramentas criativas para impulsionar a economia criativa da cultura carnavalesca e contemporânea.

### Objetivos Estratégicos
- **Preservação e Difusão**: Catalogar e digitalizar a memória de mestres, maestros, blocos líricos, clubes de frevo e troças carnavalescas.
- **Engajamento e Comunidade**: Oferecer um feed dinâmico e colaborativo com interações sociais (curtidas, comentários, compartilhamentos e seguidores).
- **Educação e Formação**: Sistematizar os passos tradicionais e contemporâneos do Frevo com mídia e tutoriais acessíveis.
- **Inovação com IA**: Disponibilizar apoio criativo a compositores, arranjadores e designers por meio de modelos generativos e restauração digital.
- **Acessibilidade e Descentralização**: Mapear pontos culturais, museus e ateliês com rotas e dados georreferenciados precisos.

---

## 2. Descrição dos Serviços e Módulos da Plataforma

A plataforma está organizada em 7 módulos funcionais integrados:

### Módulo 1: Feed Cultural e Acervo Social
- **Linha do Tempo Social**: Publicação de notícias, lançamentos, eventos carnavalescos e ensaios abertos.
- **Suporte Multimídia Completo**: Upload e reprodução nativa de vídeos (`.mp4`, `.webm`, `.mov`) com controles customizados e fotos em alta definição.
- **Interatividade**: Sistema de curtidas com feedback tátil, comentários moderáveis com fotos de perfil de usuários autenticados e contadores em tempo real.
- **Filtros e Categorias**: Segmentação de conteúdo por *Todos*, *Música*, *Eventos*, *História* e *Notícias*.

### Módulo 2: Diretório de Artistas e Agremiações
- **Perfis Oficiais**: Páginas dedicadas com minibio, fotos de capa/avatar, enlaces de redes sociais e catálogo de obras vinculadas.
- **Categorização Tradicional e Contemporânea**: Filtros por vertentes históricas:
  - *Frevo de Rua* (instrumental e enérgico)
  - *Frevo Canção* (lírico e vocal)
  - *Frevo de Bloco* (orquestras de pau e corda)
  - *Frevo Livre* (fusões contemporâneas e experimentais)
- **Gestão de Artistas**: Painel para que artistas autorizados possam submeter músicas, letras e partituras com workflow de aprovação pelo administrador.

### Módulo 3: Catálogo Musical e Repositório de Partituras
- **Acervo de Músicas**: Fichas catalográficas com áudio integrado, letras completas sincronizadas e ficha técnica (compositores, arranjadores, ano).
- **Visualizador e Download de Partituras**: Repositório de partituras em formato PDF e imagens em alta resolução, voltado para bandas sinfônicas, orquestras e estudantes de música.

### Módulo 4: Catálogo e Galeria de Passos de Frevo
- **Guia Pedagógico de Dança**: Catalogação detalhada dos passos fundamentais (ex: *Tesoura*, *Dobradiça*, *Ferrolho*, *Saci*, *Locomotiva*).
- **Demonstração em Vídeo e Imagem**: Reprodutor multimídia embutido nos cards com instruções de execução corporal, nível de dificuldade e origens na capoeira e ginástica.

### Módulo 5: Linha do Tempo Histórica do Frevo
- **Marcos Históricos Interativos**: Navegação cronológica desde as origens no século XIX, passando pela consagração no rádio, até o reconhecimento como Patrimônio Imaterial da Humanidade.
- **Documentação Ricamente Ilustrada**: Acervo de fotografias de época, vídeos documentais e transcrições de fatos marcantes.

### Módulo 6: Mapa Cultural Interativo (Geolocalização)
- **Mapeamento de Pontos Relevantes**: Espaços culturais, Paço do Frevo, sedes históricas de agremiações, ateliês de fantasias e monumentos em Recife e Olinda.
- **Geocodificação e Confirmação no Google Maps**: Validação inteligente de endereços digitados com preview em iframe e confirmação prévia para evitar localizações imprecisas.

### Módulo 7: Painel Administrativo e Gestão de Conteúdo (CMS)
- **Moderação Completa de Artistas**: Aprovação de novos perfis artísticos (migração instantânea para o Acervo Oficial), recusa fundamentada com parecer curatorial, disparo de e-mail formal e notificação interna direcionada exclusivamente ao solicitante.
- **Gestão de Foliões Cadastrados**: Visualização completa da base de foliões, artistas e administradores, com busca dinâmica por texto, filtragem por papel (Folião / Artista / Admin), listagem de contatos e modal detalhado de perfil.
- **Cadastramento Centralizado**: Ferramentas simplificadas para upload de mídias de posts, passos, marcos históricos e pontos do mapa.
- **Segurança e Controle de Acesso**: Gerenciamento rigoroso de permissões com base em papéis (`admin`, `artist`, `user`, `guest`) e auditoria de ações.

---

## 3. Matriz de Acessos por Cargo (RBAC) e Arquitetura de Notificações

### 3.1. Matriz de Permissões da Plataforma

| Funcionalidade / Módulo | Visitante (`guest`) | Folião (`user`) | Artista Oficial (`artist`) | Administrador (`admin`) |
| :--- | :---: | :---: | :---: | :---: |
| **Exploração Pública (Feed, Artistas, Partituras, Passos, História, Mapa)** | Leitura Pública | Leitura Pública | Leitura Pública | Leitura Pública |
| **Player de Áudio & Visualizador de Partituras** | Acesso Completo | Acesso Completo | Acesso Completo | Acesso Completo |
| **Curtir e Salvar Posts do Feed** | Bloqueado (Login) | Individual por Conta | Individual por Conta | Individual por Conta |
| **Favoritar Artistas & Agremiações** | Bloqueado (Login) | Individual por Conta | Individual por Conta | Individual por Conta |
| **Comentários no Feed** | Bloqueado (Login) | Liberado | Liberado | Liberado (com selo) |
| **Meu Perfil (Bio, Avatar, Handle, Redes)** | Bloqueado (Login) | Próprio Perfil | Próprio Perfil | Próprio Perfil |
| **Solicitar Perfil de Artista ("Quero ser Artista")** | Bloqueado (Login) | Liberado | Já Verificado | N/A (Admin) |
| **Acompanhar Status da Solicitação (Pendente/Recusada)** | N/A | Liberado no Perfil | Aprovado | N/A |
| **Publicar Músicas e Partituras (MP3 + PDF)** | Bloqueado | Bloqueado | Próprio Acervo | Todo o Acervo |
| **Cadastrar Álbuns / EPs e Shows** | Bloqueado | Bloqueado | Próprios Discos/Shows | Todos os Discos/Shows |
| **Cadastrar Novos Passos de Frevo** | Bloqueado | Bloqueado | Passos Autorizados | Gestão Completa |
| **Painel de Gestão CMS (`#view-admin-panel`)** | Bloqueado | Bloqueado | Bloqueado | Acesso Exclusivo |
| **Moderação de Artistas (Aprovar / Recusar com Parecer)** | Bloqueado | Bloqueado | Bloqueado | Todos os Administradores |
| **Gestão Global de Notícias, Marcos Históricos e Mapa** | Bloqueado | Bloqueado | Bloqueado | Todos os Administradores |

### 3.2. Arquitetura de Notificações e Isolamento de Dados por Usuário
- **Dados Isolados por Usuário (User-Scoped):**
  - Cada conta autenticada possui seu próprio conjunto de artistas favoritados (`favoriteArtistIds`), posts salvos (`savedPostIds`), posts curtidos (`likedPostIds`) e caixa de notificações pessoais.
- **Canal Compartilhado de Moderação para Administradores (`forRole: 'admin'`):**
  - Notificações de novos pedidos de conta artística pendentes chegam no sino de **todos os administradores** para que qualquer membro do comitê possa revisar.
- **Roteamento de Decisões de Curadoria (`forUserId: targetUserId`):**
  - Ao aprovar ou recusar um pedido, o parecer e a notificação são despachados **estritamente para a conta do usuário solicitante**, garantindo que nenhum administrador receba o parecer de recusa ou aprovação de outro usuário.
  - O administrador mantém sua caixa de notificações pessoal ativa e independente para interações sociais e comunicados diretos.

---

## 4. Estrutura de Telas e Interfaces

A experiência do usuário é baseada em uma arquitetura responsiva, estética refinada com tipografia elegante e sem uso de emojis:

1. **Header e Navegação Global**:
   - Logotipo oficial FrevAI / FrevIA, busca instantânea, seletor de abas (`Início`, `Artistas`, `Partituras`, `Passos`, `História`, `Mapa`), sino de notificações interativo e menu do usuário.
2. **Tela Principal (Home / Feed)**:
   - Banner de destaque com chamada cultural, barra de filtros rápidos, feed em cartões sociais ricos (com fotos/vídeos, avatares, reações e comentários) e coluna lateral com artistas recomendados.
3. **Tela de Artistas e Agremiações**:
   - Grade de cartões visuais com foto recortada, selos de categoria, biografia resumida e botão de acesso ao perfil completo.
4. **Modal de Perfil do Artista**:
   - Cabeçalho com capa e avatar, redes sociais, discografia, partituras disponibilizadas e botão de seguir.
5. **Tela do Catálogo de Partituras e Músicas**:
   - Tabela e listagem filtrável com prévia da partitura, player de áudio embutido e botão de download seguro.
6. **Tela de Passos de Frevo**:
   - Grid de cartões ilustrados com badges de dificuldade, descrição técnica e player de vídeo com passos executados por passistas.
7. **Tela da Linha do Tempo Histórica**:
   - Interface cronológica vertical interativa com fotos históricas, vídeos de época e contexto sociocultural de cada década.
8. **Tela do Mapa Cultural**:
   - Mapa dinâmico com marcadores personalizados, cartões laterais dos locais, rotas de acesso e detalhes de funcionamento.
9. **Modais de Autenticação e Conta**:
   - Modais para *Login*, *Cadastro de Usuário*, *Solicitação de Perfil de Artista* e fluxo de *Esqueci minha senha* via e-mail.
10. **Painel de Gestão Administrativa (Admin CMS)**:
    - Aba de aprovação de artistas (com modal de recusa fundamentada e envio de e-mail formal).
    - Gestores com upload direto de mídia (vídeos e fotos) para posts, passos, história e geocodificação no Google Maps.

---

## 4. Fases de Desenvolvimento

O projeto foi planejado sob metodologia ágil, com entregas contínuas e marcos bem definidos:

| Fase                                            | Escopo de Entrega                                                                                                            | Entregáveis Principais                                                               |
| :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| **Fase 1: Concepção, Arquitetura e Modelagem**  | Levantamento de requisitos, arquitetura de software, design tokens e modelagem relacional do banco de dados com RLS.         | Diagramas de entidade-relacionamento, setup do AWS e repositório Git.           |
| **Fase 2: UI/UX Design System e Identidade**    | Criação do Design System exclusivo para web/mobile, paleta de cores patrimoniais e eliminação total de emojis por SVGs.      | Guia de estilos (`design.md`), componentes base e interfaces responsivas.            |
| **Fase 3: Core Backend e Autenticação**         | Implementação de autenticação (email/senha, recuperação de senha), gatilhos de criação de perfil e Row Level Security (RLS). | Migrations SQL (`001` a `007`), regras de segurança e integração do AWS Client. |
| **Fase 4: Frontend e Módulos Públicos**         | Construção das interfaces do Feed, Artistas, Partituras, Passos, História e Mapa Cultural com renderização otimizada.        | Aplicação SPA/PWA funcional, reprodutor de vídeo nativo e integração do mapa.        |
| **Fase 5: Upload de Mídia e Painel CMS**        | Gestão de uploads diretos de vídeo/foto no Amazon S3, geocodificação de endereços e sistema de moderação.             | Modais administrativos com validação em tempo real e upload assíncrono.              |
| **Fase 6: Notificações, E-mails e Homologação** | Notificações internas, disparo de e-mails transacionais (aprovação/recusa) e testes de usabilidade e performance.            | Plataforma auditada, documentada e pronta para deploy de produção.                   |

---

## 5. Servidores, Nuvem e Serviços Utilizados (Plano Pago Básico)

A infraestrutura foi dimensionada para garantir **alta escalabilidade, segurança e custo operacional enxuto**, podendo ser implementada em duas arquiteturas de referência:

---

### Opção 1: Arquitetura Unificada AWS (Amazon Web Services) — *Recomendada para Centralização*

Nesta abordagem, a **AWS substitui a Vercel e o AWS em um único provedor**, consolidando hospedagem frontend, autenticação, banco de dados, storage de mídias e e-mails sob uma única conta, console e fatura unificada através do **AWS Amplify (Gen 2)**:

```text
GitHub (Controle de Versão)
   ↓
AWS Amplify (Hosting, CI/CD, SSL & CDN CloudFront)
   ↓
AWS Amplify Backend Ecosystem
   ├── AWS Cognito (Autenticação, Login, Recuperação de Senha)
   ├── Amazon DynamoDB / Aurora PostgreSQL (Banco de Dados Escalável)
   ├── Amazon S3 (Storage de Vídeos, Imagens e Partituras)
   ├── AWS Lambda (Funções Serverless de Negócio)
   └── Amazon SES (Simple Email Service para E-mails Transacionais)
   ↓
APIs Complementares (Google Maps Embed / OpenStreetMap)
```

#### Detalhamento dos Componentes AWS e Custos (Plano Pago Básico)

| Serviço AWS                                   | Função na Plataforma                                                                                                    | Equivalente Vercel/AWS | Modelo de Cobrança / Custo Estimado (Mensal)                             |
| :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :----------------------------------------------------------------------- |
| **AWS Amplify Hosting**                       | Hospedagem do frontend, deploy contínuo (CI/CD via Git), certificado SSL gratuito e distribuição global via CloudFront. | Vercel Pro                  | **~ US$ 5,00 a 10,00 / mês** *(Builds + transferências de dados)*        |
| **Amazon Cognito**                            | Autenticação completa de usuários e artistas, login social, JWT e fluxo de recuperação de senha por e-mail.             | Amazon Cognito               | **R$ 0,00** *(Gratuito até 50.000 usuários ativos mensais no Free Tier)* |
| **Amplify Data (DynamoDB / Aurora)**          | Banco de dados para perfis, artistas, posts, curtidas, comentários, passos históricos e mapa.                           | Amazon Aurora PostgreSQL Serverless v2         | **~ US$ 10,00 a 15,00 / mês** *(Pay-as-you-go sob demanda)*              |
| **Amazon S3 + CloudFront**                    | Armazenamento seguro de fotos, partituras em PDF e reprodutor de vídeos de alta definição com streaming rápido.         | Amazon S3            | **~ US$ 3,00 a 6,00 / mês** *(US$ 0,023/GB armazenado + tráfego)*        |
| **Amazon SES (Simple Email)**                 | Disparo de e-mails transacionais (aprovação/recusa de artistas, recuperação de senhas e comunicados).                   | Resend / SendGrid           | **~ US$ 1,00 a 2,00 / mês** *(Apenas US$ 0,10 a cada 1.000 e-mails)*     |
| **AWS Lambda**                                | Processamento de regras de negócios, webhooks e APIs privilegiadas sem servidor.                                        | AWS Edge Functions     | **R$ 0,00** *(Incluso no milhão de requisições gratuitas/mês)*           |
| **Domínio Oficial (.com.br / .art.br / .ai)** | Registro anual do domínio oficial do projeto.                                                                           | Registro.br                 | **R$ 40,00 / ano** *(~ R$ 3,33 / mês)*                                   |

- **Custo Médio Mensal AWS:** ~ **US$ 20,00 a US$ 35,00 / mês** *(~ R$ 115,00 a R$ 200,00 / mês)*.

##### Recursos Provisionados na Conta (ID: `196156785860` | Região: `sa-east-1`):
- **Aplicação Web Ativa (Amplify)**: [https://main.d4g55spy61el0.amplifyapp.com](https://main.d4g55spy61el0.amplifyapp.com) (App ID: `d4g55spy61el0`)
- **Bucket de Mídia (S3)**: `frevia-media-196156785860` (com políticas de leitura pública e CORS configuradas para upload)
- **Autenticação (Cognito)**: User Pool `sa-east-1_egnFYahtb` | Web Client ID `46t8rd0jlv6c3gmje9uj10s6c8`
- **Banco de Dados (DynamoDB)**: 11 tabelas criadas sob demanda (`frevai_profiles`, `frevai_artists`, `frevai_posts`, `frevai_songs`, `frevai_steps`, `frevai_history`, `frevai_map_points`, `frevai_artist_requests`, `frevai_notifications`, `frevai_post_comments`, `frevai_post_likes`)


---

### Arquitetura Oficial Consolidada: AWS Cloud (Provedor Exclusivo)

A plataforma **FrevAI** opera com infraestrutura centralizada e unificada exclusivamente na **Amazon Web Services (AWS)** (Região designada `sa-east-1` / `us-east-1` global), eliminando completamente a dependência de múltiplos provedores e faturas dispersas:

- **Hospedagem & CDN:** AWS Amplify Hosting
- **Autenticação:** Amazon Cognito User Pools (Email/Senha & Google OAuth 2.0)
- **Banco de Dados:** Amazon Aurora PostgreSQL Serverless v2 (escalabilidade dinâmica sob demanda)
- **Storage de Alta Performance:** Amazon S3 + CloudFront (Músicas, Partituras PDF, Vídeos e Imagens)
- **Serviços Serverless:** AWS Lambda + Amazon API Gateway
- **Comunicações Transacionais:** Amazon SES (Notificações e pareceres de moderação)
- **Motor de Áudio & Partituras (100% Gratuito & Ilimitado):** `FrevoAudioEngine` (Web Audio API para detecção de BPM e Tonalidade por Chromagrama Harmônico, gerador de estrofes/letras e exportador vetorial de partituras em PDF via jsPDF)

---

### Pipeline de Processamento de Áudio, Partitura e Letras (`FrevoAudioEngine`)

A plataforma implementa uma solução sem custos de API ou servidores GPU para atender à demanda de análise musical de arquivos MP3 enviados por artistas:
1. **Decodificação de Áudio NATIVA (Web Audio API):**
   - O navegador decodifica diretamente o arquivo de áudio (MP3, WAV, AAC) em um buffer PCM (`AudioBuffer`) através de `AudioContext.decodeAudioData()`.
2. **Cálculo de Andamento (BPM):**
   - Análise de energia RMS em janelas de 40ms, extração de picos de transientes rítmicos do frevo (surdo/tarol) e agrupamento modal de intervalos para estimativa precisa do andamento (110 a 170 BPM).
3. **Identificação da Tonalidade (Harmonic Chromagram):**
   - Correlação do espectro fundamental nas oitavas 3 a 5 (130Hz a 1200Hz) mapeando os 12 semitons cromáticos e elegendo o centro tonal predominante da orquestra (ex: Ré Maior, Fá Maior, Si Bemol Maior).
4. **Geração Poética de Letras / Estrofes:**
   - Montagem de estrutura estrófica (`[Introdução]`, `[Estrofe 1]`, `[Refrão]`, `[Estrofe 2]`, `[Clímax]`, `[Final]`) adaptada dinamicamente ao gênero do Frevo (Frevo de Rua, Frevo de Bloco ou Frevo Canção).
5. **Geração Vetorial da Partitura Oficial (PDF):**
   - Diagramação completa em PDF A4 de alta resolução via `jsPDF`, contendo cabeçalho institucional de salvaguarda, pautas musicais dinâmicas, clave de Sol, compasso 2/4 frevado, notas no tom identificado, letra e termo de autenticação para download e upload no Amazon S3.

---

### Comparativo Resumido das Soluções

| Critério | Opção 1: 100% AWS (Amplify + S3 + SES) | Opção 2: Vercel + AWS |
| :--- | :--- | :--- |
| **Faturamento** | Fatura e conta única (apenas AWS). | Múltiplas faturas (Vercel, AWS, Resend). |
| **Custo Mensal Básico** | **Mais econômico (~ R$ 120 a R$ 200 / mês)** por ser modelo sob demanda. | **Fixo inicial mais alto (~ R$ 350 a R$ 390 / mês)** devido aos planos Pro mínimos. |
| **Escalabilidade de Mídia** | Praticamente ilimitada via Amazon S3 + CloudFront. | Até 100 GB no plano Pro (expansível via add-ons). |
| **Gestão do Banco de Dados** | Console AWS / GraphQL / NoSQL ou Aurora. | Painel PostgreSQL nativo visual amigável (estilo planilha). |
| **E-mails Transacionais** | Nativo via Amazon SES com custo desprezível. | Requer provedor terceiro dedicado (Resend/SendGrid). |

> **Observação:** Durante a fase de homologação e MVP, ambas as opções contam com **níveis gratuitos (Free Tiers)** que permitem operar com custo de infraestrutura próximo de zero até o lançamento oficial no festival.
