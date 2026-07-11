---
name: "Mundo da Moda"
description: "Site institucional da loja Mundo da Moda — Miguelópolis-SP. Vitrine digital com identidade visual derivada da fachada real."
colors:
  preto-fachada: "#16130F"
  vermelho-toldo: "#C81E1E"
  dourado-script: "#C9A24B"
  amarelo-calcada: "#F2C230"
  branco-parede: "#F7F5F2"
typography:
  display:
    fontFamily: "'Playball', 'Great Vibes', cursive"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Work Sans', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0"
  full: "9999px"
spacing:
  section: "clamp(4rem, 10vw, 6rem)"
  gutter: "clamp(1rem, 4vw, 2rem)"
components:
  button-primary:
    backgroundColor: "{colors.dourado-script}"
    textColor: "{colors.preto-fachada}"
    typography: "label"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.amarelo-calcada}"
  button-whatsapp:
    backgroundColor: "#25D366"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-whatsapp-hover:
    backgroundColor: "#1ea952"
---

# Design System: Mundo da Moda

## 1. Overview

**Creative North Star: "A Fachada Viva"**

O sistema visual é uma transposição digital da fachada real da loja em Miguelópolis-SP. Cada decisão de cor, tipografia e layout deriva diretamente do que já existe fisicamente na Av. Yoshi Nomiyama, 734 — o toldo vermelho, o letreiro dourado em script, o fundo preto fosco, o piso amarelo demarcado. Não é uma paleta "escolhida"; é uma paleta **herdada** da identidade que a loja já construiu e que seus clientes já reconhecem.

**Key Characteristics:**
- Paleta Committed: preto domina ~40% da superfície, vermelho ~15%, dourado/amarelo como acentos
- Combinação ousada e comercial — energia de loja popular vibrante, não boutique minimalista
- Tipografia: script display para nome da marca (uso pontual), sans-serif para corpo
- Sem gradientes décor, sem glassmorphism, sem pastel
- Hero: imagem pura do selo bordado dourado em tela cheia, sem overlay

Este sistema rejeita explicitamente: paletas pastel de "boutique feminina" genérica, templates de e-commerce de estoque, fundo creme + serifada + terracota, texto com gradiente, glassmorphism, cards aninhados, e o selo bordado como fundo com overlay escuro.

## 2. Colors

Paleta de 5 cores exatas, extraídas diretamente da fachada real e da parede do estúdio de fotos da loja.

### Primary

