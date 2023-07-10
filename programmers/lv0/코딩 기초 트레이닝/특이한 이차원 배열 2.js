// function solution(arr) {
//   let answer = 0;
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i][j] === arr[j][i]) {
//         answer = 1;
//       } else {
//         return 0;
//       }
//     }
//   }

//   return answer;
// }

const solution = (arr) =>
  +arr.every((v, i) => v.every((_, j) => arr[i][j] === arr[j][i]));

console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
);
console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);
