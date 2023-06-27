function solution(str1, str2) {
  var [...answer] = str1.map((v, i) => v + str2[i].join(""));

  return answer;
}
