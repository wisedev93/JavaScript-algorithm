"use strict";
// "use Strict" 써주는게 조금 더 빠르다.
// console.log() 는 무겁고 느린 함수 이니 적게 쓰는 것이 좋다. process.stdout.write()도 마찬가지
/*
출처 : https://tesseractjh.tistory.com/39
출처 : https://degurii.tistory.com/108
*/
// ------------- readFile -------------
{
  const fs = require("fs");
  let readfile = fs
    .readFileSync("./etc/example.txt", "utf8")
    .toString()
    .trim()
    .split("\n");
  console.log(readfile);
  readfile.forEach((v) => console.log(v));
}
// ------------- readLine -------------
{
  const readline = require("readline");
  // 비동기 임
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

// ------------- input -------------
// 1. 하나의 값을 입력받을 때
{
  const input = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim();
  console.log(input);
}
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
{
  const input = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim()
    .split(" ");
  console.log(input);
}
// 3. 여러 줄의 값들을 입력받을 때
{
  const input = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim()
    .split("\n");
  console.log(input);
}
// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
{
  const [n, ...arr] = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim()
    .split(/\s/);
  console.log(n, arr);
}
// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
{
  const [n, ...arr] = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim()
    .split("\n");
  console.log(n, arr);
}
// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
{
  const input = require("fs")
    .readFileSync("./etc/example.txt")
    .toString()
    .trim()
    .split(/\s/); // === split(" ")
  const n = input[0];
  const n_arr = input.slice(1, n + 1);
  const [m, ...m_arr] = input.slice(n + 1);
  console.log(n, m, n_arr, m_arr);
}
// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가

// readFileSync의 return은 string이 아닌 buffer Object! toString()으로 정확하게 바꿔주자
{
  const input = require("fs").readFileSync("./etc/example.txt");
  console.log(typeof input); // object

  const input2 = require("fs").readFileSync("./etc/example.txt").toString();
  console.log(typeof input2); // string

  const input3 = require("fs").readFileSync("./etc/example.txt") + "";
  console.log(typeof input3); // string

  const input4 = require("fs").readFileSync("./etc/example.txt", "utf8"); // incoding해주면 string return
  console.log(typeof input4); // string
}
