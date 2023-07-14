function solution(strArr) {
  strArr.sort((a, b) => b.length - a.length);
  const answer = new Array(strArr[0].length).fill(0);
  //   const answer = Array.from({ strArr[0].length }).fill(0); // which one is better?
  strArr.forEach((v) => {
    answer[v.length - 1]++;
  });

  answer.sort((a, b) => b - a);
  return answer[0];
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
