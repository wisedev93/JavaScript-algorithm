function solution(score) {
  const sumScore = score.map((v) => v[0] + v[1]);

  const answer = sumScore.map((v) => {
    let cnt = 1;
    sumScore.forEach((other) => {
      if (v < other) {
        cnt++;
      }
    });
    return cnt;
  });
  return answer;
}

// const solution = (score) => score.map(([eng, math]) => eng + math).map((v) => score.filter(([eng, math]) => v < eng + math).length + 1); // lack of clarity and high time complexity
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
