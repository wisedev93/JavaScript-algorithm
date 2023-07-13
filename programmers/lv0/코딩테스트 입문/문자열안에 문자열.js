const solution = (str1, str2) => (str1.includes(str2) ? 1 : 2);

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));
console.log(solution("AbcAbcA", "AAA"));
