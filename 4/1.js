const fs = require("fs");
const path = require("path");

const SAMPLE = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
const REPORTS = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const DATA = String(SAMPLE)
  .split(/\n\n/)
  .map((v, i, a) =>
    v
      .split(i == 0 ? /,/ : /\n/)
      .map((v) => v.split(" ").filter((v) => v.match(/\S/)))
      .map((v) => v.map((j) => Number(j)))
  );

const WINNING = DATA[0].map((v) => Number(v[0]));
