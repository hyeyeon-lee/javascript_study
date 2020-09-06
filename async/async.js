// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  // 오래 걸리는 일은 비동기적으로..
  // 동기: 사용자에게 아무것도 안 보일 수 있다
  return "hyeyeon";
}

// async = return promise = syntactic sugar

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 🍣
// async function 안에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // delay가 끝날 때까지 기다려
  // throw "error"; //try-catch로 잡아주면 됨
  return "🍎";
}

async function getBanana() {
  await delay(1000); // delay가 끝날 때까지 기다려
  return "🍌";
}
/* 
chaining 하는 것보다 더 보기 편함
function getBanana() {
  return delay(3000).then(() => "🍌");
}
 */

async function pickFruits() {
  /* 
// 너무 중첩한 결과 콜백지옥과 같은 현상이 발생함
    return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
   */
  const apple = await getApple();
  const banana = await getBanana();
  /* 
  error handling
  try  {
      const apple = await getApple();
      const banana = await getBanana();
  } catch () {
  }
   */

  /*  await 병렬 처리: 연관이 없는 경우 : 동시다발적 실행
  promise는 만들자마자 실행이 된다는 것을 이용 ==== promise.all 이용

  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
   */

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  //Promise.all() promise 배열을 전달하면 모든 promise가 병렬적으로 다 받을 때까지 모아준다
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  //Promise.race 먼저 도착하는 하나만!!!
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
