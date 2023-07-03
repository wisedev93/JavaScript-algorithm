// function solution(my_string) {
//   const arr = Array.from({ length: 52 }).fill(0);
//   for (const v of my_string) {
//     if ("A" <= v && v <= "Z") {
//       arr[v.charCodeAt() - "A".charCodeAt()]++;
//     } else if ("a" <= v && v <= "z") {
//       arr[v.charCodeAt() - "a".charCodeAt() + 26]++;
//     }
//   }
//   return arr;
// }

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function solution(my_string) {
  const answer = new Array(52).fill(0);
  for (const v of my_string) {
    answer[alphabet.indexOf(v)]++;
  }
  return answer;
}

console.log(solution("Programmers"));
