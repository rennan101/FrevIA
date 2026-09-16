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

---

## ⚡ Integração com o Supabase

A aplicação conecta-se diretamente ao seu projeto **Supabase** (PostgreSQL + Auth + Storage).

### 1. Criar as Tabelas no Supabase (SQL Editor)
No painel do seu projeto Supabase, acesse **SQL Editor > New Query**, copie o conteúdo de [`supabase/migrations/001_initial_schema.sql`](supabase/migrations/001_initial_schema.sql) e clique em **Run**.

O script criará automaticamente:
- Tabelas: `profiles`, `artists`, `songs`, `posts`, `comments`, `post_likes`, `map_points`, `frevo_steps`, `history_entries`.
- Políticas de Segurança (Row Level Security - RLS).
- Dados iniciais do patrimônio e mestres do Frevo.

### 2. Conectar as Chaves na Aplicação
Você pode conectar de duas formas:
1. **Pela própria interface do App:** Clique no botão **"Conectar Supabase"** no topo da página e cole sua `Project URL` e `Anon Public Key`.
2. **Via Arquivo:** Edite o arquivo [`js/config.js`](js/config.js) inserindo sua URL e Anon Key.

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
