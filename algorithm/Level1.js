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
// 문자열을 정수로 바꾸기 (2021.02.19)
function solution(s) {
  return Number(s);
}

// 두 개 뽑아서 더하기 (2021.03.05)
function solution(numbers) {
  var answer = [];

  for (let i = 0; i <= numbers.length - 2; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) answer.push(sum);
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

// 신규 아이디 추천 (2021.03.07)
function solution(new_id) {
  var answer = new_id;

  answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/[.]+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");

  answer = answer.padEnd(3, answer[answer.length - 1]);

  return answer;
}

// 체육복 (2021.03.13)
function solution(n, lost, reserve) {
  var answer = n;

  for (let i of [...reserve]) {
    if (lost.includes(i)) {
      lost.splice(lost.indexOf(i), 1);
      reserve.splice(reserve.indexOf(i), 1);
    }
  }

  answer = n - lost.length;

  for (let i of lost) {
    let front = i - 1;
    let back = i + 1;

    if (reserve.includes(i)) {
      continue;
    }

    if (front > 0 && reserve.includes(front)) {
      answer++;
      reserve.splice(reserve.indexOf(front), 1);
      continue;
    }

    if (reserve.includes(back) && back <= 30) {
      answer++;
      reserve.splice(reserve.indexOf(back), 1);
      continue;
    }
  }
  return answer;
}

// 문자열 내림차순으로 배치하기 (2021.03.14)
function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    })
    .join("");
}

// 완주하지 못한 선수 (2021.05.16) - 효율성 검증 필요
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (var i = 0; i < completion.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }

  if (answer != "") return answer;
  else return participant[participant.length - 1];
}
