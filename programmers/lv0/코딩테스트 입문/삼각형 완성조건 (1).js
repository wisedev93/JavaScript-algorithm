function solution(slides) {
  slides.sort((a, b) => a - b);
  const [a, b, c] = slides;

  return a + b > c ? 1 : 2;
}

console.log(solution([1, 2, 3]));
