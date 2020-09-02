"use strict";

// Promise is a Javascript object for asynchronous operation.
// keyword: state, producer/consumer
// state: pending(수행중), -> fullfilled(성공) or rejected(실패)
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files...)
  // 네트워크에서 데이터를 받아오거나, 큰 파일을 읽기 등...
  // 시간이 걸리는 일은 비동기
  console.log("doing something...");
  // promise가 만들어진 순간 executor가 바로 실행되는 것을 알 수 있음
  // 유의점
  // when new Promise is created, the executor runs automatically.
  setTimeout(() => {
    resolve("hyeyeon");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    // then: promise가 정상적으로 수행됐을 때 resolve의 파라미터를 받아서 표시
    // then return promise
    console.log(value);
  })
  .catch((error) => {
    // chaining
    console.log(error);
  }).finally(() => {
	  //성공 실패 상관 없이 실행됨
	  console.log('finally')
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num-1), 1000);
  });
})
.then(num => console.log(num));
  
