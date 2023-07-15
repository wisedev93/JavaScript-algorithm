const solution = (bin1, bin2) =>
  (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

console.log(solution("10", "11"));
console.log(solution("101", "11"));
