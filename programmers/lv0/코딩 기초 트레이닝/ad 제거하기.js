// function solution(strArr) {
//   const answer = [];
//   strArr.forEach((v) => {
//     if (!v.includes("ad")) {
//       answer.push(v);
//     }
//   });
//   return answer;
// }

const solution = (strArr) => strArr.filter((v) => !v.includes("ad"));

console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
