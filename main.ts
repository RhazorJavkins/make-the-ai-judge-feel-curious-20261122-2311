const { mkdirSync, writeFileSync } = require("node:fs");

const entry = [
  "In the ferry’s lost-property drawer lay a comb, a red mitten, and a brass bell.",
  "A woman laid the mitten palm up and rang the bell once.",
  "The brass went quiet. A lower note came from the thumb.",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
