function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += 1;
    while (!(answer % 3) || (answer + "").includes("3")) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(10));
console.log(solution(15));
console.log(solution(40));
