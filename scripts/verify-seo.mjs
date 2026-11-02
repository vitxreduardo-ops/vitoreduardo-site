import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const ORIGIN = "https://vitoreduardo.com.br";
const failures = [];
const fail = (f, msg) => failures.push(`${f}: ${msg}`);

if (!existsSync(OUT)) {
  console.error(`"${OUT}/" não existe. Rode "npm run build" antes de verify-seo.`);
  process.exit(1);
}

const NOT_FOUND = new Set(["404.html", "404/index.html", "_not-found/index.html"]);
const read = (p) => readFileSync(join(OUT, p), "utf8");
const pageFile = (path) => (path === "/" ? "index.html" : `${path.replace(/^\/|\/$/g, "")}/index.html`);
const hasNoindex = (html) => /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html);

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (p === join(OUT, "_next")) continue;
      yield* htmlFiles(p);
    } else if (name.endsWith(".html")) yield p;
  }
}

for (const file of htmlFiles(OUT)) {
  const rel = file.slice(OUT.length + 1);
  const html = readFileSync(file, "utf8");
  const is404 = NOT_FOUND.has(rel);
  if (!html.includes('lang="pt-BR"')) fail(file, 'missing lang="pt-BR"');
  if (!/<title[ >]/.test(html)) fail(file, "missing <title>");
  if (!is404) {
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) fail(file, `expected exactly one <h1>, found ${h1}`);
    const canon = html.match(/<link[^>]*rel="canonical"[^>]*>/);
    const href = canon && canon[0].match(/href="([^"]*)"/);
    if (!href) fail(file, 'missing <link rel="canonical">');
    else if (!href[1].endsWith("/")) fail(file, `canonical without trailing slash: ${href[1]}`);
  }
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(file, `invalid JSON-LD: ${e.message}`); }
  }
  // og:image / twitter:image na origem do site devem existir em out/
  for (const m of html.matchAll(/<meta[^>]*(?:property="og:image"|name="twitter:image")[^>]*>/g)) {
    const url = m[0].match(/content="([^"]*)"/)?.[1];
    if (url?.startsWith(ORIGIN) && !existsSync(join(OUT, new URL(url).pathname))) {
      fail(file, `social image not found in out/: ${url}`);
    }
  }
}

if (existsSync(join(OUT, "index.html")) && !/application\/ld\+json/.test(read("index.html"))) {
  fail("out/index.html", "home has no application/ld+json block");
}

for (const f of ["sitemap.xml", "robots.txt", "llms.txt"]) {
  if (!existsSync(join(OUT, f))) fail(`out/${f}`, "missing");
}

if (existsSync(join(OUT, "sitemap.xml"))) {
  const locs = [...read("sitemap.xml").matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
  if (!locs.length) fail("out/sitemap.xml", "no <loc> entries");
  for (const loc of locs) {
    if (!loc.startsWith(ORIGIN) || !loc.endsWith("/")) { fail("out/sitemap.xml", `bad <loc> (origin or trailing slash): ${loc}`); continue; }
    const file = pageFile(loc.slice(ORIGIN.length));
    if (!existsSync(join(OUT, file))) fail("out/sitemap.xml", `<loc> has no built page (out/${file}): ${loc}`);
    else if (hasNoindex(read(file))) fail("out/sitemap.xml", `<loc> points to a noindex page: ${loc}`);
  }
}

if (existsSync(join(OUT, "portfolio/index.html"))) {
  const html = read("portfolio/index.html");
  if (!html.includes("PENDENTE")) fail("out/portfolio/index.html", "expected PENDENTE placeholder text");
  if (!hasNoindex(html)) fail("out/portfolio/index.html", "placeholder page must have robots noindex");
}

if (existsSync(join(OUT, "llms.txt")) && /\/(portfolio|sobre)\//.test(read("llms.txt"))) {
  fail("out/llms.txt", "mentions /portfolio/ or /sobre/ (noindex placeholders)");
}

if (existsSync(join(OUT, "robots.txt")) && !read("robots.txt").includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) {
  fail("out/robots.txt", `missing "Sitemap: ${ORIGIN}/sitemap.xml"`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("SEO verification passed");
