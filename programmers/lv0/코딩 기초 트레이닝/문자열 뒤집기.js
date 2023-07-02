function solution(my_string, s, e) {
  let answer = "";
  const subStr = [...my_string]
    .slice(s, e + 1)
    .reverse()
    .join("");
  answer = my_string.replace(my_string.slice(s, e + 1), subStr);
  return answer;
}
// function solution([...my_string], s, e) {
//   let subStr = my_string
//     .slice(s, e + 1)
//     .reverse()
//     .join("");
//   my_string.splice(s, e - s + 1, subStr);
//   return my_string.join("");
// }

console.log(solution("Progra21Sremm3", 6, 12));
// console.log(solution("49gh43jOIQvkSH", 5, 5));
