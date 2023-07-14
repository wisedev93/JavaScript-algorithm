const solution = (num, k) => (" " + num).split("").indexOf(k + ""); // num.toString(), num + "" in this case which one is better?

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
