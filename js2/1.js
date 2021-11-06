/**
 * Write a function called solution that
 *   Takes in a number
 *   returns an array with the length equal to the input number
 *
 * Every element in the array must numbered with the correct index:
 *   0,1,2,3,4...
 * @param {number} num
 * @returns {array}
 */

const solution = (num, i = 0, result = []) => {
  if(i >= num) return result
  result.push(i)
  return solution(num, i+1, result)
}

module.exports = {
  solution
}
