function solution(num_list) {
  const even = num_list.reduce((acc, v, i) => acc + (i % 2 ? v : 0), 0);
  const odd = num_list.reduce((acc, v, i) => acc + (i % 2 ? 0 : v), 0);

  return even > odd ? even : odd;
}

console.log(solution([4, 2, 6, 1, 7, 6]));
