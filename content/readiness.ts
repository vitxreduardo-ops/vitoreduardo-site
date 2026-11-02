// Troque para true quando o conteúdo real substituir o PENDENTE da página.
// Controla noindex e a presença da rota no sitemap (lib/routes.ts).
// Depois, edite à mão public/llms.txt para listar a página.
export const ready = { portfolio: false, sobre: false } as const;
