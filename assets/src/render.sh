#!/bin/bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$OUT"

render() {
  local name="$1" w="$2" h="$3"
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=2 \
    --window-size="${w},${h}" \
    --virtual-time-budget=10000 \
    --screenshot="$OUT/${name}.png" \
    "file://$DIR/${name}.html" 2>/dev/null
  echo "$name: $(magick identify -format '%wx%h %[size]' "$OUT/${name}.png")"
}

render hero     1200 400
render marquee  1200 130
render wordmark 1200 268
