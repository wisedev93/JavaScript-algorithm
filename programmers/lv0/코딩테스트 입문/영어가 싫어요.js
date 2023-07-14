const strToNum = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// const solution = (numbers) => +strToNum.reduce((a, v, i) => a.replaceAll(v, i), numbers); // lack of clarity

const solution = (numbers) => {
  strToNum.forEach((v, i) => {
    numbers = numbers.replaceAll(v, i);
  });

  return +numbers;
};

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
