/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i = 2) => 
{ 
  if(a === 1) return false
  for (i = 2; i < a; i++) {
    if(a % i === 0) return false
  }
  return true
}

module.exports = {
  solution
}
