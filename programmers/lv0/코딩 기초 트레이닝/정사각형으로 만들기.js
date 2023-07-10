function solution(arr) {
  const [n, m] = [arr.length, arr[0].length];
  const sub = n < m ? m - n : n - m;
  if (n < m) {
    for (let i = 0; i < sub; i++) {
      arr.push(Array.from({ length: m }).fill(0));
    }
    return arr;
  } else if (n > m) {
    arr.forEach((v) => {
      for (let i = 0; i < sub; i++) {
        v.push(0);
      }
    });
    return arr;
  } else {
    return arr;
  }
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
);
