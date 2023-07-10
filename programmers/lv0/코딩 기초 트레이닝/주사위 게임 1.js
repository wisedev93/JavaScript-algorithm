// const solution = (a, b) => a % 2 && b % 2 ? a ** 2 + b ** 2 : a % 2 || b % 2 ? 2 * (a + b) : Math.abs(a - b); // lack of clarity

const operations = {
  0: (a, b) => a ** 2 + b ** 2,
  1: (a, b) => 2 * (a + b),
  2: (a, b) => a - b,
};

function solution(a, b) {
  if (a % 2 && b % 2) {
    return operations[0](a, b);
  } else if (a % 2 || b % 2) {
    return operations[1](a, b);
  } else {
    return operations[2](a > b ? a : b, a > b ? b : a);
  }
}

console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));
