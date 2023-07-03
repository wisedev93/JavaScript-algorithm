const solution = (arr, intervals) =>
  intervals.reduce((acc, [s, e]) => acc.concat(arr.slice(s, e + 1)), []);
// const solution = (arr, intervals) =>
//   intervals.map(([s, e]) => arr.slice(s, e + 1)).flat();
// flat()은 매우 느리다.. browser가 concat()에는 최적화 되어 있으나 flat()에는 아님
console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);
