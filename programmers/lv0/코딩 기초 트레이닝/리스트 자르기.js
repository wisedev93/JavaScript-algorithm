const operation = {
  1: ([_, b, __], num_list) => num_list.slice(0, b + 1),
  2: ([a, _, __], num_list) => num_list.slice(a),
  3: ([a, b, _], num_list) => num_list.slice(a, b + 1),
  4: ([a, b, c], num_list) =>
    num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

const solution = (n, slicer, num_list) => operation[n](slicer, num_list);

// function solution(n, slicer, num_list) {
//   const [a, b, c] = slicer;
//   switch (n) {
//     case 2: {
//       return num_list.slice(a);
//     }
//     case 3: {
//       return num_list.slice(a, b + 1);
//     }
//     case 4: {
//       return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
//     }
//     default: {
//       return;
//     }
//   }
// }

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [4, 5, 6, 7, 8, 9]));
