# design.md — Design System da Plataforma Frevo

## 1. Direção visual

Criar uma identidade digital inspirada na energia visual do Frevo de Pernambuco.

A referência enviada apresenta uma composição de:
- faixas verticais/diagonais;
- ciano;
- verde;
- amarelo;
- laranja;
- vermelho;
- cards grandes;
- fotografias recortadas;
- tipografia pesada;
- sombras;
- composição editorial inclinada.

A plataforma deve preservar essa energia, porém com melhor hierarquia visual.

### Princípio

> **Frevo não significa usar todas as cores em todos os lugares.**

Usar cor intensa para criar ritmo e destaque, mantendo superfícies neutras para facilitar leitura.

---

# 2. Paleta

As cores abaixo são uma paleta **inspirada visualmente nas sombrinhas e na estética cromática do Frevo**, não devem ser tratadas como uma paleta oficial histórica.

## Cores principais

```css
--frevo-cyan: #16C7D9;
--frevo-green: #39D98A;
--frevo-yellow: #FFD928;
--frevo-orange: #FF8A00;
--frevo-red: #F0442E;
--frevo-pink: #F04FA3;
--frevo-purple: #7447E8;
```

## Neutros

```css
--ink: #171717;
--ink-soft: #383838;
--paper: #FFFDF8;
--surface: #FFFFFF;
--surface-soft: #F4F1EA;
--line: #DDD8CE;
--muted: #716E68;
```

## Uso

### Cyan
Para:
- navegação;
- links;
- tags;
- informações;
- elementos interativos.

### Green
Para:
- estados positivos;
- conteúdo publicado;
- destaques;
- chips;
- componentes relacionados à dança.

### Yellow
Para:
- chamadas;
- destaques;
- CTAs secundários;
- números.

### Orange
Para:
- ações principais;
- destaque de eventos;
- elementos de energia.

### Red
Para:
- alertas;
- ações destrutivas;
- destaque editorial;
- acentos fortes.

### Pink/Purple
Para:
- categorias;
- campanhas;
- conteúdos especiais;
- variações visuais.

### Regra de contraste

Nunca usar texto pequeno preto diretamente sobre vermelho/laranja/cyan sem verificar contraste.

Preferir:
- `--ink` em amarelo claro;
- `--surface` em vermelho/laranja;
- texto branco apenas quando o contraste for suficiente.

---

# 3. Gradientes

Gradientes podem ser usados em hero sections e cards especiais.

Exemplos:

```css
--gradient-frevo:
  linear-gradient(
    135deg,
    #16C7D9 0%,
    #39D98A 30%,
    #FFD928 55%,
    #FF8A00 75%,
    #F0442E 100%
  );
```

Não utilizar gradiente em todos os elementos.

---

# 4. Tipografia

## Display

Preferir:

**Bricolage Grotesque**

Uso:
- títulos;
- números;
- nomes de artistas;
- headlines;
- cards editoriais.

Pesos:
- 700;
- 800.

## Interface/body

Preferir:

**Plus Jakarta Sans**

Uso:
- textos;
- navegação;
- formulários;
- legendas;
- descrições.

Pesos:
- 400;
- 500;
- 600;
- 700.

## Regras

Títulos podem ser grandes e compactos.

Evitar:
- texto todo em caixa alta em parágrafos;
- fontes decorativas difíceis de ler;
- mais de duas famílias tipográficas;
- tracking excessivo.

---

# 5. Escala tipográfica

```text
Display: 48–72px
H1: 40–56px
H2: 32–40px
H3: 24–30px
H4: 20–24px
Body: 16–18px
Small: 13–14px
Caption: 12–13px
```

Mobile:

```text
Display: 40–48px
H1: 32–40px
H2: 26–32px
H3: 21–24px
Body: 16px
Small: 13–14px
```

---

# 6. Formas

Usar uma mistura de:
- cards retangulares;
- cantos arredondados;
- cortes diagonais;
- faixas verticais;
- círculos;
- stickers.

Border radius sugerido:

