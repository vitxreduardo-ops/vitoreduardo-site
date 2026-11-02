import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const failures = [];
const fail = (f, msg) => failures.push(`${f}: ${msg}`);

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
  const html = readFileSync(file, "utf8");
  const is404 = /(^|\/)(404|_not-found)(\/index)?\.html$/.test(file) || /404/.test(file);
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
}

for (const f of ["sitemap.xml", "robots.txt", "llms.txt"]) {
  if (!existsSync(join(OUT, f))) fail(`out/${f}`, "missing");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("SEO verification passed");
