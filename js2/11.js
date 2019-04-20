/**
 * Creates Array.prototype.dangerousMap that has
 *   the same functionality as Map, except that
 *   after calling the function 3 times, calling
 *   it again will cause the array to become empty
 */

const solution = () => {
  Array.prototype.dangerousMap = function (cb) {
    return 0
  }
}

module.exports = {
  solution
}