- **Vermelho Toldo** (#C81E1E): Cor de assinatura. Usada na faixa superior, nos ícones dos cards de diferenciais, nas divisórias de seção. É a cor que grita "Mundo da Moda" de longe — assim como o toldo real.
- **Dourado Script** (#C9A24B): Cor do texto do logo/selo real. Usada em títulos de seção, no nome da marca (display), e no botão CTA primário. Transmite o calor e a elegância do letreiro físico.

### Secondary

- **Amarelo Calçada** (#F2C230): Acento vibrante derivado do piso demarcado da calçada. Usado nas estrelas de avaliação, no hover do CTA, e em detalhes que precisam de destaque máximo. Nunca como cor de fundo de grandes áreas.

### Neutral

- **Preto Fachada** (#16130F): Fundo dominante. Tom exato do letreiro da fachada — não é preto puro (#000), tem um leve calor. Usado no hero, nos cards de diferenciais, e como cor de fundo principal do site.
- **Branco Parede** (#F7F5F2): Tom da parede texturizada onde as fotos de modelo são produzidas. Usado como fundo de seções alternadas para quebrar o preto e dar respiro visual. Nunca como branco puro (#FFF).

### Named Rules

**The Fachada Rule.** Toda cor usada no site tem correspondência direta com um elemento físico da loja. Nenhuma cor é inventada ou escolhida por tendência.

**The Two-Background Rule.** Seções alternam entre preto-fachada e branco-parede. Nunca três fundos diferentes consecutivos. O ritmo binário ecoa a fachada (preto) e o estúdio (branco).

## 3. Typography

**Display Font:** Playball (com fallback para Great Vibes, cursive)
**Body Font:** Work Sans (com fallback para system-ui, sans-serif)

**Character:** Uma script display fluida e elegante que ecoa o letreiro dourado da fachada, combinada com uma sans-serif geométrica e legível para o corpo — calor com clareza, personalidade com funcionalidade.

### Hierarchy

- **Display** (400, clamp(3rem, 8vw, 6rem), 1.1): Nome da marca "Mundo da Moda". Uso exclusivo — nunca em subtítulos, corpo, ou labels.
- **Headline** (700, clamp(1.875rem, 5vw, 2.5rem), 1.2): Títulos de seção (h2). Sans-serif bold.
- **Title** (600, 1.25rem, 1.3): Títulos de cards e subseções.
- **Body** (400, 1rem, 1.6): Texto corrido. Max-width 65ch. Cor: branco-parede/70 sobre preto, preto-fachada/70 sobre branco.
- **Label** (600, 0.875rem, 0.1em, uppercase): Kickers de seção, badges, navegação.

### Named Rules

**The Script Restriction Rule.** A fonte script (Playball) é usada exclusivamente no nome da marca "Mundo da Moda" e em nenhum outro lugar. Nunca em parágrafos, subtítulos, botões, ou navegação.

## 4. Elevation

Sistema majoritariamente plano. Sem sombras em cards ou containers estáticos. A profundidade é criada por:
- Contraste de cores entre seções (preto vs branco-parede)
- A faixa vermelha horizontal como elemento de separação
- O selo bordado no hero como textura natural (profundidade do bordado real)

**Exceções:**
- Botão WhatsApp flutuante: sombra sutil (`0 4px 12px rgba(0,0,0,0.3)`) apenas para indicar elevação sobre o conteúdo
- Imagens: `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5)` para destacar fotos sobre fundos

### Named Rules

**The Flat-By-Default Rule.** Superfícies são planas em repouso. Elevação (sombra) aparece apenas no botão flutuante de WhatsApp e em imagens destacadas.

## 5. Components

### Buttons

- **Shape:** CTA primário: sem borda arredondada (0). WhatsApp: totalmente arredondado (9999px).
- **Primary (CTA Dourado):** Fundo dourado-script, texto preto-fachada, padding 1rem 2rem, uppercase, tracking-wide, font-weight bold.
- **Hover Primary:** Fundo transita para amarelo-calcada. Transição ease-out 300ms.
- **Secondary (Outline):** Borda branco-parede/20, texto branco-parede/70. Hover: texto branco, borda dourado-script/40.
- **WhatsApp Flutuante:** Fundo #25D366, ícone + texto "WhatsApp", fixo no canto inferior direito, z-index 50.

### Section Dividers
- Linha horizontal de 1px de altura, 6rem de largura, cor vermelho-toldo. Centralizada.
- Faixa vermelha (stripe): gradiente vertical de 3-4px de altura, do vermelho-toldo ao tom mais escuro.

### Cards (Diferenciais)
- Fundo preto-fachada. Sem borda. Sem sombra. Sem border-radius.
- Ícone em caixa vermelha (14×14) no topo.
- Título em dourado-script.
- Corpo em branco-parede/60.

### Hero
- Imagem full-screen do selo bordado (hero1.jpeg). Sem overlay. Sem texto sobreposto.
- Apenas indicador de scroll (seta para baixo) no canto inferior.
- Altura: 100vh (min-height).

### Navigation
- Site de página única, sem nav persistente. Navegação por scroll.
- Links externos: Instagram, Facebook, WhatsApp — todos com target _blank.

## 6. Do's and Don'ts

### Do:
- **Do** usar a paleta exata de 5 cores derivadas da fachada real: preto-fachada #16130F, vermelho-toldo #C81E1E, dourado-script #C9A24B, amarelo-calcada #F2C230, branco-parede #F7F5F2
- **Do** alternar seções entre preto-fachada e branco-parede para criar ritmo visual
- **Do** usar a fonte script (Playball) exclusivamente no nome da marca
- **Do** usar a foto de conteúdo real (1.jpg) e as fotos do Instagram/Facebook da loja no carrossel/galeria
- **Do** usar o selo bordado (hero0.jpeg) como elemento pontual: badge, ícone de seção, ou decoração discreta
- **Do** manter o botão WhatsApp flutuante sempre visível no canto inferior direito

### Don't:
- **Don't** usar paleta pastel "boutique feminina" genérica — a marca já rejeitou isso ao escolher preto+vermelho+dourado+amarelo na própria fachada
- **Don't** usar templates genéricos de e-commerce de estoque (produtos "Trendy/Stylish" sem identidade)
- **Don't** usar os 3 clichês de design gerado por IA: fundo creme + serifada + terracota; fundo quase-preto + acento neon; layout jornal com colunas densas
- **Don't** usar o selo bordado dourado como imagem de fundo com overlay escuro no hero
- **Don't** inventar texto institucional vazio tipo "moda para todos os estilos" sem informação concreta
- **Don't** usar fonte script (Playball) em parágrafos, subtítulos, botões ou navegação
- **Don't** usar border-radius em cards ou containers (exceto botão WhatsApp)
- **Don't** usar sombras em cards estáticos
- **Don't** usar glassmorphism ou blurs décor
- **Don't** usar gradiente em texto
