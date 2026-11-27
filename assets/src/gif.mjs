/* Captures hero.html as frames and builds assets/hero.gif with ImageMagick.
   Usage: node assets/src/gif.mjs .   (needs puppeteer-core installed, Google Chrome and ImageMagick) */
import puppeteer from "puppeteer-core";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
const repo = fs.realpathSync(process.argv[2] ?? "."), out = fs.mkdtempSync(`${os.tmpdir()}/hero-`);
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 400, deviceScaleFactor: 1.5 });
await p.goto(`file://${repo}/assets/src/hero.html?q=0`, { waitUntil: "networkidle0" });
await p.waitForFunction(() => document.documentElement.dataset.ready === "1");
const FILL = 42; /* frames of fill at 15 fps, about 2.8 s */
const ease = t => 1 - Math.pow(1 - t, 2.2);
for (let f = 0; f <= FILL; f++) {
  await p.evaluate(v => window.setQ(v), ease(f / FILL));
  await p.screenshot({ path: `${out}/f${String(f).padStart(3, "0")}.png` });
}
await b.close();
const frames = fs.readdirSync(out).sort().map(f => `${out}/${f}`);
/* first frame (empty outlines) holds 0.8 s, fill frames at 15 fps, last frame holds 6 s */
execFileSync("magick", ["-delay", "80", frames[0], "-delay", "7", ...frames.slice(1, -1), "-delay", "600", frames.at(-1),
  "-loop", "0", "-dither", "None", "-colors", "48", "-layers", "Optimize", `${repo}/assets/hero.gif`]);
console.log("frames", frames.length, "size", fs.statSync(`${repo}/assets/hero.gif`).size);
