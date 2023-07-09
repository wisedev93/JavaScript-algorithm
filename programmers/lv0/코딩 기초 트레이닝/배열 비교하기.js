const compare = (num1, num2) => (num1 === num2 ? 0 : num1 > num2 ? 1 : -1);

function solution(arr1, arr2) {
  const a1l = arr1.length;
  const a2l = arr2.length;

  if (a1l - a2l === 0) {
    return compare(
      arr1.reduce((a, v) => (a += v), 0),
      arr2.reduce((a, v) => (a += v), 0)
    );
  } else {
    return compare(arr1, arr2);
  }
}

// const solution = (arr1, arr2) => arr1.length - arr2.length === 0 ? compare(arr1.reduce((a, v) => (a += v), 0), arr2.reduce((a, v) => (a += v), 0)) : compare(arr1, arr2); // 가독성이 낮다.

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
