"use strict";
// "use Strict" 써주는게 조금 더 빠르다.
// console.log() 는 무겁고 느린 함수 이니 적게 쓰는 것이 좋다. process.stdout.write()도 마찬가지

// ------------- readFile -------------
{
  const fs = require("fs");
  let readfile = fs
    .readFileSync("./example.txt", "utf8")
    .toString()
    .trim()
    .split("\n");
  console.log(readfile);
  readfile.map((v) => console.log(v));
}
// ------------- readLine -------------
{
  const readline = require("readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let rl_input = [];
  rl.on("line", (v) => {
    // 줄바꿈관련 이벤트 리스너
    rl_input = v;
    rl.close();
    // clsoe() 없으면 입력을 못 끝냄
  });
  rl.on("close", () => {
    // enter or return 이벤트 리스너
    console.log(rl_input);
    process.exit();
  });
}
// ------------- Number -------------
{
  let a = Number("0");
  let b = new Number("0");
  // object 비교 연산시 object chain에 따라 false new Number는 쓰지 않는다!
  let c = +"0";
  if (a === 0) {
    console.log("a 는 숫자");
  }
  if (b === 0) {
    console.log("b 는 숫자");
  }
  if (c === 0) {
    console.log("c 는 숫자");
  }
  const str = "10x";
  console.log(parseInt(str, 10));
  console.log(Number(str));
  console.log(+str);
  const [e, f] = "1 2".split(" ").map((v) => +v); // === "1 2".split(" ").map(Number); === "1 2".split(" ").map((v) => Number(v));
  // Number(1), Number(2)의 return값을 바로 반환 한것과 같다
  console.log(e, f);
}
