const solution = (my_string, alp) =>
  my_string.replaceAll(alp, alp.toUpperCase());

console.log(solution("programmers", "p"));
