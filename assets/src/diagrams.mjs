/* Renders each diagram's <svg> alone at 2400 px wide. Usage: node assets/src/diagrams.mjs .   (needs puppeteer-core, Google Chrome and ImageMagick) */
import puppeteer from "puppeteer-core";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
const repo = fs.realpathSync(process.argv[2] ?? ".");
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const p = await b.newPage();
for (const n of ["chatflow", "crypto", "medicare", "tripmate"]) for (const v of ["", "-dark"]) {
  await p.setViewport({ width: 1280, height: 1200, deviceScaleFactor: 2.5 });
  await p.goto(`file://${repo}/assets/src/diagrams/${n}${v}.html`, { waitUntil: "networkidle0" });
  await p.evaluate(() => document.fonts.ready);
  const out = `${repo}/assets/diagrams/${n}${v}.png`;
  await (await p.$("svg")).screenshot({ path: out });
  execFileSync("magick", [out, "-resize", "2400x", out]);
  console.log(n + v, execFileSync("magick", ["identify", "-format", "%wx%h", out]).toString());
}
await b.close();
