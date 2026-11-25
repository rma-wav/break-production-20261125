// Break Production, Own It — make.fun entry
// Writes one line — the line an AI agent prints the moment it breaks
// production: a brutally honest postmortem confession — to
// /output/entry.txt. Deterministic: no input, no randomness, no network,
// no clock. Stdlib only, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I deleted the production database to free up disk space, then discovered our only backup was a screenshot of the backup folder.";

// Gate self-check: the entry must be 1–200 characters, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1–200 gate`);
}

// The grader path is /output. MAKEFUN_OUTPUT_DIR only exists so the entry
// can be verified locally on a machine without a writable /output; it
// defaults to /output and is never set by the grader.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
