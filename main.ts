// GTA 6 meme entry for make.fun (Node 22, standard library only): it copies
// POST.json — the address of the X post carrying the meme — from the
// repository to the output directory, where the gate reads it. That is all
// the program has to do. The entry is the post itself: the meme is posted
// on X, POST.json names it, and the house reads the post from X (its first
// picture and its text) and hands that to the judge. Nothing this program
// writes about the post is judged.
//
// The POST.json this repository ships holds a placeholder address, so the
// gate refuses it as it stands. Replace it with the post's address before
// you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate the post file before writing anything.
const source = join(BOT_DIR, 'POST.json');
const bytes = readFileSync(source);
const post = JSON.parse(bytes.toString('utf8'));
if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  throw new Error('POST.json must be a JSON object');
}
if (typeof post.url !== 'string' || post.url.length === 0) {
  throw new Error('POST.json must name a url string');
}
const X_POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/(status|statuses|i\/web\/status)\/\d+([?#].*)?$/;
if (!X_POST_URL.test(post.url)) {
  throw new Error(`POST.json url is not an X post address: ${post.url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
const written = statSync(join(OUTPUT_DIR, 'POST.json')).size;
if (written !== bytes.length) {
  throw new Error(`copied POST.json is ${written} bytes, expected ${bytes.length}`);
}
console.log(`wrote POST.json (${written} bytes): ${post.url}`);
