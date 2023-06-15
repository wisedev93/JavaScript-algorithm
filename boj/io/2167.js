"use strict";

const getSum = (cmd, arr) => {
  const xi = cmd[0] - 1;
  const xj = cmd[1] - 1;
  const yi = cmd[2] - 1;
  const yj = cmd[3] - 1;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (xi <= i && i <= yi) {
      for (let j = 0; j < arr[i].length; j++) {
        if (xj <= j && j <= yj) {
          res += arr[i][j];
        }
      }
    }
  }

  console.log(res);
};

const rf = require("fs")
  .readFileSync("./boj/io/test.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const ix = rf[0];
const jy = rf[1];
const tmpArr = rf.slice(2, ix * jy + 2);
let arr = [];

for (let i = 0; i < ix; i++) {
  arr.push(tmpArr.slice(i * jy, i * jy + jy));
}

let cmdIdx = ix * jy + 2;
const cmd = rf[cmdIdx];
const cmdArr = [];
cmdIdx += 1;
let startIdx = cmdIdx;
let endIdx = cmdIdx + 4;
for (let i = 0; i < cmd; i++) {
  cmdArr.push(rf.slice(startIdx + i * 4, endIdx + i * 4));
}

for (let i = 0; i < cmd; i++) {
  getSum(cmdArr[i], arr);
}
