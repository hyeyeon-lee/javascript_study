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
