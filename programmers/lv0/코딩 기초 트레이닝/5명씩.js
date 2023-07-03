const solution = (names) => names.filter((_, i) => !(i % 5));

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
