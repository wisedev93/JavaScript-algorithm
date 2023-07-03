function solution(num_list, n) {
  const subArr = num_list.slice(0, n);
  num_list.splice(0, n);
  return [...num_list, ...subArr];
}

console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));
