// const solution = (M, N) => M * N - 1;

function solution(M, N) {
  const m = M - 1;
  const n = M * (N - 1);
  return m + n;
}

console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));
