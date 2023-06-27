const op = {
  "-1": "w",
  1: "s",
  "-10": "d",
  10: "a",
};

function solution(numLog) {
  let res = "";
  let temp = numLog[0];
  numLog.map((v, i) => {
    if (i !== 0) {
      res += op[(temp - v).toString()];

      temp = v;
    }
  });
  return res;
}
