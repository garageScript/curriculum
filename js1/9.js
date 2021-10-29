/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   returns the combined result of the function being called
 *     with every letter in the string
 * @param {string} str
 * @param {function} fun
 * @returns {string}
 */

 const solution = (str, func, result = '', i = 0) =>{

  if(i >= str.length) return result

  return solution(str, func, result + func(str[i]),i + 1)
  
}

module.exports = {
  solution
}
