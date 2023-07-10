function solution(picture, k) {
  const answer = [];
  picture.forEach((str) => {
    let tempStr = "";
    for (const v of [...str]) {
      tempStr += v.repeat(k);
    }
    for (let i = 0; i < k; i++) {
      answer.push(tempStr);
    }
  });

  return answer;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
