# AGENTS.md — Mundo da Moda

Site institucional da loja de roupas Mundo da Moda (Miguelópolis-SP).
Vitrine digital, página única, deploy estático no Cloudflare Pages.

## Stack
- Astro 5 + Tailwind CSS 3
- Output estático (`dist/`)
- Sem banco de dados, sem SSR

## Deploy
```bash
npm run build
$env:CLOUDFLARE_API_TOKEN = "cfut_..."
$env:CLOUDFLARE_ACCOUNT_ID = "f5f2b9d01f0c51159e468dd49339b8be"
npx wrangler pages deploy dist --project-name=mundodamoda --branch=master --commit-dirty=true
```
**Production**: https://mundodamoda.pages.dev
**GitHub**: https://github.com/v4ld0b3rt01164-code/mundodamoda
**Cloudflare Account**: `f5f2b9d01f0c51159e468dd49339b8be`

## Paleta (não alterar — deriva da fachada real)
| Token | Hex |
|-------|-----|
| `preto-fachada` | `#16130F` |
| `vermelho-toldo` | `#C81E1E` |
| `dourado-script` | `#C9A24B` |
| `amarelo-calcada` | `#F2C230` |
| `branco-parede` | `#F7F5F2` |

## Tipografia
- **Display/Marca**: SVG (`mundo-yellow.svg`, `mundo-black.svg`) — não usar fonte web para o nome
- **Corpo**: `Work Sans` → `system-ui` → `sans-serif`

## Estrutura
```
src/pages/index.astro          — página única
src/components/
  Hero.astro                   — <picture> com hero0-mobile.jpeg (≤640px) e hero1.jpeg (desktop)
  MarcaSection.astro           — nome SVG, tagline, CTA, reviews
  FachadaSection.astro         — foto fachada + "Nossa Loja"
  ModeloSection.astro          — foto modelo (1.jpg)
  Diferenciais.astro           — 4 cards (plus size, preço, 45 dias, 5★)
  Galeria.astro                — carrossel 3D coverflow (11 slides, animação JS)
  Reviews.astro                — depoimentos Google
  Contato.astro                — mapa + endereço + redes sociais
  Footer.astro                 — rodapé (logo SVG preto)
  WhatsAppButton.astro         — botão flutuante fixo
```

## Assets (usar apenas estes — nada de banco genérico)
- `public/hero1.jpeg` — selo bordado (hero desktop)
- `public/hero0.jpeg` — selo bordado alt (badges, watermark)
- `public/hero0-mobile.jpeg` — selo bordado mobile (750px)
- `public/fachada.jpg` — fachada real
- `public/1.jpg` — modelo real fotografada na loja
- `public/galeria/*.jpg` + `public/ig_*.jpg` — fotos do Instagram/Facebook para o carrossel
- `public/mundo-yellow.svg` — logo marca (dourado, para fundo escuro)
- `public/mundo-black.svg` — logo footer (preto, para fundo claro)
- `public/favicon.svg` — ícone do site

## Como adicionar novas fotos ao carrossel
Editar array `slides` em `src/components/Galeria.astro`, adicionar imagens em `public/galeria/`.

## Galeria — Notas técnicas
- A animação do coverflow é 100% JavaScript (`requestAnimationFrame` + interpolação manual)
- NÃO usar CSS transitions no carrossel — conflita com o bundle CSS do Tailwind no desktop
- Easing reimplementado em JS: `cubic-bezier(.22,.85,.32,1)`
- Duração: 550ms | Autoplay: 1500ms | Pausa no hover/touch
- Cards são HTML estático (renderizado pelo Astro), não criados via JS

## Regras
- Nunca usar paleta pastel boutique genérica
- Nunca usar templates de e-commerce de estoque
- Nunca usar o selo bordado como fundo com overlay escuro
- Nunca usar fonte script em parágrafos/botões
- Nunca usar glassmorphism, gradiente em texto ou blurs décor
- Nunca usar CSS transitions no carrossel — usar JS puro
