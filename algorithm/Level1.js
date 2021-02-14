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

// 크레인 인형뽑기 게임 (2021.02.09)
function solution(board, moves) {
  var answer = 0;
  var result_arr = [];

  for (var i = 0; i < moves.length; i++) {
    var move = moves[i];
    for (var j = 0; j < board.length; j++) {
      var b = board[j];
      if (b[move - 1] > 0) {
        if (result_arr[result_arr.length - 1] == b[move - 1]) {
          answer += 2;
          result_arr.pop();
        } else {
          result_arr.push(b[move - 1]);
        }
        b.splice(move - 1, 1, 0);
        break;
      }
    }
  }

  return answer;
}

// 두 정수 사이의 합 (2021.02.09)
function solution(a, b) {
  var answer = 0;
  var bg = a > b ? a : b;
  var sm = a + b - bg;

  for (var i = sm; i <= bg; i++) answer += i;
  return answer;
}

// 문자열 다루기 기본 (2021.02.14)
function solution(s) {
  var reg = new RegExp(/^\d{4}(\d{2})?$/, "i");
  return reg.test(s);
}

// 수박수박수박수박수박수? (2021.02.14)
function solution(n) {
  var answer = "";
  var arr = new Array(n);
  answer = [...arr].map((item, idx) => (idx % 2 == 0 ? "수" : "박")).join("");
  return answer;
}

// 같은 숫자는 싫어 (2021.02.14)
function solution(arr) {
  var answer = [];

  answer = arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] !== cur) acc.push(cur);
    return acc;
  }, []);

  return answer;
}
