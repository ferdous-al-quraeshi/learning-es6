'use strict';

const person = {
  firstName: 'Tanveer',
  lastName: 'Hassan'
};

let firstName = person.firstName;
let lastName = person.lastName;

console.log(`My name is ${firstName} ${lastName}!`);

console.log('---');

// Arrays

const arr = ['foo', 'bar', 'baz'];

let [a, b, c] = arr;

console.log(b);
