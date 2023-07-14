function solution(my_string) {
  const [a, op, b, ...rest] = my_string.split(" ");
  let answer = op === "+" ? +a + +b : +a - +b;
  while (rest.length > 0) {
    const newOp = rest.shift();
    const newA = rest.shift();
    answer = newOp === "+" ? +answer + +newA : +answer - +newA;
  }

  return answer;
}

console.log(solution("3 + 114"));
console.log(solution("3 + -4"));
console.log(solution("3 + -4 - 7"));
