/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @param {number} i
 * @param {array} result
 * @returns {array}
 */

const solution = (fun, i=0, result = []) => {
  if(fun(i)) return result
  result.push(i)
  return solution(fun, i+1, result)
}

module.exports = {
  solution
}
