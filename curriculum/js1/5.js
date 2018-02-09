/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (n, func) => {
  if(n<=0){
    return
  }else{
    func()
    solution(n-1,func)
  }
};

module.exports = {
  solution,
};
