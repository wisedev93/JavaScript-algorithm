function solution(start, end) {
  return Array.from({ length: end + 1 - start }, () => start++);
}

console.log(solution(3, 10));
