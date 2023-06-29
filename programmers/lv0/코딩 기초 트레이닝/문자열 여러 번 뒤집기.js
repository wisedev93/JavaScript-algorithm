function solution([...my_string], queries) {
  for (const [s, e] of queries) {
    const reverseString = my_string.slice(s, e + 1).reverse();
    my_string.splice(s, e - s + 1, ...reverseString);
  }
  return my_string.join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
