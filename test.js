const add = require('./math');

if (add(2,3) !== 5) {
    throw new Error('Test Failed');
}

console.log('Test Passed');
