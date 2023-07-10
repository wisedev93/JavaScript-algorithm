const solution = (str_list, ex) =>
  str_list.reduce((a, v) => (!v.includes(ex) ? (a += v) : (a += "")), "");

console.log(solution(["abc", "def", "ghi"], "ef"));
console.log(solution(["abc", "bbc", "cbc"], "c"));
