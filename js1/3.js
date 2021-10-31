/**
 * Write a function called solution that
 *   takes in 2 parameters, a number n and string,
 *   and returns the string repeated n number of times
 * @param {number} num
 * @param {string} str
 * @returns {string}
 */

 const solution = (num, str, counter = 0, result = '') => {
  if(counter >= num) return result
  return solution(num, str, counter + 1, result + str)
}

module.exports = {
  solution
}
