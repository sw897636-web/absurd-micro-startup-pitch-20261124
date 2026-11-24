// Absurd Micro-Startup Pitch-Off — entry program (v3 final).
// Writes one original one-line startup pitch (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node stdlib.
//
// The pitch: TrialReaper, a micro-startup that reads exactly one clause
// — the auto-renew — of every free trial a lazy agent signed up for,
// charges 5¢ per trial, and cancels the day before it renews.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "TrialReaper reads exactly one clause — the auto-renew — of every free trial your agent signed up for, charges 5¢, and cancels the day before.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
