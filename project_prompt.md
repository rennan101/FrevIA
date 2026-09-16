# Prompt mestre — Plataforma Web Mobile Responsiva de Cultura do Frevo

## Contexto

Desenvolva uma plataforma web **mobile-first, responsiva e com experiência de aplicativo** dedicada à cultura do Frevo de Pernambuco.

A referência visual anexada nesta conversa mostra uma interface social/mobile com:
- cartões grandes;
- cores vibrantes em faixas;
- tipografia pesada;
- avatares/fotos recortados como stickers;
- sombras suaves;
- elementos inclinados/diagonais;
- navegação e conteúdo pensados primeiro para telas pequenas.

**Use essa referência como inspiração de linguagem visual, não como cópia.** A plataforma deve ficar mais organizada, acessível, contemporânea e adequada a uma aplicação cultural real.

Leia e siga obrigatoriamente:
1. `design.md` — sistema visual, cores, tipografia, ícones SVG, componentes e responsividade.
2. `stack.md` — arquitetura, Supabase, banco de dados, autenticação, storage, RLS e hospedagem.

---

# Objetivo do produto

Criar um portal social e cultural que conecte público, artistas e gestores do Frevo.

A aplicação possui duas áreas:

## Área pública

O visitante pode:
- explorar o Feed de eventos/notícias;
- curtir, comentar e compartilhar publicações;
- visualizar letras e partituras publicadas;
- navegar pelos artistas;
- abrir o perfil de um artista;
- seguir artistas;
- acessar músicas/partituras do artista;
- aprender passos do Frevo;
- consultar a história do Frevo;
- explorar um mapa de pontos turísticos/históricos relacionados ao Frevo.

## Área autenticada

### Administrador/Gestor
Pode:
- gerenciar todo o conteúdo;
- criar, editar, publicar e arquivar posts;
- moderar comentários;
- cadastrar e editar artistas;
- autorizar/revogar artistas que podem editar músicas e partituras;
- revisar conteúdo enviado por artistas;
- gerenciar passos;
- gerenciar capítulos/itens da história do Frevo;
- gerenciar pontos do mapa;
- visualizar métricas básicas;
- gerenciar usuários e permissões.

### Artista
Pode:
- editar o próprio perfil;
- editar nome, foto/avatar, minibio e links sociais;
- cadastrar músicas;
- adicionar letras;
- enviar partituras;
- salvar rascunhos;
- enviar músicas/partituras para revisão;
- acompanhar status de publicação.

Um artista **somente poderá editar letras/partituras se estiver explicitamente autorizado pelo administrador**.

Quando uma música/partitura de artista for publicada:
1. aparece no perfil do artista;
2. torna-se pesquisável;
3. pode gerar automaticamente uma publicação no Feed;
4. deve exibir claramente o artista responsável.

---

# Requisitos funcionais

## 1. Landing / Home

Criar uma Home que funcione como porta de entrada cultural.

Seções:
- destaque principal;
- posts/eventos recentes;
- artistas em destaque;
- músicas/partituras recentes;
- passos do Frevo;
- chamada para conhecer a história;
- chamada para explorar o mapa;
- footer institucional.

A Home deve parecer um produto cultural vivo, não um site institucional tradicional.

---

# 2. Feed social

Criar um feed inspirado em redes sociais, mas com identidade própria.

Tipos de publicação:
- evento;
- notícia;
- música publicada;
- partitura;
- conteúdo cultural;
- destaque de artista.

Cada publicação deve possuir:
- autor/organização;
- avatar;
- data;
- título;
- imagem opcional;
- texto;
- tags;
- contador de curtidas;
- contador de comentários;
- botão compartilhar;
- botão salvar opcional;
- estado de conteúdo publicado.

Interações:
- like/unlike;
- comentário;
- excluir próprio comentário;
- moderação pelo administrador;
- compartilhar usando Web Share API quando disponível;
- fallback para copiar link.

No mobile, os cards devem ocupar quase toda a largura disponível.

---

# 3. Artistas

Criar:
- lista/grid de artistas;
- busca;
- filtros;
- cards de artistas;
- perfil individual.

Card:
- foto/avatar recortado;
- nome;
- pequeno resumo;
- número de músicas;
- indicador de artista verificado/autorizado quando aplicável.

Perfil:
- capa;
- avatar;
- nome;
- minibio;
- links sociais funcionais;
- seguidores;
- botão seguir/deixar de seguir;
- músicas;
- letras;
- partituras;
- publicações relacionadas.

Não inventar dados de artistas.

---

# 4. Letras e partituras

Criar catálogo pesquisável.

Filtros:
- artista;
- título;
- tipo;
- gênero/categoria;
- mais recentes;
- destaque.

