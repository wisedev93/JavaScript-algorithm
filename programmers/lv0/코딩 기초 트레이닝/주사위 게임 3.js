const getSize = (arr) => new Set(arr).size;

function solution(...rest) {
  let answer;
  const arr = rest;
  const size = getSize(arr);
  let p, q;
  if (size === 1) {
    answer = arr[0] * 1111;
  } else if (size === 2) {
    arr.sort((a, b) => b - a);
    if (arr[2] === arr[3]) {
      p = arr[0];
      q = arr[2];
      answer = (p + q) * (p - q);
    } else {
      p = arr[0];
      q = arr[3];
      answer = (10 * p + q) ** 2;
    }
  } else if (size === 3) {
    const subArr = arr.splice(1);
    //정렬이 잘못된다~
    let res = 1;
    subArr.forEach((v) => {
      if (v !== arr[0]) {
        res *= v;
      }
    });
    answer = res;
  } else {
    arr.sort((a, b) => a - b);
    answer = arr[0];
  }
  return answer;
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
