function solution(number) {
  let sum = 0;
  for (const v of number) {
    sum += +v;
  }
  return sum % 9;
}

// const solution = (number) => BigInt(number) % 9n;
console.log(solution("78720646226947352489"));