Página da música:
- título;
- artista;
- letra;
- partitura;
- imagem/capa;
- informações adicionais;
- ações de compartilhar;
- link para perfil do artista.

Partitura:
- permitir imagem/PDF conforme configuração;
- usar Supabase Storage;
- mostrar preview quando possível;
- botão para abrir o arquivo;
- não expor URLs privadas diretamente quando o arquivo exigir controle de acesso.

---

# 5. Passos do Frevo

Criar uma biblioteca visual de passos.

Cada passo:
- nome;
- imagem ou GIF;
- descrição;
- instruções;
- nível opcional;
- categoria opcional;
- conteúdo passo a passo.

Interface:
- cards grandes;
- filtros;
- busca;
- visualização detalhada;
- mídia em destaque;
- instruções legíveis.

Evitar animações que possam causar desconforto ou reduzir acessibilidade.

---

# 6. História do Frevo

Criar uma experiência editorial.

Estrutura sugerida:
- introdução;
- linha do tempo;
- períodos;
- personagens e manifestações;
- textos;
- imagens;
- referências/fontes;
- conteúdo relacionado.

O administrador deve conseguir editar os conteúdos pelo painel.

Não gerar fatos históricos automaticamente como se fossem verdadeiros. O CMS deve permitir inserir fonte/referência.

---

# 7. Mapa

Criar mapa cultural com pontos.

Cada ponto possui:
- nome;
- descrição;
- endereço;
- latitude;
- longitude;
- imagem;
- período histórico opcional;
- categoria;
- fonte/referência.

Ao clicar:
- abrir popup/bottom sheet;
- mostrar foto;
- nome;
- resumo;
- endereço;
- botão para rota externa.

No mobile, o mapa deve ocupar a maior parte da tela e usar bottom sheets para detalhes.

---

# 8. Painel administrativo

Criar dashboard protegido.

Rotas sugeridas:

`/admin`

`/admin/dashboard`

`/admin/posts`

`/admin/artists`

`/admin/songs`

`/admin/steps`

`/admin/history`

`/admin/map`

`/admin/comments`

`/admin/users`

`/admin/settings`

Dashboard:
- publicações;
- músicas;
- artistas;
- conteúdos pendentes;
- comentários pendentes;
- visualizações/likes;
- atividade recente.

CMS:
- tabela desktop;
- cards/listas no mobile;
- busca;
- filtros;
- edição;
- publicação;
- arquivamento;
- confirmação antes de ações destrutivas.

---

# 9. Painel do artista

Rotas:

`/artist`

`/artist/profile`

`/artist/songs`

`/artist/songs/new`

`/artist/songs/:id/edit`

Dashboard:
- resumo do perfil;
- músicas publicadas;
- rascunhos;
- itens aguardando revisão;
- status.

O artista nunca deve conseguir editar dados de outro artista.

---

# Autenticação

Usar Supabase Auth conforme `stack.md`.

Papéis:
- `admin`
- `artist`
- `user`

Regras:
- visitante não autenticado pode navegar no conteúdo público;
- usuário autenticado pode curtir, comentar e seguir;
- artista só acessa seu próprio painel;
- admin acessa o CMS completo;
- autorização para edição de letras/partituras deve ser uma permissão explícita no banco;
- nunca confiar somente no frontend para autorização;
- aplicar RLS no Supabase.

---

# Arquitetura de frontend

Preferir:
- Next.js;
- TypeScript;
- App Router;
- Tailwind CSS;
- componentes reutilizáveis;
- Supabase;
- React Hook Form;
- Zod;
- biblioteca de mapas;
- Lucide apenas se os ícones puderem ser customizados ou substituídos pelos SVGs do sistema visual.

Caso utilize outra biblioteca, justificar no código/documentação.

Estrutura sugerida:

```text
app/
  (public)/
    page.tsx
    feed/
    artists/
    artists/[slug]/
    songs/
    songs/[slug]/
    steps/
    steps/[slug]/
    history/
    map/
  auth/
    login/
    callback/
  artist/
    page.tsx
    profile/
    songs/
  admin/
    page.tsx
    posts/
    artists/
    songs/
    steps/
    history/
    map/
    comments/
    users/

components/
  ui/
  feed/
  artists/
  songs/
  steps/
  history/
  map/
  admin/
  artist/

lib/
  supabase/
  auth/
  validations/
  utils/

types/
```

---

# Experiência mobile

Mobile não deve ser apenas uma versão reduzida do desktop.

Criar:
- bottom navigation;
- áreas clicáveis de no mínimo aproximadamente 44px;
- cards adaptativos;
- bottom sheets;
- sticky headers quando fizer sentido;
- upload otimizado;
- compressão/preview de imagens;
- loading skeletons;
- estados vazios;
- estados de erro;
- feedback de sucesso;
- suporte a instalação como PWA, se viável.