```css
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

Não aplicar border-radius gigante a absolutamente tudo.

---

# 7. Cards Frevo

O card é um dos elementos principais da identidade.

Estrutura:

```text
┌──────────────────────────┐
│ faixa colorida           │
│                          │
│  categoria               │
│                          │
│  TÍTULO GRANDE           │
│                          │
│       [foto sticker]     │
│                          │
│ descrição                │
│                          │
│ ação                     │
└──────────────────────────┘
```

Pode usar:
- faixa lateral;
- faixa diagonal;
- bloco de cor;
- imagem recortada;
- sombra.

### Importante

Não inclinar cards inteiros excessivamente.

Preferir:
- 2–6 graus apenas em elementos decorativos;
- conteúdo principal alinhado;
- leitura sempre confortável.

---

# 8. Stickers / imagens recortadas

Fotos de artistas podem aparecer como:
- círculo;
- círculo irregular;
- polaroid;
- recorte com borda branca.

Exemplo:

```css
.artist-sticker {
  border: 5px solid white;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,.16);
}
```

Não gerar recortes automáticos de pessoas sem uma imagem fornecida pelo CMS.

---

# 9. Sombras

Usar sombras físicas suaves:

```css
--shadow-card:
  0 12px 30px rgba(23, 23, 23, 0.12);

--shadow-floating:
  0 20px 50px rgba(23, 23, 23, 0.16);
```

Evitar sombras muito pretas.

---

# 10. Ícones

## Regra obrigatória

**Não utilizar emojis como ícones.**

Não usar:
- emoji de coração;
- emoji de mapa;
- emoji de dança;
- emoji de música;
- emoji de compartilhamento;
- emoji de usuário.

Todos os ícones devem ser SVG.

---

# 11. Linguagem dos SVGs

Criar um conjunto próprio de ícones inspirado no Frevo.

Características:
- SVG inline ou arquivos SVG;
- viewBox `0 0 24 24` ou `0 0 32 32`;
- stroke arredondado;
- espessura 1.8–2.2;
- poucas formas;
- aparência geométrica;
- boa leitura em 20–32px.

## Ícones necessários

### Navegação

- Home
- Feed
- Artists
- Explore
- Profile
- Search
- Menu
- Arrow Left
- Arrow Right
- Close

### Social

- Heart
- Comment
- Share
- Bookmark
- More
- User Plus
- Users

### Música

- Music Note
- Musical Notes
- Playlist
- Sheet Music
- Download
- External Link

### Frevo

Criar ícones customizados:
- sombrinha de Frevo;
- passo de dança estilizado;
- sombrinha aberta;
- sapato/passada;
- bloco/cortejo;
- orquestra;
- trompete;
- mapa cultural.

### Conteúdo

- Calendar
- News
- Image
- Video
- File
- Edit
- Publish
- Draft
- Check
- Warning
- Trash

### Mapa

- Map
- Pin
- Route
- Landmark
- Historical Place

---

# 12. Ícone de sombrinha

Criar um SVG proprietário simples.

Características:
- canopy semicircular segmentado;
- haste;
- pequena alça;
- geometria limpa;
- reconhecível em 24px.

Não desenhar uma sombrinha extremamente detalhada.

Versão monocromática para interface.

Versão multicolorida para hero/branding.

---

# 13. Logo

Criar uma marca tipográfica simples para a plataforma.

Evitar copiar logotipos oficiais de instituições.

Conceito:
- palavra relacionada ao Frevo;
- tipografia pesada;
- pequeno símbolo de sombrinha;
- possibilidade de versão horizontal e compacta.

O nome final deve ser facilmente alterável no código.

Usar SVG para o símbolo.

---

# 14. Navegação mobile

Bottom navigation fixa:

```text
[SVG] Início
[SVG] Feed
[SVG] Artistas
[SVG] Explorar
[SVG] Perfil
```

Altura aproximada:
- 64–76px;
- safe area para iPhone;
- fundo branco;
- borda superior discreta.

Estado ativo:
- ícone;
- texto;
- pequeno acento colorido.

Não depender somente da cor.

---

# 15. Explorar

Criar uma tela central com quatro blocos:

```text
MÚSICAS
PASSOS
HISTÓRIA
MAPA
```

Cada bloco pode ter uma cor Frevo diferente.

Exemplo:
- músicas: cyan;
- passos: green;
- história: yellow;
- mapa: orange.

---

# 16. Feed

No feed, variar as cores por categoria.

Exemplo:

```text
Evento      → orange
Notícia     → cyan
Música      → yellow
Partitura   → green
Artista     → pink
História    → purple
```

Não usar todas as cores ao mesmo tempo.

---

# 17. Botões

Primary:

```text
background: orange
color: ink
border-radius: 14–18px
font-weight: 700
```

Secondary:
- branco;
- borda escura;
- ou fundo amarelo.

Ghost:
- transparente;
- texto escuro.

Destructive:
- vermelho.

Todos devem ter:
- hover;
- active;
- focus-visible;
- disabled.

---

# 18. Microinterações

Usar pequenas animações:
- card entrando;
- hover;
- like;
- expansão de bottom sheet;
- troca de filtro;
- upload.

Duração:
- 120–240ms.

Para usuários com:

```css
@media (prefers-reduced-motion: reduce)
```

reduzir/desativar animações.

---

# 19. Fundo

Principal:

`#FFFDF8`

