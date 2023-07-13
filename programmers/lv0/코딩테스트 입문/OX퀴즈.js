function solution(quiz) {
  const answer = quiz.map((v) => {
    const [a, op, b, _, res] = v.trim().split(" ");
    // op === "+" ? +a + +b : +a - +b === +res 틀렸다고 나옴
    // (op === "+" ? +a + +b : +a - +b) === +res 통과
    if ((op === "+" ? +a + +b : +a - +b) === +res) {
      return "O";
    } else {
      return "X";
    }
  });
  return answer;
}

console.log(solution(["-3 - -3 = 6 "]));
console.log(solution(["-1 - -3 = 2"]));
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
