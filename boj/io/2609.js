"use strict";

const getMax = (big, small) => {
  let max = 1;

  for (let i = 2; i <= small; i++) {
    if (big % i === 0 && small % i === 0) {
      max = i;
    }
  }
  return max;
};

const getMin = (big, small) => {
  let min = 0;

  for (let i = 1; i <= small; i++) {
    if ((big * i) % small === 0) {
      min = big * i;
      break;
    }
  }
  return min;
};

const [a, b] = require("fs")
  .readFileSync("./boj/io/example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const big = a > b ? a : b;
const small = a > b ? b : a;
const max = getMax(big, small);
const min = getMin(big, small);
console.log(max);
console.log(min);

// 유클리드 호제법 활용
// let i = a;
// let j = b;

// while (i % j !== 0) {
//   let n = i % j;
//   if (n !== 0) {
//     i = j;
//     j = n;
//   }
// }
// console.log(j);
// console.log((a * b) / j);
