function solution(myString, pat) {
  let answer = 0;
  const [...arr] = myString;
  //   const arr = myString.split("");
  arr.forEach((v, i) => {
    if (v === pat[0]) {
      const tempArr = myString.slice(i, i + pat.length);
      if (tempArr === pat) {
        answer += 1;
      }
    }
  });

  return answer;
}

console.log(solution("aaaa", "aa"));
