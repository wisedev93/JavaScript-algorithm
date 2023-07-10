function solution(n) {
  //   const answer = new Array(n).fill(new Array(n).fill(0)); Whichi one is better?
  const answer = Array.from({ length: n }).fill(
    Array.from({ length: n }).fill(0)
  );
  const idx = [0, 0];

  while (idx[0] * idx[1] <= 16) {
    console.log(idx);
    idx[0]++;
    idx[1]++;
  }

  return answer;
}

console.log(solution(4));
console.log(solution(5));
