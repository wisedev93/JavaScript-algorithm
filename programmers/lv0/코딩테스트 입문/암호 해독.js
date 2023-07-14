const solution = ([...cipher], code) =>
  cipher.filter((_, i) => !((i + 1) % code)).join("");

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
