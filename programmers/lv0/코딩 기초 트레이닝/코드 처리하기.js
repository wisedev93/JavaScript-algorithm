function solution(code) {
  let res = "";
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== "1" && i % 2 !== mode) {
      res += code[i];
    }
    if (code[i] === "1") {
      mode = +!mode;
    }
  }

  return res.length > 0 ? res : "EMPTY";
}
