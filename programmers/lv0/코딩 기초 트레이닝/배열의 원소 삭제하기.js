const solution = (arr, delete_list) =>
  arr.filter((v) => !delete_list.includes(v));

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43]));
