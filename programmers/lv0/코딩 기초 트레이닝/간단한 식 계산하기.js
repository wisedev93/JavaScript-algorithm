const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return operations[op](+a, +b);
}

console.log(solution("43 + 12"));

// const solution = eval;
