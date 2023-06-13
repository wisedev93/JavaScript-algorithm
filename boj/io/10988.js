"use strict";

const readfile = require("fs")
  .readFileSync("./boj/io/test.txt")
  .toString()
  .trim();
// const readfile = require("fs").readFileSync("/dev/stdin").toString().trim();

const len = parseInt(readfile.length / 2, 10);
const left = readfile.slice(0, readfile.length % 2 === 0 ? len : len + 1);
const right = readfile.slice(len, readfile.length).split("").reverse().join("");
if (left === right) {
  console.log(1);
} else {
  console.log(0);
}
