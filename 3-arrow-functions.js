'use strict';

// With params

let sum = function(a, b) {
  return a + b;
};

console.log(`Sum of 1 and 2 is ${sum(1, 2)}`);

// Without params

let rand = function() {
  return Math.random();
};

console.log(`A random number: ${rand()}`);

// Without return

let noreturn = function(name) {
  console.log(`Hello from ${name}`);
};

noreturn('Tanveer');

// Piping

const things = [{
  type: 'mobile',
  os: 'ios'
}, {
  type: 'food',
  spicy: 'over 9000'
}, {
  type: 'mobile',
  os: 'android'
}, {
  type: 'mobile',
  os: 'windows'
}, {
  type: 'car',
  bhp: '320'
}];

// We want to get an array of all the operating system names our mobile types support
// First we need to filter mobile types, then map the filtered array to get os only

const allOs = things
  .filter(function(thing) {
    return thing.type === 'mobile';
  })
  .map(function(thing) {
    return thing.os;
  });

console.log(allOs);

// Default values

function defaultValues(a, b = 2) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

defaultValues(0, 1);
defaultValues(0);

// In arrow functions we don't need to bind 'this'
// But also need to be careful how we use it

// let person = {
//   name: 'Tanveer',
//   // This will work.
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
//   // This will not work, because 'this' is not referring to person now.
//   sayName: () => {
//     console.log(`My name is ${this.name}`);
//   }
// };
//
// person.sayName();


// Another use:

// let person = {
//   name: 'Tanveer',
//   noms: ['Pizza', 'Burger', 'Ice Cream'],
//   showNoms() {
//     this.noms.forEach(function(nom) {
//       // This will not work because 'this' does not refer to person anymore.
//       console.log(`${this.name} wants a ${nom}`);
//     });
//   }
// };
//
// person.showNoms();

// var _this = this
// $('.btn').click(function(event){
//   _this.sendData()
// })

// This can be written as:

// $('.btn').click((event) =>{
//   this.sendData()
// })
