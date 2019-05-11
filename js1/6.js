/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i = 2) => {
  if (a === 2) return true
  if (a === 1 || a % i === 0) return false
  if (i === a - 1) return true
  return solution(a, i + 1)
}

module.exports = {
  solution
}
