const solution = (order) =>
  order.reduce((a, v) => a + (v.includes("latte") ? 5000 : 4500), 0);

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
console.log(solution(["americanoice", "americano", "iceamericano"]));
