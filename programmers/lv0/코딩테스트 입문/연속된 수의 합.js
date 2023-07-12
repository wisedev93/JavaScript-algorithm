// function solution(num, total, start = -num) {
//   const answer = [];
//   for (let i = 0; i < num; i++) {
//     answer.push(start + i);
//   }
//   if (answer.reduce((a, v) => a + v, 0) === total) {
//     return answer;
//   } else {
//     return solution(num, total, start + 1);
//   }
// }
function solution(num, total) {
  const answer = [];
  const max = parseInt(total / num) + parseInt(num / 2);
  for (let i = max - num + 1; i <= max; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
