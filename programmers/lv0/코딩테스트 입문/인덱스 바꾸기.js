// const solution = ([...my_string], num1, num2) => my_string.map((v, i) => i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v).join(""); // lack of clratiy

function solution([...my_string], num1, num2) {
  const answer = my_string.map((v, i) => {
    if (i === num1) {
      return my_string[num2];
    } else if (i === num2) {
      return my_string[num1];
    } else {
      return v;
    }
  });

  return answer.join("");
}

console.log(solution("hello", 1, 2));
console.log(solution("i love you", 3, 6));
