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

let data = reports;

let x = (y = 0);

data.forEach((v) => {
  let str = v.split(" ");
  let num = Number(str[1]);

  console.log(str[0].includes("down"), num);

  str[0].includes("forward")
    ? (x += num)
    : str[0].includes("down")
    ? (y += num)
    : (y -= num);
});

console.log(x * y);
