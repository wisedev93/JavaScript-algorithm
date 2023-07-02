function solution(my_string) {
  const arr = Array.from({ length: 52 }, () => 0);
  for (const i in arr) {
    for (const v of my_string) {
      console.log(
        "🚀 ~ file: 문자 개수 세기.js:6 ~ solution ~ i + 65:",
        i + 65,
        v.charCodeAt()
      );
      if (+(i + 65) === +v.charCodeAt()) {
        console.log("hi");
      }
    }
  }
  console.log(arr);
}

console.log(solution("Programmers"));
