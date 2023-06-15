"use strict";

const [x, y] = require("fs")
  .readFileSync("./boj/io/test.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

if (x >= 0 && y >= 0) {
  console.log(1);
} else if (x >= 0 && y < 0) {
  console.log(4);
} else if (x < 0 && y >= 0) {
  console.log(2);
} else {
  console.log(3);
}
