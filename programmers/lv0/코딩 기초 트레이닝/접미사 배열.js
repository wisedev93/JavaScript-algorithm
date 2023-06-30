function solution(my_string) {
  const answer = [];
  for (let i in my_string) {
    answer.push(my_string.slice(i));
  }
  return answer.sort();
}

// const solution = ([...my_string]) =>
//   my_string.map((_, i) => my_string.slice(i).join("")).sort();

console.log(solution("banana"));
