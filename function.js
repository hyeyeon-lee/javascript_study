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
  console.log(childMessage);
}
printMessage();
//console.log(message); // boom
