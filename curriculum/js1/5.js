/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */


const solution = (num, func, i=0) =>{
  if(i===num){
    return;
  }
  func();
  return solution(num, func, i+1);
}

module.exports = {
  solution,
};
