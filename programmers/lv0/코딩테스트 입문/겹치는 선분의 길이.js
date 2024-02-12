// function solution(lines = args) {
//   let answer = 0;

//   let range = [];
//   lines.forEach((element) => {
//     range.push(...element);
//   });

//   let max = Math.max(...range);
//   let minIndex = -Math.min(...range);
//   let cntList = new Array(max + minIndex).fill(0);

//   for (let i = 0; i < lines.length; i++) {
//     for (let j = lines[i][0] + minIndex; j < lines[i][1] + minIndex; j++) {
//       cntList[j]++;
//     }
//   }

//   cntList.forEach((element) => {
//     if (element > 1) {
//       answer++;
//     }
//   });

//   return answer;
// } // lack of clratiy

function solution(lines = args) {
  let range = lines.flat();

  let max = Math.max(...range);
  let minIndex = -Math.min(...range);
  let cntList = new Array(max + minIndex).fill(0);

  lines.forEach(([start, end]) => {
    for (let i = start + minIndex; i < end + minIndex; i++) {
      cntList[i]++;
    }
  });

  return cntList.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

console.log(
  solution([
    [3, 9],
    [0, 1],
    [2, 5],
  ])
); // 2
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8

console.log(
  solution([
    [0, 10],
    [1, 3],
    [4, 7],
  ])
); // 5
console.log(
  solution([
    [1, 3],
    [2, 5],
    [0, 7],
  ])
); // 4
console.log(
  solution([
    [1, 3],
    [4, 7],
    [2, 8],
  ])
); // 4
console.log(
  solution([
    [1, 12],
    [3, 6],
    [2, 4],
  ])
); // 4
