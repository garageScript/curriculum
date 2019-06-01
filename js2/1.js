/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} a
 * @returns {array}
 */

const solution = (a, i = 0, arr = []) => {
  if (i === a) return arr
  arr.push(i)
  return solution(a, i + 1, arr)
}

module.exports = {
  solution
}
