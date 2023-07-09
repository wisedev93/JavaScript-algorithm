const solution = (flo) => parseInt(flo);
// const solution = (flo) => Math.floor(flo); // higher time complexity? => more than parseInt
// const solution = (flo) => +flo.toString().split(".")[0]; // higher time complexity? =>  more than Math.floor

console.log(solution(1.42));
console.log(solution(69.32));
