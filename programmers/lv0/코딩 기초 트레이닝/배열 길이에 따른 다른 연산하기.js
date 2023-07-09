// const solution = (arr, n) =>
//   arr.length % 2
//     ? arr.map((v, i) => (i % 2 ? v : v + n))
//     : arr.map((v, i) => (i % 2 ? v + n : v));

const solution = (arr, n) =>
  arr.map((v, i) => (arr.length % 2 ^ i % 2 ? v + n : v));

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
