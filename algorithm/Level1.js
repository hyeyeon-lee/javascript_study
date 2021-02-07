// Programmers
// Level 1

// 제일 작은 수 제거하기 (2021.02.07)
function solution(arr) {
  var answer = [];

  var min = Math.min(...arr);

  var minIdx = arr.indexOf(min);
  arr.splice(minIdx, 1);
  answer = arr;

  if (answer.length <= 0) answer.push(-1);

  return answer;
}

// 하샤드의 수 (2021.02.07)
function solution(x) {
  var answer = true;

  var arr = String(x).split("");
  var sum = 0;
  arr.forEach((num) => {
    sum += Number(num);
  });

  if (x % sum == 0) answer = true;
  else answer = false;

  return answer;
}
