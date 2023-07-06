const isEqaul = (arr, arrX) => arr.every((v, i) => v === arrX[i]);

function getArrX(arr, cnt = 0) {
  const x = arr.map((v) => {
    if (v >= 50 && !(v % 2)) {
      return v / 2;
    } else if (v < 50 && v % 2) {
      return v * 2 + 1;
    } else {
      return v;
    }
  });
  // if (isEqaul(x, arr)) {
  if (arr.every((v, i) => v === x[i])) {
    return cnt;
  } else {
    return getArrX(x, cnt + 1);
  }
}

const solution = (arr) => getArrX(arr);

// function solution(arr, n = 0) {
//   while (!arr.every((v) => (v >= 50 && v % 2) || (v < 50 && !(v % 2)))) {
//     arr = arr.map((v) => {
//       if (v >= 50 && v % 2 === 0) {
//         return v / 2;
//       }
//       if (v < 50 && v % 2 === 1) {
//         return v * 2 + 1;
//       }
//       return v;
//     });
//     n++;
//   }
//   return n;
// }

console.log(solution([1, 2, 3, 100, 99, 98]));
