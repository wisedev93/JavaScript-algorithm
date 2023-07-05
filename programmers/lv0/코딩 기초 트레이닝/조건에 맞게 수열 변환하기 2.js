function isEqaul(arr1, arr2) {
  let res = false;
  if (arr1.length === arr2.length) {
    for (const i in arr1) {
      // res = arr1[+i] === arr2[+i] ? true : false;
      if (arr1[+i] === arr2[+i]) {
        res = true;
      } else {
        return false;
      }
    }
  }
  return res;
}

function getX(arr, cnt) {
  const x = [];
  arr.forEach((v, i) => {
    if (v >= 50 && !(v % 2)) {
      x[i] = v / 2;
    } else if (v < 50 && v % 2) {
      x[i] = v * 2 + 1;
    } else {
      x[i] = v;
    }
  });
  if (isEqaul(x, arr)) {
    return cnt;
  } else {
    return getX(x, cnt + 1);
  }
}

const solution = (arr) => getX(arr, 0);

console.log(solution([1, 2, 3, 100, 99, 98]));
