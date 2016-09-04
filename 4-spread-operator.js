'use strict';

let arr = [1, 2, 3];

console.log(...arr);

let sum = (a, b, c) => a + b + c;

console.log((sum(...arr)));

console.log('---');

// Spread can also be used in params
// These are called 'rest params'

let foo = (...args) => console.log(args);

foo('a', 1, 'wow');
