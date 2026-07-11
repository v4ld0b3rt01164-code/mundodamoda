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
npx wrangler pages deploy dist --project-name=mundodamoda
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
- **Display**: `Edwardian Script ITC` → `Playball` → `Great Vibes` → `cursive` (só no nome "Mundo da Moda")
- **Corpo**: `Work Sans` → `system-ui` → `sans-serif`

## Estrutura
```
src/pages/index.astro          — página única
src/components/
  Hero.astro                   — hero1.jpeg full-screen, sem overlay
  MarcaSection.astro           — nome, tagline, CTA, reviews
  FachadaSection.astro         — foto fachada + "Nossa Loja"
  ModeloSection.astro          — foto modelo (1.jpg)
  Diferenciais.astro           — 4 cards (plus size, preço, 45 dias, 5★)
  Galeria.astro                — carrossel 3D coverflow (11 slides)
  Reviews.astro                — depoimentos Google
  Contato.astro                — mapa + endereço + redes sociais
  Footer.astro                 — rodapé
  WhatsAppButton.astro         — botão flutuante fixo
```

## Assets (usar apenas estes — nada de banco genérico)
- `public/hero1.jpeg` — selo bordado (hero full-screen)
- `public/hero0.jpeg` — selo bordado alt (badges, watermark)
- `public/fachada.jpg` — fachada real
- `public/1.jpg` — modelo real fotografada na loja
- `public/galeria/*.jpg` + `public/ig_*.jpg` — fotos do Instagram/Facebook para o carrossel

## Como adicionar novas fotos ao carrossel
Editar array `SLIDES` em `src/components/Galeria.astro`, adicionar imagens em `public/galeria/`.

## Regras
- Nunca usar paleta pastel boutique genérica
- Nunca usar templates de e-commerce de estoque
- Nunca usar o selo bordado como fundo com overlay escuro
- Nunca usar fonte script em parágrafos/ botões
- Nunca usar glassmorphism, gradiente em texto ou blurs décor
