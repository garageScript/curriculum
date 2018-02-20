/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
   if(a%7===0)
    return (Math.ceil(a/7)+1)*7;
  return  (Math.ceil(a/7))*7;
 };
module.exports = {
  solution,
};
