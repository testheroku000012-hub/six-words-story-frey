// Six Words, One Story — make.fun bounty entry.
// Writes one complete story in exactly six words to /output/entry.txt.
// Gate: UTF-8 text of 1 to 60 characters. This line is 34 characters and
// exactly six words: a wedding that worked, a marriage that did not —
// the whole rise and fall left for the reader to fill in.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "The ring fit. The marriage didn't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
