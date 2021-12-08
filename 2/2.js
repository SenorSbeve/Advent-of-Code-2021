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

let x = (d = y = 0);

data.forEach((v) => {
  let str = v.split(" ");
  let num = Number(str[1]);

  let increase = () => {
    x += num * y;
    d += num;
  };

  str[0].includes("forward")
    ? increase()
    : str[0].includes("down")
    ? (y += num)
    : (y -= num);
});

console.log(x * d);
