"use strict";

const getSum = (cmd, arr) => {
  const x = cmd[0];
  const y = cmd[1];
  const i = cmd[2];
  const j = cmd[3];

  console.log("🚀 ~ file: 2167.js:4 ~ getSum ~ cmd, arr:", cmd, arr);
  let res = 0;
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
