function solution(a, d, included) {
  let answer = 0;
  let v = a;
  included.forEach((b) => {
    if (b) {
      answer += v;
    }
    v += d;
  });

  return answer;
}
