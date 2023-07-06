function solution(num_list, cnt = 0) {
  while (!num_list.every((v) => v === 1)) {
    num_list = num_list.map((v) => {
      while (!(v === 1)) {
        cnt++;
        if (v % 2) {
          v = (v - 1) / 2;
        } else {
          v = v / 2;
        }
      }
      return v;
    });
  }
  return cnt;
}

// const solution = (num_list) =>
//   num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);

console.log(solution([12, 4, 15, 1, 14]));