Usar pequenas formas geométricas em baixa opacidade.

Pode criar:
- diagonais;
- arcos;
- segmentos;
- padrões inspirados em sombrinhas.

Evitar textura pesada.

---

# 20. Desktop

Desktop pode usar:
- sidebar;
- grid;
- cards de múltiplas colunas;
- mapa maior;
- dashboard com tabelas.

Mobile continua sendo a referência principal.

---

# 21. Responsividade

Breakpoints sugeridos:

```text
360px
390px
480px
768px
1024px
1280px
1440px
```

Cards:
- mobile: 1 coluna;
- tablet: 2;
- desktop: 3–4.

---

# 22. Estados

Todo componente que depende de dados deve ter:

### Loading
Skeleton.

### Empty
Ilustração SVG simples + texto.

### Error
Mensagem objetiva + ação de tentar novamente.

### Success
Feedback visual curto.

Nunca deixar tela vazia sem explicação.

---

# 24. Padrões de Modais e Zero Emojis (Diretrizes Oficiais)

### Regra Zero Emojis
- **Proibição Estrita:** Nunca utilizar emojis em botões, modais, textos de notificação ou elementos visuais da plataforma.
- **Padrão SVG:** Utilizar exclusivamente ícones SVG profissionais e consistentes (estilo Feather/Heroicons/Lucide) integrados com Tailwind (`w-4 h-4`, `w-5 h-5`, etc.).

### Modais e Diálogos da Plataforma
- **Superfície e Bordas:** Container com `bg-white` ou `bg-surface-soft`, bordas sutis `border border-gray-200`, cantos `rounded-2xl` e elevação `shadow-2xl`.
- **Cabeçalho:** Ícone SVG de contexto em badge com fundo temático (`w-10 h-10 rounded-2xl flex items-center justify-center`), título sem serifa com `font-display font-bold text-ink` e subtítulo informativo em `text-xs text-muted`.
- **Ações:**
  - Botão Primário/Aprovação: `btn-primary` ou `btn-green`.
  - Botão Destrutivo/Recusa: `btn bg-rose-600 hover:bg-rose-700 text-white rounded-xl`.
  - Botão Cancelar: `btn btn-outline rounded-xl`.
- **Notificação e Transparência:** Todas as ações de moderação (como a recusa de solicitações) devem fornecer feedback claro ao usuário, tanto via notificação na plataforma (`DB.notifications`) quanto por e-mail formal de orientação.

### Uploads de Mídia no CMS (Posts, Passos e História)
- Componente de upload unificado com dropzone de arquivo (`handleAdminMediaUpload`), suporte a imagens e vídeos (MP4, WEBM), preview interativo imediato e integração ao Amazon S3.
- Card de exibição dinâmico: renderiza `<video controls>` caso a mídia seja um vídeo ou `<img>` em formato imersivo.

### Busca e Confirmação de Endereço no Google Maps
- Os cadastros de locais culturais exigem resolução de endereço via geocodificação real (`geocodeAddress`), apresentando um mini-mapa interativo embutido do Google Maps para que o usuário valide a localização antes da confirmação e persistência das coordenadas.

---

# 25. Diretriz final

A estética deve transmitir:

**Pernambuco + Frevo + música + dança + cultura + comunidade + tecnologia.**

O resultado não deve parecer:
- banco;
- SaaS corporativo genérico;
- template Bootstrap;
- carnaval genérico;
- aplicativo infantil.

Deve parecer uma plataforma cultural contemporânea, vibrante e editorial.
