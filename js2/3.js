/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col, arr = [], i = 0) => {
  // if (row === 0) return arr
  if (row === i) return arr
  // console.log(i)
  s = new Array(col).fill(0)
  arr.push(s)

  return solution(row, col, arr, i + 1)
}

module.exports = {
  solution
}
