"use strict";

const [n, ...arr] = require("fs")
  .readFileSync("./boj/io/example.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

let tmpArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    tmpArr.pop();
  } else {
    tmpArr.push(arr[i]);
  }
}
let res = 0;
tmpArr.map((v) => (res += v));
console.log(res);
