function solution(arr, queries) {
  const res = [];
  queries.forEach(([s, e, k]) => {
    const subArr = arr.slice(s, e + 1);
    const temp = subArr.filter((v) => v > k);
    temp.sort((a, b) => a - b);
    res.push(temp[0] > 0 ? temp[0] : -1);
  });
  return res;
}
