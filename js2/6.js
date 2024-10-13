/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, i = 0) => {
  if (i === arr.length) return
  
  setTimeout(() => {
    arr[i]()
    solution(arr, time, i + 1)
  }, time)
}

module.exports = {
  solution
}
