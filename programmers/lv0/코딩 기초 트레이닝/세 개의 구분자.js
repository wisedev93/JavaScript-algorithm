// function solution(myStr) {
//   let answer = "";
//   let tempStr = "";

//   for (const v of myStr) {
//     if (v !== "a" && v !== "b" && v !== "c") {
//       tempStr += v;
//     } else {
//       answer += tempStr + ",";
//       tempStr = "";
//     }
//   }
//   return answer.split(",").filter((v) => v !== "");
//

function solution(myStr) {
  const separator = ["a", "b", "c"];
  for (const v of separator) {
    myStr.replaceAll(v, "x");
  }
  console.log(myStr);
  //   myStr.filter((v) => v !== "a" && v !== "b" && v !== "c");
}

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
