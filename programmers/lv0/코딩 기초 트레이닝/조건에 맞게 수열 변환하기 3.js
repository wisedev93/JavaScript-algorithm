const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
