/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b) => {
  pairs = Object.entries(a)
  for (var i = 0; i < pairs.length; i++) {
    var [key, val] = pairs[i]
    b(key, val)
  }
}
module.exports = {
  solution
}
