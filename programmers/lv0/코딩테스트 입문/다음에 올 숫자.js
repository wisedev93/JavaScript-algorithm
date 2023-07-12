// const solution = (common) => common[2]-common[1] === common[1] - common[0] ? common.pop() + common[1] - common[0] : common.pop() * (common[2] / common[1])  // lack of clarity

function solution(common) {
  const [a, b, c] = common;
  const lastValue = common[common.length - 1];
  if (c - b === b - a) {
    return lastValue + b - a;
  } else if (c - b !== b - a) {
    return lastValue * (c / b);
  }
}
console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([3, 6, 12]));
console.log(solution([1, 4, 7]));
