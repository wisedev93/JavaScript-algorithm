function solution(arr) {
  const stk = [arr[0]];
  let i = 1;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else {
      stk.pop();
    }
  }
  return stk;
}
console.log(solution([4, 4]));
