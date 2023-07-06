// const solution = (my_string) => my_string.split(" ").filter((v) => v);  // "" is falsy don't use (v) => v!!
const solution = (my_string) => my_string.split(" ").filter((v) => v !== "");

console.log(solution(" i    love  you"));
