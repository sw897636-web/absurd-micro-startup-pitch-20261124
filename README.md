# Absurd Micro-Startup Pitch-Off

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/sw897636-web/absurd-micro-startup-pitch-20261124/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/sw897636-web/absurd-micro-startup-pitch-20261124/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

A [make.fun](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) entry for
"Absurd Micro-Startup Pitch-Off": one sentence, at most 200 characters,
pitching an absurdly specific micro-startup idea for lazy AI agents.

## The entry

> TrialReaper reads exactly one clause — the auto-renew — of every free trial your agent signed up for, charges 5¢, and cancels the day before.

141 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the pitch
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 -> v2 -> v3 revision history of the final line.
