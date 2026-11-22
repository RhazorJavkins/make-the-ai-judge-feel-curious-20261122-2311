const { mkdirSync, writeFileSync } = require("node:fs");

const entry = [
  "In the ferry’s lost-property drawer lay a comb, a red mitten, and a brass bell.",
  "A woman came in, rang the bell, and waited.",
  "Something inside the mitten rang back.",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
