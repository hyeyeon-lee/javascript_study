// Function
// - foundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

// 자바스크립트 특성 상 타입이 정해져 있지 않아
// 함수만 보고는 파라미터, 리턴 타입을 알 수 없음
function log(message) {
  console.log(message);
}

log("hyeyeon hello!!!");
log(1234);

// typescript 연습은 https://www.typescriptlang.org/
/* 
function log(message: string): number {
  console.log(message);
  return 0;
}
 */

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}

const hyeyeon = { name: "hyeyeon" };
changeName(hyeyeon);
console.log(hyeyeon);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "zz") {
  /*  
  if (from === undefined) {
    from = "unknown";
  }
  */

  console.log(`${message} by ${from}`);
}
showMessage("Hi!!!!");

// 4. Rest parameters (added in ES6)
// arg = 세개가 들어있는 배열
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "hyeyeon");

// 5. Local scope
// 안에서는 밖을 볼 수 있지만 밖에서는 안을 볼 수 없다.
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //console.log(childMessage);
  // return 타입이 없다 ===
  // return undefined; (생략 가능)
}
printMessage();
//console.log(message); // boom

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expresstion
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the excution reaches it.

const print = function () {
  // anonymous function
  console.log("print");
};
/* const print = function print() {
  // named function
  console.log("print");
}; */

print();
const printAgain = print;
printAll();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 함수를 전달해서 상황에 맞는 함수 사용(yes, no)
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
const printNo = function print() {
  console.log("no!");
  //print(); //recursions 재귀, 피보나치, 반복되는 평균 등
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
/* 
const simplePrint = function () {
  console.log("simplePrint!");
};
 */
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수 바로 실행
function hello() {
  console.log("IIFE");
}

hello();
// ===
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
  }
}

/* 
모범 답안
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default: 
      throw Error('unknown command')
  }
}
 */
