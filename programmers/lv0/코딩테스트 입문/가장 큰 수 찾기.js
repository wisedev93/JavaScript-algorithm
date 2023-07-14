// const solution = (array) => [Math.max(...array), array.indexOf(Math.max(...array))]; // loak of clarity and high time complexity

function solution(array) {
  let max = 0;
  let idx = 0;

  array.forEach((v, i) => {
    if (v > max) {
      max = v;
      idx = i;
    }
  });

  return [max, idx];
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
