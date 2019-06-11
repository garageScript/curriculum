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

// Hostname (does not get port)
console.log("myUrl.hostname =>")
console.log(myUrl.hostname)
console.log(" ")

// Pathname
console.log("myUrl.pathname =>")
console.log(myUrl.pathname)
console.log(" ")

// Serialized query
console.log("myUrl.search =>")
console.log(myUrl.search)
console.log(" ")

// Params object
console.log("myUrl.searchParams =>")
console.log(myUrl.searchParams)
console.log(" ")

// add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
console.log(" ")

myUrl.searchParams.append('Jquery', 'ReactJs')
console.log(myUrl.searchParams)
console.log(" ")

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
