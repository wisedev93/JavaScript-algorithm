const solution = (num_list) => num_list.sort((a, b) => a - b).splice(0, 5);
// const solution = (num_list) => num_list.sort((a, b) => a - b).slice(0, 5); // Wihich one is better?

console.log(solution([12, 4, 15, 46, 38, 1, 14]));
