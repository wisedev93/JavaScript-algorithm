const solution = ([...my_string]) =>
  my_string.map((v) => (v < "a" ? v.toLowerCase() : v.toUpperCase())).join("");

console.log(solution("cccCCC"));
console.log(solution("abCdEfgHlj"));
