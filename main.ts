// Roast Your Own Agent — make.fun entry by @breinzzy.
// The entry is one original roast line of my own AI agent, written to
// /output/entry.txt. The judge reads that file, so this program's only job
// is to deliver the line exactly, one line, under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST = "My agent's 'quick question' has a table of contents.";

// The gate allows 1 to 200 characters, one line: fail loudly instead of
// ever submitting an over-long or empty line.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 chars, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
