const solution = ([...before], [...after]) =>
  before.sort().join("") === after.sort().join("") ? 1 : 0;

console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));
