// function solution(numlist, n) {
//   let distance = Infinity;
//   const distanceArr = numlist.map((v, i) => {
//     const tempDis = n - v > 0 ? n - v : v - n;
//     if (tempDis < distance) {
//       distance = tempDis;
//     }
//     return [tempDis, v];
//   });
//   distanceArr.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] > b[1] ? -1 : 1;
//     } else {
//       return a[0] - b[0];
//     }
//   });

//   const answer = distanceArr.map((v) => v[1]);
//   return answer;
// }

const solution = (numlist, n) =>
  numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
