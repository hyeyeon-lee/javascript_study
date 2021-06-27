'use strict'

const test = _.sample([1, 2, 3, 4, 5])
// console.log(test)

const btn = document.querySelector('#btn');
btn.addEventListener("click", _.debounce(print, 500));

function print() {
    console.log("print text");
}

