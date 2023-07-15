function solution(array, n) {
  array.sort((a, b) => b - a);
  let sub = Infinity;
  let answer = 0;

  array.forEach((v) => {
    let tempSub = n - v < 0 ? v - n : n - v;
    if (tempSub <= sub) {
      sub = tempSub;
      answer = v;
    }
  });

  return answer;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([1, 2, 3], 2));
console.log(solution([2, 3, 4], 2));
console.log(solution([1, 4, 2, 1], 3));
