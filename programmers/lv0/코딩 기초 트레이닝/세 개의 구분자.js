function solution(myStr) {
  const separator = ["a", "b", "c"];
  for (const v of separator) {
    myStr = myStr.replaceAll(v, ",");
  }
  const answer = myStr.split(",").filter((v) => v !== "");
  return answer.length > 0 ? answer : ["EMPTY"];
}

// const solution = (myStr) => myStr.match(/[^a-c]+/g) || ["EMPTY"];

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
