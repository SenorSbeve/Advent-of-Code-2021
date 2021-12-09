const fs = require("fs");
const path = require("path");

let sample = fs
  .readFileSync(path.join(__dirname, "sample.txt"), "utf8")
  .toString()
  .split("\n");

let diagnostics = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .split("\n");

let data = diagnostics;

let gamma = "";
let epsilon = "";

let most = data;
let least = data;

for (let i = 0; i < data[0].length; i++) {
  let aGamma =
    most.filter((v) => v[i] == "0").length <= most.length / 2 ? "1" : "0";
  let aEpsilon =
    least.filter((v) => v[i] == "0").length > least.length / 2 ? "1" : "0";

  gamma += aGamma;
  epsilon += aEpsilon;

  if (most.length > 1) most = most.filter((v) => v[i] == aGamma);
  if (least.length > 1) least = least.filter((v) => v[i] == aEpsilon);
}

console.log(parseInt(most, 2) * parseInt(least, 2));
