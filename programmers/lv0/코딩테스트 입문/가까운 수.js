function solution(array, n) {
  array.sort((a, b) => b - a);

  let sub = 100;
  let answer = 0;

  array.forEach((v) => {
    let tempSub = n - v < 0 ? v - n : n - v;
    if (tempSub < sub) {
      sub = tempSub;
      answer = v;
    }
  });

  return answer;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
