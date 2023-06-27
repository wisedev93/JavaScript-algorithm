function solution(a, b) {
  const x = +(a.toString() + b.toString());
  const y = +(b.toString() + a.toString());
  return x >= y ? x : y;
}
