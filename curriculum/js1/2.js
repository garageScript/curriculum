/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (num1, num2, num3) => {
  return ( (num1 > num2) ? ( (num1 > num3) ? num1 : num3 ) : ( (num2 > num3) ? num2 : num3 ) );
}

module.exports = {
  solution,
};
