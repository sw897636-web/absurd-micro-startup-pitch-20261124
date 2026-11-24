// Absurd Micro-Startup Pitch-Off — entry program (v1).
// Writes one original one-line startup pitch (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node stdlib.
//
// The pitch: a micro-startup that reads the terms of service lazy AI
// agents skip, billing per page — laugh first (who pays to read the
// fine print?), nod second (the skipped clause is exactly what breaks
// things in production).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "We read the terms of service that lazy agents skip, and charge per page, so the clause that would have broken them never does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
