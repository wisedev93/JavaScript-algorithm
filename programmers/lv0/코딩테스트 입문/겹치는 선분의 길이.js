function solution(lines) {
  lines.sort((a, b) => a[0] - b[0]);
  console.log(lines);
  for (let i = 0; i < lines.length; i++) {
    for (let j = i; j < lines.length; j++) {
      console.log(lines[i], lines[j]);
    }
  }
  let answer = 0;

  return answer;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
