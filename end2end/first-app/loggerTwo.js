// (function (exports, require, module, __filename, __dirname) {
// module wrapper function
console.log(__filename)
console.log(__dirname)
var url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message)
}

module.exports = log;
// module.exports.log = log;
// exports.log = log;
//
// cannot write
// exports = log; refers to => module.exports

//})
