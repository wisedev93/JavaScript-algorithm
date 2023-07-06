const solution = (strArr) =>
  strArr.map((v, i) => (i % 2 ? v.toUpperCase() : v.toLowerCase()));

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
