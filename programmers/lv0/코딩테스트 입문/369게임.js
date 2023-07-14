// const solution = (order) => ("1" + order).replaceAll("0", "1").split("").reduce((a, v) => (a += !(+v % 3) ? 1 : 0), 0); // lack of clarity

function solution(order) {
  const convertStr = ("1" + order).replaceAll("0", "1");
  const convertArr = convertStr.split("");
  const answer = convertArr.reduce((a, v) => (a += !(+v % 3) ? 1 : 0), 0);

  return answer;
}

console.log(solution(3));
console.log(solution(29423));
