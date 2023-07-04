const solution = (numbers, n) =>
  numbers.reduce((acc, v) => acc + (acc <= n ? v : 0), 0);

console.log(solution([34, 5, 71, 29, 100, 34], 123));
