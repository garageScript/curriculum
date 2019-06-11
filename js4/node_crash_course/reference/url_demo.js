const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
console.log("myUrl.href =>")
console.log(myUrl.href)
console.log(" ")

console.log("myUrl.toString() =>")
console.log(myUrl.toString())
console.log(" ")

// Host (root domain)
console.log("myUrl.host =>")
console.log(myUrl.host)
console.log(" ")

console.log("myUrl.hostname =>")
console.log(myUrl.hostname)
console.log(" ")
