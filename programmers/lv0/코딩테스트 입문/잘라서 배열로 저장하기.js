function solution(my_str, n) {
  const answer = [];
  for (let i = 0; i <= my_str.length; i += n) {
    if (my_str.slice(i, i + n) !== "") {
      answer.push(my_str.slice(i, i + n));
    }
  }
  return answer;
}
console.log(solution("abc1Addfggg4556b", 6));
console.log(solution("abcdef123", 3));