Bottom navigation pública sugerida:

`Início | Feed | Artistas | Explorar | Perfil`

Dentro de `Explorar`:
- Músicas
- Passos
- História
- Mapa

Não usar emojis como ícones.

---

# Acessibilidade

Implementar:
- HTML semântico;
- navegação por teclado;
- foco visível;
- labels;
- aria-label quando necessário;
- contraste adequado;
- textos alternativos;
- suporte a `prefers-reduced-motion`;
- tamanho de fonte responsivo;
- não depender somente de cor para indicar estado;
- botões com texto ou tooltip acessível;
- modais/bottom sheets com foco gerenciado.

---

# Performance

Prioridades:
- imagens responsivas;
- lazy loading;
- `next/image`;
- compressão;
- evitar JS desnecessário;
- skeletons;
- paginação/infinite scroll com cuidado;
- cache de conteúdo público;
- queries Supabase eficientes;
- índices no banco;
- não carregar o mapa inteiro até a seção ser acessada.

---

# Segurança

Nunca:
- colocar service role key no frontend;
- confiar em `role` enviado pelo cliente;
- permitir upload irrestrito;
- permitir HTML arbitrário em conteúdo editorial;
- expor arquivos privados sem necessidade.

Validar:
- tamanho de arquivo;
- MIME type;
- extensão;
- conteúdo;
- permissões;
- campos obrigatórios.

Sanitizar conteúdo rico.

---

# SEO

Implementar:
- metadata por página;
- Open Graph;
- URLs amigáveis;
- sitemap;
- robots.txt;
- dados estruturados quando aplicável;
- títulos e descrições específicos;
- páginas de artistas e músicas indexáveis quando públicas.

---

# Conteúdo

Usar dados mockados somente para desenvolvimento.

Criar uma camada de seed separada.

Não inventar:
- biografias reais;
- músicas reais;
- letras;
- partituras;
- fatos históricos;
- endereços;
- nomes de artistas.

Use placeholders claramente marcados como conteúdo demonstrativo.

---

# Design

A identidade visual deve seguir `design.md`.

Características principais:
- Frevo contemporâneo;
- energia;
- cores intensas;
- formas geométricas;
- diagonais;
- camadas;
- stickers;
- tipografia expressiva;
- fundo claro;
- alto contraste;
- aparência editorial/social;
- acabamento premium.

Não transformar a interface em um carnaval visual caótico.

A regra é:

**energia no componente + organização no layout.**

---

# Entregáveis

Implementar:

1. projeto completo;
2. frontend responsivo;
3. autenticação;
4. banco Supabase;
5. migrations SQL;
6. RLS;
7. Storage;
8. seed;
9. CMS administrativo;
10. painel de artista;
11. Feed social;
12. catálogo de músicas;
13. biblioteca de passos;
14. história;
15. mapa;
16. documentação de instalação;
17. `.env.example`;
18. README;
19. testes básicos;
20. estados de loading/error/empty.

---

# Critérios de aceite

Antes de considerar o projeto concluído, verificar:

- [ ] funciona em 360px de largura;
- [ ] funciona em 390px;
- [ ] funciona em 768px;
- [ ] funciona em desktop;
- [ ] nenhuma tela exige zoom horizontal;
- [ ] autenticação funciona;
- [ ] RLS impede acesso indevido;
- [ ] artista não edita outro artista;
- [ ] somente artistas autorizados editam letras/partituras;
- [ ] admin pode publicar;
- [ ] música publicada aparece no perfil;
- [ ] música publicada pode gerar post no feed;
- [ ] likes persistem;
- [ ] comentários persistem;
- [ ] follows persistem;
- [ ] compartilhamento funciona;
- [ ] upload funciona;
- [ ] imagens possuem alt text;
- [ ] ícones são SVG;
- [ ] nenhum emoji é usado como ícone;
- [ ] mapa funciona;
- [ ] conteúdo histórico é editável;
- [ ] passos são editáveis;
- [ ] SEO básico implementado;
- [ ] `.env.example` não contém segredos;
- [ ] documentação explica deploy.

---

# Ordem de implementação

Não tentar construir tudo de uma vez.

Fase 1:
- setup;
- design system;
- layout;
- Supabase;
- auth;
- banco;
- RLS.

Fase 2:
- Home;
- Feed;
- Artistas;
- Perfil.

Fase 3:
- músicas;
- letras;
- partituras;
- autorização de artistas.

Fase 4:
- passos;
- história;
- mapa.

Fase 5:
- CMS;
- painel de artista;
- moderação.

Fase 6:
- SEO;
- performance;
- acessibilidade;
- PWA;
- testes;
- deploy.

Ao finalizar cada fase, valide a aplicação antes de continuar.
