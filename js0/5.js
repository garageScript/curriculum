/**
 * Write a function called solution that
 * Takes in 3 numbers, return the largest
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number}
 */

const solution = (num1, num2, num3) => {
  const maxOfNum1Num2 = ((num1 > num2) ? num1 : num2); 
  return (maxOfNum1Num2 > num3) ? maxOfNum1Num2 : num3;
}

module.exports = {
  solution
}
