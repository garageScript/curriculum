/*
 * In computer science, a cookie refers to some data that is sent from a website and is stored on a client's computer while they are browsing.
 * It is transmitted from the website as a string that is prased by the user's browser into perspective key-value pairs.
 *
 * A cookie string can only be parsed if it is "valid".
 * In a "valid" cookie string, each key and value are separated by an equals sign (=) and each pair but the last is terminated by a semi-colon(;).
 *
 * Write a function and use regular expression to find whether the cookie string is valid. Return true if cookie string is valid, false if cookie string is not valid.
 *
 * @params{String}
 * @returns{Boolean}
*/

const solution = (str) => {
  const reWithSemi = /\w+=\w+[;]$/
  const reWithoutSemi = /\w+=\w+[^;]$/
  str = str.split(' ')
  const last = str.pop()
  return !!((str.every(s => reWithSemi.test(s)) && reWithoutSemi.test(last)))
}

module.exports = {
  solution
}
