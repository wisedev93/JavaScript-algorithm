function solution(A, B) {
  if (A === B) {
    return 0;
  } else {
    const distance = B.lastIndexOf(A[0]);
    const reverseDistance = B.length - distance;
    const left = A.slice(distance) + A.slice(0, distance);
    const right = A.slice(-distance) + A.slice(0, -distance);
    if (left === B || right === B) {
      return distance < reverseDistance ? distance : reverseDistance;
    } else {
      return -1;
    }
  }
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));
console.log(solution("abc", "bca"));
console.log(solution("bbbc", "bbbc"));
console.log(solution("abca", "aabc"));
console.log(solution("abca", "aabc"));
