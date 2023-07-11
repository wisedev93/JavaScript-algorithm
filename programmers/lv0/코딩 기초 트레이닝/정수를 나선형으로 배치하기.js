function solution(n) {
  const answer = new Array(n);
  // when using .fill(new Array(n)) method, why each items are reference copied?
  for (let i = 0; i < n; i++) {
    answer[i] = new Array(n);
  }
  let x = 0;
  let y = 0;
  let cnt = 1;
  const flags = ["r", "d", "l", "u"];
  let flag = flags[0];
  while (cnt <= n ** 2) {
    // if (y < n - 1) {
    //   flag = flags[0];
    // } else if (x < n - 1) {
    //   flag = flags[1];
    // } else if (x >= n - 1) {
    //   flag = flags[2];
    // }
    // need flag controll
    answer[x][y] = cnt;
    console.log(flag);
    if (flag === "r") {
      y++;
    } else if (flag === "d") {
      x++;
    } else if (flag === "l") {
      y--;
    } else if (flag === "u") {
      x--;
    }
    cnt++;
  }

  return answer;
}

console.log(solution(4));
console.log(solution(5));
