# FrevIA — Plataforma Cultural e Rede Social do Frevo

> **Salvaguarda, Memória e Conexão da Cultura do Frevo de Pernambuco**

FrevIA é uma Progressive Web App (PWA) e Single Page Application (SPA) standalone, projetada para conectar artistas, mestres, foliões e pesquisadores do Frevo, integrada ao banco de dados e Storage do **Supabase**.

---

## 🌟 Funcionalidades

- **Feed Cultural Imersivo:** Publicações, novidades, histórias em carrossel e comentários.
- **Hub Explorar o Frevo:** Acesso rápido ao Mapa Cultural, Passos de Dança Tradicionais e Linha do Tempo Histórica.
- **Sessão de Artistas & Partituras (Estilo Apple Music):** Barra de busca em tempo real para pesquisar artistas, agremiações e partituras por gênero.
- **Perfil do Artista:**
  - Upload real de foto de perfil com preview em tempo real;
  - Gerenciamento de múltiplos links de redes sociais;
  - Abas exclusivas: **Partituras / Obras** e **Itens Salvos**;
  - Ação rápida de contato direto via e-mail/telefone.
- **Mapa do Frevo Expansível:** Visualização do mapa interativo embutido direto no app + redirecionamento para o Google Maps.
- **Suporte PWA Completo:** Banner automático de instalação para iOS (Safari) e Android (Chrome).
- **Sem Emojis / Design Profissional:** 100% estruturado com ícones vetoriais SVG e tipografia moderna (*Bricolage Grotesque* & *Plus Jakarta Sans*).
- **Diretrizes e Regras de Desenvolvimento:** Consulte o [`GEMINI.md`](GEMINI.md) e o [`design.md`](design.md) para regras de modais, arquitetura e padrão Zero Emojis.

---

## ⚡ Infraestrutura e Serviços em Nuvem (AWS)

A aplicação FrevAI opera de forma nativa e unificada na infraestrutura da **Amazon Web Services (AWS)** (Região `sa-east-1` - São Paulo):

1. **Hospedagem & CI/CD**: [AWS Amplify Hosting](https://main.d4g55spy61el0.amplifyapp.com) (App ID: `d4g55spy61el0`).
2. **Autenticação de Usuários & Artistas**: Amazon Cognito User Pools (`sa-east-1_egnFYahtb`), com suporte nativo a Login/Cadastro por E-mail e Google OAuth 2.0.
3. **Mídias, Áudios & Partituras**: Amazon S3 (`frevia-media-196156785860`), para upload e streaming de áudios (MP3), partituras em PDF, fotos e vídeos.
4. **Banco de Dados Relacional**: Amazon Aurora PostgreSQL Serverless v2 (`sa-east-1`), garantindo escalabilidade automática sob demanda.
5. **Configurações Centralizadas**: Todas as variáveis e endpoints são configurados em [`js/config.js`](js/config.js).

---

## 🚀 Como Executar Localmente

Como o projeto é uma SPA standalone, você pode abrir diretamente com qualquer servidor estático ou Live Server:

```bash
# Opção 1: Usando npm / serve
npm run dev

# Opção 2: Usando Python
python3 -m http.server 3000

# Opção 3: Usando a extensão Live Server do VS Code / Antigravity
# Abra index.html e inicie o Live Server
```

Acesse em: `http://localhost:3000`
