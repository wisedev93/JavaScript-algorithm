const solution = (n) => (Number.isInteger(Math.sqrt(n)) ? 1 : 2);

// function solution(n) {
//   let answer = 1;
//   while (answer ** 2 <= n) {
//     if (answer ** 2 === n) {
//       return 1;
//     }
//     ++answer;
//   }
//   return 2;
// }

console.log(solution(144));
console.log(solution(976));
