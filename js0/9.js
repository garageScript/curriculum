/**
 * Write a function called solution that
 * Takes in 2 numbers and returns a function
 * The returned function
 *  takes in a number and returns the sum of all 3 numbers when called
 * @param {number} num1
 * @param {number} num2
 * @returns {function}
 */

const solution = (num1, num2) => (num3) => num1 + num2 + num3;

module.exports = {
  solution,
};
