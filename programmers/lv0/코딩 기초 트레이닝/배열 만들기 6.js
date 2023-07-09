function solution(arr) {
  const stk = [arr[0]];
  let idx = 1;

  while (idx < arr.length) {
    if (stk[stk.length - 1] === arr[idx]) {
      stk.pop();
    } else {
      stk.push(arr[idx]);
    }
    idx += 1;
  }
  return stk.length > 0 ? stk : [-1];
}

console.log(solution([0, 1, 1, 1, 0]));
console.log(solution([0, 1, 0, 1, 0]));
console.log(solution([0, 1, 1, 0]));
