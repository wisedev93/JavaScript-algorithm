const solution = ([...my_string]) =>
  my_string.map((v) => (v < "l" ? "l" : v)).join("");

console.log(solution("abcdevwxyz"));
console.log(solution("jjnnllkkmm"));
