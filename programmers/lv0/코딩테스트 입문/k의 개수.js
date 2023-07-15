// const solution = (i, j, k) => new Array(j - i + 1).fill().map((v, idx) => v + idx).join("").split(k + "").length - 1; // lack of clarity

function solution(i, j, k) {
  let answer = 0;

  for (let idx = i; idx <= j; idx++) {
    const str = idx + "";
    for (const v of str) {
      if (v === k + "") {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(1, 13, 1));
