'use strict';

// String compositions

const person = {
  firstName: 'Tanveer',
  lastName: 'Hassan'
};

const header = 'My name is ' + person.firstName + ' ' + person.lastName + '!';

console.log(header);

console.log('---');

// Multiline strings

const multilineString = 'This is a multiline string. \n' +
  'To create and maintain these is a real pain! \n' +
  'But sometimes we need to do these still; \n';

console.log(multilineString);
