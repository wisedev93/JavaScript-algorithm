function solution(arr, queries) {
  queries.map((v) => {
    const [a, b] = [...v];
    const i = arr[a];
    const j = arr[b];
    arr[a] = j;
    arr[b] = i;
  });
  return arr;
}
