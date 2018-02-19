/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  if(a < 2){
    return false;
  }
  else{
    for(let i=2; i<a; i++){
      if(a%i == 0){
        return false;
      }
    }
  }
  return true;
};

module.exports = {
  solution,
};
