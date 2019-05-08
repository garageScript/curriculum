/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   returns the combined result of the function being called
 *     with every letter in the string
 * @param {number} a
 * @param {function} fun
 * @returns {string}
 */

const solution = (a, fun, res = '', i = 0) => {
  if (i===a.length) return res
  res += fun(a[i])
  return solution(a,fun,res,i+1) 
}

module.exports = {
  solution
}
