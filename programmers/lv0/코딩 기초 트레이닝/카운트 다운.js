const solution = (start, end) =>
  Array.from({ length: start + 1 - end }, () => start--);

console.log(solution(10, 3));
