// const solution = ([...myString]) =>
//   myString
//     .map((v) => (v === "a" || v === "A" ? "A" : v.toLowerCase()))
//     .join("");

// const solution = (myString) =>
//   [...myString.toLowerCase()].map((v) => (v === "a" ? "A" : v)).join("");

const solution = (myString) => myString.toLowerCase().replaceAll("a", "A");

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));
