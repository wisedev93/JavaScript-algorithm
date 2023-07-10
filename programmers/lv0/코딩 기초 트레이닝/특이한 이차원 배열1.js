// const solution = (n) => // lack of clarity
//   Array.from({ length: n })
//     .fill(0)
//     .map((_, i) => {
//       const tempArr = [];
//       for (let j = 0; j < n; j++) {
//         tempArr.push(+(j === i));
//       }
//       return tempArr;
//     });

function solution(n) {
  const arr = Array.from({ length: n }).fill(0);
  const answer = arr.map((_, i) => {
    const tempArr = [];
    for (let j = 0; j < n; j++) {
      tempArr.push(+(j === i));
    }
    return tempArr;
  });

  return answer;
}

console.log(solution(3));
