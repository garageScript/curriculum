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

const solution = (row, col, arr = [], i = 0, j = 0) => {
  if (row == 0 && col == 0) return arr

  if (row - 1 === i && col === j) return arr

  else if (j === 0) {
    arr.push([])
    arr[i].push(0)
    return solution(row, col, arr, i, j + 1)
  } else if (j < col) {
    arr[i].push(0)
    return solution(row, col, arr, i, j + 1)
  } else {
    return solution(row, col, arr, i + 1, 0)
  }
}

module.exports = {
  solution
}
