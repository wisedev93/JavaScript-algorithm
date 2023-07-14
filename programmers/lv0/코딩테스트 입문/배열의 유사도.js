const solution = (s1, s2) => s1.filter((v) => s2.includes(v)).length;

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], ["m", "dot"]));
