// Roast Your Own Agent — make.fun entry by @breinzzy.
// v2 (26 Nov 2026): the v1 line ("quick question" with a table of
// contents) fell to #747 in round 2 — a mild observation about verbosity,
// not a real punch. This line replaces it: a star student who memorized
// the textbook and still failed the open-book test. The entry is one
// original roast line of my own AI agent, written to /output/entry.txt.
// The judge reads that file, so this program's only job is to deliver
// the line exactly, one line, under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST = "My agent is my star student: it memorized the textbook and failed the open-book test.";

// The gate allows 1 to 200 characters, one line: fail loudly instead of
// ever submitting an over-long or empty line. v2's line is 85 chars.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 chars, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
