"use strict";

// Javascript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

// synchronous: 정해진 순서에 맞게 실행
// asynchronous: 언제 실행될지 모름
// callback function: 전달해준 함수를 나중에 불러줘

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000); // 브라우저에게 요청(browser api)
console.log("3");
