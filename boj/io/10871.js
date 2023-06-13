"use strict";

const [n, x, ...arr] = require("fs")
  .readFileSync("./boj/io/test.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

let res = [];
for (let i = 0; i < n; i++) {
  if (x > arr[i]) {
    res.push(arr[i]);
  }
}
console.log(...res);
