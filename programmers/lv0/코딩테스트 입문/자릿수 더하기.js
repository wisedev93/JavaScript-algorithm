// const solution = (n) => n.toString().split("").reduce((a,v) => (a+= +v), 0) // lack of clarity?
function solution(n) {
  const arr = n.toString().split("");
  const answer = arr.reduce((a, v) => (a += +v), 0);

  return answer;
}

console.log(solution(1234));
console.log(solution(930211));
