/**
 * Write a function called solution that
 *   takes in a number and returns a function.
 * When the returned function is called, the next incremental number
 *   is returned
 * @param {number} num
 * @returns {function}
 */

const solution = (num) => {
  return () => {
    return num += 1
  }
}

module.exports = {
  solution
}
