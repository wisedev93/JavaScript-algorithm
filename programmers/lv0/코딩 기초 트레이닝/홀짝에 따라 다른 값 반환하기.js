function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % 2 === 0 && i % 2 === 0) {
      answer += i * i;
    }
    if (n % 2 !== 0 && i % 2 !== 0) {
      answer += i;
    }
  }
  return answer;
}
