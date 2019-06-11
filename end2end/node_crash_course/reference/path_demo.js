const path = require('path');

// Basename
// Base file name
console.log('__filename =>')
console.log(__filename)
console.log(" ")

console.log("path.basename(__filename) =>")
console.log(path.basename(__filename))
console.log(" ")

// Directory name
console.log("path.dirname(__filename) =>")
console.log(path.dirname(__filename))
console.log(" ")

// File extension
console.log("path.extname(__filename) =>")
console.log(path.extname(__filename))
console.log(" ")

// Create path object
console.log("path.parse(__filename) =>")
console.log(path.parse(__filename))
console.log(" ")


// Concatenate paths
// ../test/hello.html
console.log("path.join(__dirname, 'test', 'hello.html') =>")
console.log(path.join(__dirname, 'test', 'hello.html'))
console.log(" ")
