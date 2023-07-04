// function solution(todo_list, finished) {
//   const answer = [];
//   finished.forEach((v, i) => {
//     if (!v) {
//       answer.push(todo_list[i]);
//     }
//   });
//   return answer;
// }

const solution = (todo_list, finished) =>
  todo_list.filter((_, i) => !finished[i]);

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
