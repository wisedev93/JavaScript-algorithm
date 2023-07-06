const solution = (myString, pat) =>
  +myString.toUpperCase().includes(pat.toUpperCase());

console.log(solution("AbCdEfG", "aBc"));
console.log(solution("aaAA", "aaaaa"));
