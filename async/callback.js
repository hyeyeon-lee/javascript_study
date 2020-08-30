"use strict";

// Javascript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration

// synchronous: 정해진 순서에 맞게 실행
// asynchronous: 언제 실행될지 모름
// callback function: 전달해준 함수를 나중에 불러줘

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000); // 브라우저에게 요청(browser api)
console.log("3");

// Synchronous callback (동기)
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asychronoous callback (비동기)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "hyeyeon" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hyeyeon") {
        onSuccess({ name: "hyeyeon", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}
