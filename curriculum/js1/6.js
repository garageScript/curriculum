/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  let sum = 0;
  for (let i = 0; a > i; i++) {
    if (a%i === 0) {
      sum = i + sum 
    }
  }
  return sum;
};

module.exports = {
  solution,
};
