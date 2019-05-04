/**
 * Write a function called solution that
 * Takes in 2 numbers and returns a function
 * The returned function returns the sum when it is called
 * @param {number} a
 * @param {number} b
 * @returns {function}
 */

const solution = (a, b) => {
  return () => {
    return a + b
  }
}

module.exports = {
  solution
}
