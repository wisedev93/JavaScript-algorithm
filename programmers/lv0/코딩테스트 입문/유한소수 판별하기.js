function getGCD(n, m) {
  [n, m] = n > m ? [n, m] : [m, n];
  while (m != 0) {
    [n, m] = [m, n % m];
  }
  return n;
}

// function solution(a, b) {
//   if (a % b) {
//     b /= getGCD(a, b);
//     for (let i = 2; i <= b; i++) {
//       if (!(b % i) && getGCD(2, i) !== 2 && getGCD(5, i) !== 5) {
//         return 2;
//       }
//     }
//   }
//   return 1;
// }

function solution(a, b) {
  b /= getGCD(a, b);
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(30, 6));
console.log(solution(77, 7));
console.log(solution(11, 22));
console.log(solution(12, 21));
