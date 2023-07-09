// function solution(arr) {
//   if (arr.length === 1) {
//     return arr;
//   } else {
//     let exponent = 0;
//     let i = 1;
//     while (!exponent) {
//       exponent = arr.length <= 2 ** i ? i : 0;
//       i++;
//     }
//     exponent = 2 ** exponent - arr.length;
//     return arr.concat(Array.from({ length: exponent }).fill(0));
//   }
// }

function solution(arr) {
  let exponent = 1;
  while (exponent < arr.length) {
    exponent *= 2;
  }
  while (arr.length < exponent) {
    arr.push(0);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([58, 172, 746, 89]));
