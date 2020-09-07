// Don't give up
// 포기하지 마세요

// 1. 함수 선언 & 호출
// 함수 선언: 선언만 해서는 실행이 되지 않는다
function doSomething(add) {
  console.log(add);
  const result = add(3, 6); // 전달받은 함수 add 호출
  console.log(result);
}
// 2. 함수 종류 (리턴값이 있거나, 없거나))
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출, 전달
// 함수(): 괄호를 붙여줘야 호출됨, 괄호를 붙이지 않으면 함수 자체
doSomething(add);
// doSomething(add());
// add() 호출 후 doSomething이 호출되기 때문에 sum이 출력됨

const result = add(1, 3);
console.log(result);

const addFun = add;
console.log(addFun);
console.log(addFun()); //NaN
console.log(addFun(3, 4));
