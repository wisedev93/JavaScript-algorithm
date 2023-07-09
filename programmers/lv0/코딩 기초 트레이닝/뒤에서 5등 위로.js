const solution = (num_list) => num_list.sort((a, b) => a - b).splice(5); // Wihich one is better?
// const solution = (num_list) => num_list.sort((a, b) => a - b).slice(5);

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
