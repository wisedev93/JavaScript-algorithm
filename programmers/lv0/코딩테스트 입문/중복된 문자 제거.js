// const solution = ([...my_string]) => my_string.reduce((a, v) => a + (!a.includes(v) ? v : ""), "");

const solution = (my_string) => [...new Set(my_string)].join("");

console.log(solution("people"));
console.log(solution("We are the world"));
