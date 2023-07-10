const solution = ([...num_list]) => num_list.reduce((a, v) => (a += +v), 0);

console.log(solution("123456789"));
