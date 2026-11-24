process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Cat Joke That Lands — one line about the mug that keeps
// ending up on the floor every single morning.
const LINE =
  "My cat pushed my mug off the table this morning, looked me dead in the eye, and pushed the coaster off too, just so I'd know it wasn't an accident.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
