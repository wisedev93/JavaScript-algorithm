// function solution(chicken, cupon = 0) {
//   let answer = parseInt(chicken / 10);
//   cupon = cupon + (chicken % 10);

//   if (cupon / 10) {
//     answer += parseInt(cupon / 10);
//     cupon = cupon % 10;
//   }

//   if (answer >= 10) {
//     return (answer += solution(answer, cupon));
//   } else {
//     if (cupon + answer >= 10) {
//       answer += 1;
//     }
//     return answer;
//   }
// }

const solution = (chicken) => parseInt((chicken - 10) / 9) + 1;

console.log(solution(100));
console.log(solution(1081));
console.log(solution(1999));
