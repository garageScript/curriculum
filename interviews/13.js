/*
 * In computer science, a cookie refers to some data that is sent from a website and is stored on a client's computer while they are browsing.
 * It is transmitted from the website as a string that is prased by the user's browser into perspective key-value pairs.
 *
 * A cookie string can only be parsed if it is "valid".
 * In a "valid" cookie string, each key and value are separated by an equals sign (=) and each pair but the last is terminated by a semi-colon(;).
 *
 * Write a function and use regular expression to find whether the cookie string is valid. Return true if cookie string is valid, false if cookie string is not valid.
 *
 * const example = "johndoe123=johnpassword; helloworld=helloworldpwd; foobar=foobarpwd"
 * const result = solution(example)
 * console.log(result) -> true
 *
 * const example2 = "appleseed=matrix123; ssur=usa; android=phone;"
 * const result2 = solution(example2)
 * console.log(result2) -> false
 *
 * @params{String}
 * @returns{Boolean}
*/

const solution = (str) => {
  return 0
}

module.exports = {
  solution
}
