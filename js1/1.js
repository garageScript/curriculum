/**
 * Write a function called solution that
 *   takes in a number and returns a function.
 * When the returned function is called, the next incremental number
 *   is returned
 * @param {number} a
 * @returns {function}
 */

const solution = (a) => {
  return () => {a = a+1;
    return a;}
}

module.exports = {
  solution
}
