const solution = (x1, x2, x3, x4) => (x1 || x2) && (x3 || x4);

console.log(solution(true, false, false, false));
