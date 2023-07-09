function solution(arr, flag) {
  const answer = [];
  flag.forEach((v, i) => {
    if (v) {
      answer.push(...Array.from({ length: arr[i] * 2 }).fill(arr[i]));
    } else {
      answer.splice(answer.length - arr[i]);
    }
  });
  return answer;
}

// const solution = (arr, flag) =>
//   arr.reduce(
//     (a, v, i) =>
//       flag[i] ? a.concat(new Array(v * 2).fill(v)) : a.slice(0, -v),
//     []
//   );

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
