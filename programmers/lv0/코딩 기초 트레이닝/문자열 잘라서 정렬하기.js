const solution = (myString) =>
  myString
    .split("x")
    .filter((v) => v !== "")
    // .filter((v) => v) // "" is falsy don't use (v) => v!!
    .sort();

console.log(solution("axbxcxdx"));
console.log(solution("dxccxbbbxaaaa"));
