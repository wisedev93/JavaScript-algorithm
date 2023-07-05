function solution(arr) {
  arr.forEach((v, i) => {
    if (v >= 50 && !(v % 2)) {
      arr[i] /= 2;
    }
    if (v < 50 && v % 2) {
      arr[i] *= 2;
    }
  });
  return arr;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
