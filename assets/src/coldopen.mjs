/* Records the site's cold open with CDP screencast. Usage: node assets/src/coldopen.mjs <outdir> 9  (needs puppeteer-core and Google Chrome; records the live site) */
import puppeteer from "puppeteer-core";
import fs from "node:fs";
const [out, secs = "9"] = process.argv.slice(2);
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 810 });
/* site chrome stays out of the README: nav bar and the skip button */
await p.evaluateOnNewDocument(() => addEventListener("DOMContentLoaded", () => {
  const s = document.createElement("style"); s.textContent = ".na-bar,.f-skip{display:none!important}"; document.head.appendChild(s);
}));
const cdp = await p.createCDPSession();
const frames = [];
cdp.on("Page.screencastFrame", async f => {
  frames.push({ t: f.metadata.timestamp, data: f.data });
  await cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId });
});
await cdp.send("Page.startScreencast", { format: "png", everyNthFrame: 1, maxWidth: 1440, maxHeight: 810 });
await p.goto("https://zaid-data.vercel.app/", { waitUntil: "domcontentloaded" });
await new Promise(r => setTimeout(r, +secs * 1000));
await cdp.send("Page.stopScreencast");
await b.close();
const t0 = frames[0].t;
frames.forEach((f, i) => fs.writeFileSync(`${out}/f${String(i).padStart(4, "0")}.png`, Buffer.from(f.data, "base64")));
fs.writeFileSync(`${out}/times.json`, JSON.stringify(frames.map(f => +(f.t - t0).toFixed(3))));
console.log("frames", frames.length, "span", (frames.at(-1).t - t0).toFixed(2), "s");
