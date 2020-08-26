// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tory",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
// symbol이나 function은 포함되지 않음
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
// 원하는 property만 조회 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value} `);
  /* return value; */
  return key === "name" ? "hylee" : value;
});
// 최상위 것부터 전달
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value} `);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();
// json으로 변경 시 function, symbol은 사라지기 때문에
// 다시 obj로 변경했을 때 function, symbol이 없음
console.log(rabbit.birthDate.getDate());
// birthdate가 string으로 변환됐다가 obj로 돌아왔기 때문에
// string.getDate() 사용 불가
console.log(obj.birthDate.getDate());
