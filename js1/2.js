 /**  
 * Write a function that takes in a number (X) and a function (A),
and returns a function (B). Whenever the function (B) is called (up to X times), 
the result of function (A) is returned .
After that, null will be returned whenever the function (B) is called.               
 * @param {number} a                                                                                                                     
 * @param {function} b                                                                                                                   
 * @returns {function}                                                                                                                   
 */

const solution = (num, func) => {
  if (num === 0) return null
    return () => {
    func()
  }
  return solution(num - 1, func)
}

 module.exports = {
   solution
}
