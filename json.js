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
