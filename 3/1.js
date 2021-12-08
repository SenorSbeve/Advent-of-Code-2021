const fs = require("fs");
const path = require("path");

let sample = fs
  .readFileSync(path.join(__dirname, "sample.txt"), "utf8")
  .toString()
  .split("\n");

let reports = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .split("\n");
