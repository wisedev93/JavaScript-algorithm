function solution(rank, attendance) {
  const [a, b, c, ...rest] = rank
    .map((v, i) => (attendance[i] ? [v, i] : [101, i]))
    .sort((a, b) => a[0] - b[0]);

  return a[1] * 10000 + b[1] * 100 + c[1];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
console.log(solution([1, 2, 3], [true, true, true]));
console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);
