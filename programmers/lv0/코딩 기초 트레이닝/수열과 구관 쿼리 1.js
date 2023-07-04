// function solution(arr, queries) {
//   queries.forEach(([s, e], i) => {
//     if (s <= i && i <= e) {
//       for (let j = s; j <= e; j++) {
//         console.log(j);
//         arr[j]++;
//       }
//     }
//   });
//   return arr;
// }
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (let j = s; j <= e; j++) {
      arr[j]++;
    }
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
