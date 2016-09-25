'use strict';

let arr = [1, 2, 3];

console.log(...arr);

let sum = (a, b, c) => a + b + c;

console.log((sum(...arr)));

// Spread can also be used to concat arrays:

let numbers = [1, 2, 3, 4];
let newNumbers = [5, 6, 7, 8, ...numbers];

console.log(newNumbers);

// The position can be changed as wished:

let newNewNumbers = [5, 6, ...numbers, 7, 8];

console.log(newNewNumbers);

console.log('---');

// Spread can also be used in params
// These are called 'rest params'

let foo = (...args) => console.log(args);

foo('a', 1, 'wow');

console.log('---');

// Using 'arguments':

let func = function() {
  console.log(arguments); // We get an array like object.
  // So we cannot perform array operations on it.
  // e.g., map will not work.
  // arguments.map( arg => console.log(arg) );
};

func(1, 2, 3);

// But if we use 'rest' params we get an array:

let multiply = (mul, ...numbers) => numbers.map( n => mul * n );

console.log( multiply(2, 4, 5, 6) );
