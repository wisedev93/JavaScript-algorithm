const solution = (my_string, index_list) =>
  index_list.map((v) => my_string[v]).join("");

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
