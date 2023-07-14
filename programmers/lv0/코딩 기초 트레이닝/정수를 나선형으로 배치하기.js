// function solution(n) {
//   const answer = Array.from(new Array(n), () => new Array(n).fill(0));
//   // if not using .fill(0) method than value will be undefined, so which one is better? 0 or undefined?
//   // when using new Array(n).fill(new Array(n)), why each items are reference copied?

//   let x = 0;
//   let y = -1;
//   let cnt = 1;
//   const flags = ["r", "d", "l", "u"];
//   let idx = 0;
//   let flag = flags[idx];

//   const setNextFlag = () => {
//     idx++;
//     flag = flags[idx % flags.length];
//   };

//   while (cnt <= n ** 2) {
//     if (flag === "r") {
//       if (y < n - 1 && answer[x][y + 1] === 0) {
//         y++;
//       } else {
//         setNextFlag();
//       }
//     }
//     if (flag === "d") {
//       if (x < n - 1 && answer[x + 1][y] === 0) {
//         x++;
//       } else {
//         setNextFlag();
//       }
//     }
//     if (flag === "l") {
//       if (y > 0 && answer[x][y - 1] === 0) {
//         y--;
//       } else {
//         setNextFlag();
//       }
//     }
//     if (flag === "u") {
//       if (x > 0 && answer[x - 1][y] === 0) {
//         x--;
//       } else {
//         setNextFlag();
//         y++;
//       }
//     }
//     answer[x][y] = cnt;
//     cnt++;
//   }

//   return answer;
// }

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(n) {
  const answer = Array.from(new Array(n), () => new Array(n).fill(0));
  // if not using .fill(0) method than value will be undefined, so which one is better? 0 or undefined?
  // when using new Array(n).fill(new Array(n)), why each items are reference copied?
  let x = 0;
  let y = 0;
  let idx = 0;
  let cnt = 1;
  let dx = x + directions[idx][0];
  let dy = y + directions[idx][1];

  while (cnt <= n * n) {
    answer[x][y] = cnt;
    dx = x + directions[idx][0];
    dy = y + directions[idx][1];

    if (dx >= n || dx < 0 || dy >= n || dy < 0 || answer[dx][dy] !== 0) {
      idx = (idx + 1) % 4;
      dx = x + directions[idx][0];
      dy = y + directions[idx][1];
    }

    x = dx;
    y = dy;
    cnt++;
  }
  return answer;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
