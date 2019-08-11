/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} a
 * @param {number} t
 */

const solution = (a, t, i = 0) => {
  if (i === a.length) return
  setTimeout(() => {
    a[i]()
    return solution(a, t, i + 1)
  }, t)
}

module.exports = {
  solution
}
