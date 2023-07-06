const solution = (num_list) =>
  num_list.reduce((a, v) => (num_list.length > 10 ? a + v : a * v));

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));
