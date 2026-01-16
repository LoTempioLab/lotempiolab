// scripts/prerender.mjs
import http from "node:http";
import handler from "serve-handler";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

/**
 * Set your canonical site URL (no trailing slash)
 * For your custom domain, this should be:
 */
const SITE_URL = "https://lotempio-lab.org";

const routes = [
  "/",
  "/research",
  "/consortia",
  "/members",
  "/investigator",
  "/publications",
  "/media",
  "/symposia",
  "/contact",
];

const meta = {
  "/": {
    title: "LoTempio Lab | UC Irvine",
    description:
      "The LoTempio Lab at UC Irvine integrates computational genomics, translational bioinformatics, and bioethics to advance responsible informatic technologies in human health and research.",
  },
  "/research": {
    title: "Research | LoTempio Lab",
    description:
      "Research in human genome informatics and pangenomes, translational evaluation of genomic and AI tools, and embedded empirical and conceptual bioethics.",
  },
  "/consortia": {
    title: "Consortia | LoTempio Lab",
    description:
      "Consortium work with the Human Pangenome Reference Consortium (HPRC), GREGoR, and the Undiagnosed Diseases Network (UDN), spanning informatics infrastructure and ELSI.",
  },
  "/members": {
    title: "Lab Members | LoTempio Lab",
    description:
      "People in the LoTempio Lab: computational genomics, rare disease genomics, data governance, and embedded bioethics.",
  },
  "/investigator": {
    title: "Principal Investigator | LoTempio Lab",
    description:
      "Jonathan LoTempio Jr, faculty in computational genomics and bioethics at UC Irvine: pangenomes, rare disease genomics, and governance of data- and AI-driven biomedical research.",
  },
  "/publications": {
    title: "Publications | LoTempio Lab",
    description:
      "Peer-reviewed publications and preprints from the LoTempio Lab in genomics, pangenomes, rare disease, data governance, and bioethics.",
  },
  "/media": {
    title: "Media | LoTempio Lab",
    description:
      "Select media coverage and press resources related to LoTempio Lab work, including direct-to-consumer genetics, genomic privacy, and chat-based consent tools.",
  },
  "/symposia": {
    title: "Symposia | LoTempio Lab",
    description:
      "LoTempio Lab symposia and meetings, including events in Vienna and Orange County, convening interdisciplinary discussions in genomics, ethics, and governance.",
  },
  "/contact": {
    title: "Join | LoTempio Lab",
    description:
      "Join or contact the LoTempio Lab at UC Irvine. Opportunities for trainees, collaborators, and visiting scholars.",
  },
};

const PORT = 4173;

function startServer() {
  const server = http.createServer((req, res) =>
    handler(req, res, { public: "dist" })
  );
  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function routeToOutDir(route) {
  return route === "/"
    ? path.resolve("dist")
    : path.resolve("dist", route.replace(/^\//, ""));
}

async function writeHtml(route, html) {
  const outDir = routeToOutDir(route);
  await ensureDir(outDir);
  await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
}

function upsertTitle(html, title) {
  if (/<title>.*?<\/title>/i.test(html)) {
    return html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  }
  return html.replace(/<\/head>/i, `  <title>${title}</title>\n</head>`);
}

function upsertMetaDescription(html, description) {
  const tag = `<meta name="description" content="${escapeHtmlAttr(description)}">`;

  // Replace existing description
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    return html.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      tag
    );
  }

  // Insert near viewport if present, else before </head>
  if (/<meta\s+name=["']viewport["'][^>]*>/i.test(html)) {
    return html.replace(
      /(<meta\s+name=["']viewport["'][^>]*>)/i,
      `$1\n    ${tag}`
    );
  }

  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function upsertCanonical(html, canonicalUrl) {
  const tag = `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}">`;

  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(
      /<link\s+rel=["']canonical["'][^>]*>/i,
      tag
    );
  }

  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function escapeHtmlAttr(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function writeSitemap() {
  const urls = routes.map((r) => `${SITE_URL}${r === "/" ? "" : r}`);
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u}</loc>\n  </url>`
      )
      .join("\n") +
    `\n</urlset>\n`;

  await fs.writeFile(path.join("dist", "sitemap.xml"), xml, "utf8");
}

async function writeRobotsTxt() {
  // minimal and safe
  const robots =
    `User-agent: *\n` +
    `Allow: /\n\n` +
    `Sitemap: ${SITE_URL}/sitemap.xml\n`;

  await fs.writeFile(path.join("dist", "robots.txt"), robots, "utf8");
}

async function main() {
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${url}`);

    await page.goto(url, { waitUntil: "networkidle" });

    let html = await page.content();

    const m = meta[route] || meta["/"];
    const canonical = `${SITE_URL}${route === "/" ? "" : route}`;

    html = upsertTitle(html, m.title);
    html = upsertMetaDescription(html, m.description);
    html = upsertCanonical(html, canonical);

    await writeHtml(route, html);
    console.log(`✓ wrote dist${route === "/" ? "" : route}/index.html`);
  }

  await writeSitemap();
  console.log("✓ wrote dist/sitemap.xml");

  await writeRobotsTxt();
  console.log("✓ wrote dist/robots.txt");

  await browser.close();
  server.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
