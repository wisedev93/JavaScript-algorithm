function solution(arr, k) {
  const answer = [];
  arr.forEach((v) => {
    if (answer.length < k) {
      if (!answer.includes(v)) {
        answer.push(v);
      }
    }
  });

  return answer.length < k
    ? answer.concat(Array.from({ length: k - answer.length }).fill(-1))
    : answer;
}

// const solution = (arr, k) => new Set(arr).size < k ? [...new Set(arr)].concat(Array.from({ length: k - new Set(arr).size }).fill(-1)) : [...new Set(arr)].slice(0, k);
// 가독성이 낮다

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
