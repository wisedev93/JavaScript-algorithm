"use strict";

const arr = require("fs")
  .readFileSync("./boj/io/example.txt")
  .toString()
  .trim()
  .split(/\s/);

let res = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // 가로 세로 합은 항상 짝수...!
    if ((i + j) % 2 === 0 && arr[i][j] === "F") {
      res += 1;
    }
  }
}
console.log(res);
