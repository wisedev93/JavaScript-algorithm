function solution(ineq, eq, n, m) {
  if (ineq + eq === ">=") {
    return +(n >= m);
  } else if (ineq + eq === "<=") {
    return +(n <= m);
  } else if (ineq + eq === ">!") {
    return +(n > m);
  } else {
    return +(n < m);
  }
}
