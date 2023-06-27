function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    const [...arr] = i.toString();
    let res = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0" || arr[i] === "5") {
        res = true;
      } else {
        res = false;
        break;
      }
    }
    if (res) {
      answer.push(i);
    }
  }

  return answer.length > 0 ? answer : [-1];
}

console.log(solution(5, 555));
