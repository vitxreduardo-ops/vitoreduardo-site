# Site de portfólio e serviços: Vitor Eduardo

Data: 2026-11-02. Status: aprovado pelo Vitor com pendências. Itens pendentes entram como placeholder visível e marcados no código (identidade visual, portfólio, textos, FAQ, site antigo, endereço).

## Intenção e motivo

Site próprio, em domínio próprio, que faz clientes da região de Luís Eduardo Magalhães (BA) e do sul do Tocantins encontrarem o estúdio no Google e em respostas de IA (ChatGPT, Claude, Perplexity, Google AI Overviews) quando buscam serviços de comunicação e marca. Hoje o trabalho aparece sobretudo no Instagram; o site precisa ser o lugar onde o cliente entende os serviços, vê o trabalho e chama no WhatsApp.

## Objetivos

- Ranquear buscas por serviço e região: produção audiovisual, estratégia de marketing, design, construção de marca, manual de marca, identidade visual, campanhas publicitárias, campanhas para redes sociais.
- Ser citado em respostas de IA: textos que respondem perguntas reais do cliente, com dados estruturados.
- Converter visita em contato: WhatsApp e Instagram com um clique.
- Mostrar o portfólio existente com contexto (cliente, desafio, entrega), não só mídia solta.

## Não objetivos

- Blog nesta primeira versão (fica para depois, com a mesma base).
- Loja, agendamento, login, área do cliente.
- Multilíngue. Só português (pt-BR).
- Formulário próprio de contato. Contato é WhatsApp e Instagram.

## Antimetas (se acontecer, é falha mesmo que tecnicamente funcione)

- Conteúdo que só aparece depois de JavaScript rodar.
- Depoimentos, números de clientes ou cases inventados. Só entra o que o Vitor confirmar.
- Fotos de banco de imagem passando por trabalho próprio.
- Cara de template genérico de estúdio criativo.
- Animação que esconde texto de quem não executa JS ou tem movimento reduzido.

## Restrições

- Hospedagem: GitHub Pages, domínio próprio via arquivo `CNAME`, HTTPS.
- GitHub Pages é estático: sem headers customizados, sem redirect no servidor (só `meta refresh`), sem SSR.
- Stack: Next.js com `output: 'export'`, React, TypeScript. Sem rotas dinâmicas sem `generateStaticParams`.
- Next.js em export desliga a otimização automática de imagem. Imagens são otimizadas antes (WebP/AVIF, dimensões fixas, `alt` descritivo).
- Animações com a lib `motion` (antigo framer-motion). Regra: animar só `opacity` e `transform`. Nunca remover texto do DOM ou usar `display: none` para esconder conteúdo.
- `prefers-reduced-motion` respeitado (`MotionConfig reducedMotion="user"`).

## Estrutura de páginas

Decisões minhas (marcadas), a confirmar:

- `/`: posicionamento, os 4 pilares, portfólio em destaque, região atendida, contato.
- `/marca`: construção de marca, identidade visual, manual de marca.
- `/estrategia`: estratégia de marketing.
- `/conteudo`: produção audiovisual, design.
- `/campanhas`: campanhas publicitárias, campanhas para redes sociais.
- `/portfolio`: lista de cases. Cada case em `/portfolio/[slug]` com cliente, desafio, entrega e mídia.
- `/sobre`: Vitor Eduardo, trajetória e forma de trabalho.
- `/atendimento`: região e cidades atendidas, com texto local. (Decisão minha: uma página para SEO local em vez de uma por cidade, por enquanto.)

Pilares em 4 agrupamentos: aceito como está (não houve objeção). Se mudar, só o conteúdo das páginas muda.

## SEO técnico

- `lang="pt-BR"`, um `h1` por página, hierarquia de títulos sem pular níveis.
- `title` e `description` únicos por página, via API de `metadata` do Next.
- `canonical` em todas as páginas. Domínio fixo.
- Open Graph e Twitter Card por página, com imagem de 1200×630.
- `sitemap.xml` gerado por `app/sitemap.ts`.
- `robots.txt` gerado por `app/robots.ts`. Decisão minha: liberar bots de busca e de IA (Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Se você quiser bloquear algum, muda aqui.
- Meta de verificação do Google Search Console e Bing Webmaster (valor a receber).
- Links internos entre pilares, portfólio e atendimento.

## GEO (otimização para IA)

- `llms.txt` na raiz com resumo do estúdio, serviços, região, contato e links principais.
- JSON-LD:
  - `ProfessionalService` no site inteiro, com nome, área atendida, telefone, `sameAs` (Instagram).
  - `Person` para Vitor Eduardo em `/sobre`.
  - `Service` por pilar, com `areaServed`.
  - `BreadcrumbList` nas páginas internas.
  - `FAQPage` nas páginas de serviço, com perguntas reais que o cliente faz.
- Texto de cada página responde diretamente a uma pergunta ("o que é manual de marca", "quanto custa produção audiovisual" sem inventar preço), no início da seção.
- Cases com texto descritivo, não só mídia.

## Performance

- Imagens em WebP/AVIF, dimensões explícitas, `loading="lazy"` exceto a hero.
- Fontes com `font-display: swap`, no máximo duas famílias.
- Sem bibliotecas de UI pesadas. Estilo próprio com Tailwind ou CSS modules (decisão do builder).
- Meta: Core Web Vitals verdes em mobile.

## Contato

- Botão de WhatsApp com `https://wa.me/55<DDD+número>?text=...` (texto pré-preenchido por serviço).
- Link para o Instagram.
- Sem formulário.

## Deploy

- Repositório no GitHub. Workflow em GitHub Actions: build com `next build`, publicação da pasta `out/` no GitHub Pages.
- Arquivo `public/CNAME` com o domínio.
- DNS do domínio apontando para o GitHub Pages (registros A e CNAME do `www`).
- Trailing slash ligado (`trailingSlash: true`) para não quebrar rotas em GitHub Pages.

## Valores confirmados pelo Vitor

- Nome do estúdio: Vitor Eduardo - Filmmaker e Marcas. Schema `Person` usa "Vitor Eduardo".
- Domínio: vitoreduardo.com.br (canônico em `https://vitoreduardo.com.br`).
- WhatsApp: 77 99822-0929. Link: `https://wa.me/5577998220929`.
- Instagram: @vitxreduardo.
- Cidades: Luís Eduardo Magalhães, Barreiras, Taguatinga, Roda Velha, São Desidério.

## Valores ainda pendentes

- Identidade visual (logo, paleta, tipografia).
- Portfólio: cases, autorização de clientes, mídias.
- Textos e perguntas reais de clientes (FAQ).
- Site atual e links antigos indexados.
- Endereço e Google Business Profile.

## Deixado para o builder

- Componentes, design tokens, paleta e tipografia (com base em identidade visual que o Vitor já tenha; se não tiver, propor e aprovar antes).
- Layout exato de cada página, grid e breakpoints.
- Ordem de animações e variações de movimento.
- Nomes de arquivos e estrutura de pastas.
