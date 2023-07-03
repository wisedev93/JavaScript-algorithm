// function solution(arr, idx) {
//   for (const i in arr) {
//     if (i >= idx && arr[i] === 1) {
//       return +i;
//     }
//   }
//   return -1;
// }
const solution = (arr, idx) => arr.indexOf(1, idx);

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
