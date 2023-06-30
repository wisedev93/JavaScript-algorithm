function solution(my_string, is_suffix) {
  let answer = 0;
  for (const i in my_string) {
    if (my_string[i] === is_suffix[0] && my_string.slice(i) === is_suffix) {
      answer = 1;
    }
  }
  return answer;
}

console.log(solution("banana", "ana"));
