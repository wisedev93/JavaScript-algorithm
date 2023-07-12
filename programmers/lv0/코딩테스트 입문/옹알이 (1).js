const babblingList = ["aya", "ye", "woo", "ma"];

// const solution = (babbling) =>
//   babbling.reduce((a, v) => {
//     let res = 0;
//     for (const babble of babblingList) {
//       v = v.replace(babble, "*");
//     }
//     if (v.replaceAll("*", "") === "") {
//       res = 1;
//     }
//     return a + res;
//   }, 0); // lack of clarity

function solution(babbling) {
  let answer = 0;
  babbling.forEach((word) => {
    for (const babble of babblingList) {
      word = word.replace(babble, "*");
    }
    if (word.replaceAll("*", "") === "") {
      answer++;
    }
  });
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
console.log(solution(["zayaye"]));
