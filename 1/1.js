const fs = require("fs");
const path = require("path");

let input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

let sample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let reports = input.toString().split("\n");

let data = reports;

let larger = data.filter((v, i, a) => v > a[i - 1]).length;

console.log(larger);
