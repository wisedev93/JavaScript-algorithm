// const solution = (s) => s.split("").filter((v) => s.indexOf(v) === s.lastIndexOf(v)).sort().join(""); // lack of clarity

function solution(s) {
  const answer = s.split("").filter((v) => s.indexOf(v) === s.lastIndexOf(v));
  answer.sort();
  return answer.join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
