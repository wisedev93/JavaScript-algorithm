function solution(intStrs, k, s, l) {
  const answer = intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
  return answer;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
