// function solution(arr) {
//   const answer = [];
//   arr.forEach((v) => {
//     for (let i = 0; i < v; i++) {
//       answer.push(v);
//     }
//   });
//   return answer;
// }

// const solution = (arr) => arr.map((v) => Array.from({ length: v }).fill(v)).flat(); // flat() 은 느리다.
const solution = (arr) =>
  arr.reduce((a, c) => a.concat(Array.from({ length: c }).fill(c)), []);

console.log(solution([5, 1, 4]));
console.log(solution([6, 6]));
console.log(solution([1]));
