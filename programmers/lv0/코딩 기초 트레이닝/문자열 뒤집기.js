function solution([...my_string], s, e) {
  const subStr = my_string.slice(s, e).reverse().join("");
  my_string.forEach((v, i) => {});
  return subStr;
}

console.log(solution("Progra21Sremm3", 6, 12));
