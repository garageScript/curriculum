/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b) => {
  const lookup = {}
  for (var i = 0; i < a.length; i++) {
    if (a[i] in lookup) {
      return true
    }
    lookup[b - a[i]] = a[i]
  }
  return false
}

module.exports = {
  solution
}
