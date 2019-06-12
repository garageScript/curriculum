const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: '+ totalMemory)

// Template string
// ES6 / ES2015 : ECMAScript 6
// Node implements ECMAScript features

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
