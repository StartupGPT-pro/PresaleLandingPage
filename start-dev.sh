#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-8080}
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

# Prefer Python http.server, fallback to npx serve if available
if command -v python3 >/dev/null 2>&1; then
  SERVER_CMD="python3 -m http.server $PORT"
elif command -v python >/dev/null 2>&1; then
  SERVER_CMD="python -m http.server $PORT"
elif command -v npx >/dev/null 2>&1; then
  SERVER_CMD="npx --yes serve -l $PORT -s ."
else
  echo "Error: Need python3/python or npx (serve) to run a static server." >&2
  exit 1
fi

URL="http://localhost:$PORT"

# Open browser
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "$URL" || true
elif [[ "$OSTYPE" == "linux"* ]]; then
  xdg-open "$URL" || true
elif [[ "$OSTYPE" == "msys"* || "$OSTYPE" == "cygwin"* ]]; then
  start "$URL" || true
fi

echo "Serving $ROOT_DIR at $URL"
exec bash -lc "$SERVER_CMD"
