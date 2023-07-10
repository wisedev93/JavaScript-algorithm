// const solution = (board, k) => board.reduce((a, v, i) => a + v.reduce((ac, va, j) => ac + (i + j <= k ? va : 0), 0), 0); // lack of clarity

function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);
