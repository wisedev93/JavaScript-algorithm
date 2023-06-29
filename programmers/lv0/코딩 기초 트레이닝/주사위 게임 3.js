const getSize = (arr) => new Set(arr).size;
const conunt = (arr, num) => arr.filter((v) => v === num).length;

function solution(...rest) {
  const arr = rest.sort((a, b) => b - a);
  const size = getSize(arr);
  let p, q;

  if (size === 2) {
    if (arr[1] === arr[2]) {
      const cnt = conunt(arr, arr[0]);
      p = cnt > 1 ? arr[0] : arr[3];
      q = cnt > 1 ? arr[3] : arr[0];
      return (10 * p + q) ** 2;
    } else {
      p = arr[0];
      q = arr[3];
      return (p + q) * (p - q);
    }
  } else if (size === 3) {
    let res = 1;
    arr.forEach((v) => {
      const vCnt = conunt(arr, v);
      if (vCnt === 1) {
        res *= v;
      }
    });
    return res;
  }
  return size === 1 ? arr[0] * 1111 : arr[arr.length - 1];
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
