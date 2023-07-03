const solution = ([...my_string], indices) =>
  my_string
    .filter((v, i) => {
      if (!indices.includes(i)) {
        return v;
      }
    })
    .join("");

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
