function solution(A, B) {
  if (A === B) {
    return 0;
  } else {
    for (let i = 0; i < B.length; i++) {
      const newStr = A.slice(-i) + A.slice(0, -i);
      if (newStr === B) {
        return i;
      }
    }
  }
  return -1;
}

// const solution = (A, B) => (B + B).indexOf(A);

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
console.log(solution("abc", "bca"));
console.log(solution("bbbc", "bbbc"));
console.log(solution("abca", "aabc"));
console.log(solution("abcdef", "defabc"));
