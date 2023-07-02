const solution = ([...my_string], m, c) =>
  my_string.filter((_, i) => i % m === c - 1).join("");

// function solution(my_string, m, c) {
//   let answer = "";
//   for (const i in my_string) {
//     if (i % m === 0) {
//       answer += my_string.slice(i, i + m)[c - 1];
//     }
//   }

//   return answer;
// }

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
