function solution(arr) {
  const s = arr.indexOf(2);
  const e = arr.lastIndexOf(2);
  return s === -1 ? [-1] : arr.slice(s, e + 1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1]));
