function solution(num_list) {
  let t1 = 1;
  let t2 = 0;
  num_list.forEach((v) => {
    t1 *= v;
    t2 += v;
  });
  return t1 > t2 ** 2 ? 0 : 1;
}
