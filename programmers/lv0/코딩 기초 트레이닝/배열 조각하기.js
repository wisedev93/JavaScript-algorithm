function solution(arr, query) {
  const answer = arr;
  query.forEach((v, i) => {
    if (i % 2 === 0) {
      answer.splice(v + 1);
    } else {
      answer.splice(0, v);
    }
  });

  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
console.log(solution([1, 3, 5, 7, 9, 11], [5, 0, 4, 1, 2]));
