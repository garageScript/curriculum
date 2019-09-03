/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b) => {
  const lookup = {}
  return a.reduce((acc, e) => {
    if (e in lookup) {
      return true
    }
    lookup[b - e] = e
    return acc
  }, false)
}

module.exports = {
  solution
}
