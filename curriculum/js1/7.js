/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */


// FOR LOOP 

const solution = (a) => {
  return 0;
  if (a === 1) {
    return false;
  }
 for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
    return true;
};