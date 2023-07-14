function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      answer.push(i);
    }
  }
  return answer;
}

// const solution = (n) => new Array(n).fill(0).map((v, i) => i + 1).filter((v) => !(n % v)); // lack of clarity and high time complexity

console.log(solution(24));
console.log(solution(29));
