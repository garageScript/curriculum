/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */

const solution = (fun, arr = [], e = 0) => {
  if (fun(e)) return arr
  arr.push(e)
  return solution(fun, arr, e + 1)
}

module.exports = {
  solution
}
