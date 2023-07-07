const solution = ([...myString], pat) =>
  +myString
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat);

console.log(solution("ABBAA", "AABB"));
console.log(solution("ABAB", "ABAB"));
