function solution(str_list) {
  for (const i in str_list) {
    if (str_list[+i] === "l") {
      return str_list.slice(0, +i);
    }
    if (str_list[+i] === "r") {
      return str_list.slice(+i + 1);
    }
  }
  return [];
}

console.log(solution(["u", "u", "l", "r"]));
console.log(solution(["i"]));
