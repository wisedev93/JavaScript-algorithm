function solution(arr, queries) {
  const answer = arr;
  queries.forEach(([s, e, k]) => {
    answer.map((v, i) => {
      if (s <= i && i <= e)
        if (i % k === 0) {
          arr[i] += 1;
        }
    });
  });
  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
