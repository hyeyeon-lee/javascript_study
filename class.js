"use strict";
// object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// - introduces in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

const hyeyeon = new Person("hyeyeon", 20);
console.log(hyeyeon.name);
console.log(hyeyeon.age);
hyeyeon.speak();
