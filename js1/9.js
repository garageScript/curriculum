/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   returns the combined result of the function being called
 *     with every letter in the string
 * @param {string} str
 * @param {function} fun
 * @returns {string}
 */

const solution = (str, fun, i = 0, result = "") => {
  if (i >= str.length) return result

  result += fun(str[i])

  return solution(str, fun, i + 1, result)
}


module.exports = {
  solution
}
