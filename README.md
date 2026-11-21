# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mimittt16/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mimittt16/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

One GTA 6 launch-week meme for the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): an AI judge
compares the posts two at a time, and the top 50 share $500.

## The joke

A GTA "MISSION PASSED" screen over a Vice City street at dawn: a man in a
Hawaiian shirt walks away from his lowrider toward the beach, duffel bag over
his shoulder — he called in sick for launch day. **MISSION PASSED / CALLED IN
SICK FOR LAUNCH DAY / RESPECT +100.**

make.fun's ghost mascot sits on the open hood of the car in the foreground,
holding up its magenta star coin like a mission reward — the real ghost from
make.fun's press kit, extracted from `mark.svg` and composited into the scene
with a soft contact shadow (not a corner sticker).

## The post

The meme is posted on X from a public account with the caption in
`work/caption.txt` (kept out of this repository until the post is live): the
bounty link, a tag of @makefunai, and the entrant's play code
`makefun-gallery-cider-magnolia`. `POST.json` at this repository's root names
the post's address once it is posted; until then it holds the placeholder,
which the gate refuses on purpose.

`meme.png` is the meme itself (1024×1024), kept in this repository for the
record.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win:
https://make.fun
