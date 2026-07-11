# Prompt — Construção do site (Agente de codificação + Impeccable)

Cole este prompt no seu agente de codificação, dentro da pasta do projeto — com
`PRODUCT-mundo-da-moda.md` (renomeado para `PRODUCT.md` na raiz) e
`moda-mundo-da-moda.json` já presentes, além dos arquivos de imagem (fachada, foto
de modelo/conteúdo, selo bordado) salvos em uma pasta de assets (`/assets`,
`/public` ou equivalente).

---

Estou construindo o site institucional/vitrine da loja Mundo da Moda (Miguelópolis-SP),
a ser publicado no Cloudflare Pages.

**Passo 0 — obrigatório antes de tudo:** liste todos os arquivos de imagem/logo que
existem na pasta de assets do projeto e me diga exatamente quais encontrou, com nome
de arquivo. Se não encontrar nenhum, pare e me avise antes de continuar. Para cada
imagem: abra e descreva o que vê (cores com hex aproximados, estilo, o que comunica).
O `PRODUCT.md` já traz essa análise para a fachada, a foto de conteúdo e o selo
bordado — confirme que ela bate com o que você está vendo nos arquivos reais antes
de seguir.

Depois leia `PRODUCT.md` (estratégia de marca, incluindo a seção "Direção visual
concreta" com paleta, tipografia e elemento de assinatura já definidos a partir dos
assets reais) e `moda-mundo-da-moda.json` (dados extraídos do Google Maps/Facebook).

Siga este fluxo, nesta ordem, sem pular etapas (comandos da skill Impeccable):

1. **`/impeccable init`** — se ainda não houver `PRODUCT.md`/`DESIGN.md`
   reconhecidos, rode para gerar a estrutura, usando o `PRODUCT.md` fornecido como
   base real — não substitua o conteúdo, só complemente se necessário.
2. **`/impeccable shape`** — produza um brief de design a partir do `PRODUCT.md` e
   do JSON. **A paleta, tipografia e elemento de assinatura já estão definidos no
   `PRODUCT.md` — use-os literalmente, não proponha uma paleta alternativa (nada de
   pastel/boutique genérico).** Os campos marcados `"A CONFIRMAR COM O CLIENTE"`
   devem virar placeholders visíveis e claramente sinalizados — não invente conteúdo
   para esses campos.
3. **`/impeccable craft`** — desenhe e construa a primeira versão do site.
   - O fundo preto + faixa vermelha + dourado da fachada real devem dominar o hero.
   - A foto de conteúdo (modelo) deve ser usada de fato no layout, não substituída
     por banco de imagens genérico.
   - O selo bordado deve aparecer **apenas como elemento pontual** (badge, ícone de
     seção, textura discreta) — nunca como imagem de fundo em tela cheia do hero.
   - Não usar nenhum template de e-commerce de estoque como referência de layout.
4. Depois da primeira versão construída: **`/impeccable document`** — gere o
   `DESIGN.md` real a partir do que foi implementado.
5. **`/impeccable critique`** seguido de **`/impeccable polish`**.
6. **`/impeccable audit`** — cheque estados de erro, i18n/PT-BR, responsividade e
   performance antes de publicar.

## Checklist final obrigatório (responda antes de finalizar)

- [ ] Quais arquivos de asset foram inventariados e onde cada um foi usado no layout
- [ ] A paleta e tipografia batem com as definidas no `PRODUCT.md` (preto-fachada,
      vermelho-toldo, dourado-script, amarelo-calçada, branco-parede) — sem
      substituição por default genérico ou paleta pastel
- [ ] O selo bordado foi usado como elemento pontual, não como hero em tela cheia
- [ ] Nenhuma imagem de banco genérica ou template de e-commerce de estoque foi usado

## Requisitos técnicos

- Stack compatível com deploy estático no **Cloudflare Pages**.
- Registro: **brand surface** (vitrine institucional) — ver `PRODUCT.md`.
- Página única, objetiva, **mobile-first**.
- CTA principal sempre visível: **WhatsApp** (`+55 16 99240-7906`), com link para
  Instagram/Facebook como reforço.

## Dados do cliente

Ver `moda-mundo-da-moda.json` na raiz do projeto.
