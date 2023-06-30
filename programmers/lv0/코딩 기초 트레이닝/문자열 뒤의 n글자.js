const solution = ([...my_string], n) =>
  my_string.reverse().splice(0, n).reverse().join("");

console.log(solution("ProgrammerS123", 11));
