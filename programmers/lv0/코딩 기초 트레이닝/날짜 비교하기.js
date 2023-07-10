function solution([y1, m1, d1], [y2, m2, d2]) {
  if (y1 > y2) {
    return 0;
  } else if (y1 < y2) {
    return 1;
  } else {
    if (m1 < m2) {
      return 1;
    } else if (m1 === m2) {
      if (d1 < d2) {
        return 1;
      }
    }
  }

  return 0;
}

// const solution = (date1, date2) => +(new Date(date1) < new Date(date2));

console.log(solution([2021, 12, 28], [2021, 12, 29]));
console.log(solution([1024, 10, 24], [1024, 10, 24]));
console.log(solution([10000, 12, 15], [0, 12, 17]));
console.log(solution([2022, 3, 29], [2022, 4, 1]));
console.log(solution([2021, 12, 31], [2022, 1, 1]));
