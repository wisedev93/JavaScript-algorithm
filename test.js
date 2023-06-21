function solution(arr, queries) {
  const res = [];
  queries.forEach(([s, e, k]) => {
    const subArr = arr.slice(s, e + 1);
    const temp = subArr.filter((v) => v > k).sort();

    res.push(temp[0] > 0 ? temp[0] : -1);
  });
  return res;
}

function solution(arr, queries) {
  const res = [];
  queries.forEach(([s, e, k]) => {
    const subArr = arr.slice(s, e + 1);
    const temp = subArr.filter((v) => v > k);

    if (temp.length === 0) {
      res.push(-1);
    } else {
      const minVal = Math.min(...temp);
      res.push(minVal);
    }
  });
  return res;
}

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
