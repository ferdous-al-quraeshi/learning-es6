'use strict';

var a = 'foo';

if (true) {
  var b = 'bar';
}

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  console.log('arr[' + i + ']:', arr[i]);
}

a = 'mutant';

console.log('i:', i);
console.log('a:', a);
console.log('b:', b);
