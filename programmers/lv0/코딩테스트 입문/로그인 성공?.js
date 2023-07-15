// function solution(id_pw, db) {
//   const [id, pw] = id_pw;

//   const idList = db.filter((v) => v[0] === id);

//   for (const v of idList) {
//     if (v[1] === pw) {
//       return "login";
//     } else {
//       return "wrong pw";
//     }
//   }
//   return "fail";
// }

// const solution = (id_pw, db) => db.filter((v) => v[0]=== id_pw[0]).join("").split(",")[1] === id_pw[1] ? "login" : db.filter((v) => v[0]=== id_pw[0]).join("").split(",").length > 1 ? "wrong pw" : "fail" // lack of clarity

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const database = new Map(db);
  return database.has(id)
    ? database.get(id) === pw
      ? "login"
      : "wrong pw"
    : "fail";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
);
console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
);
