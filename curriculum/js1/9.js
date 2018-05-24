/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (num,i=7) => {
  if((num+i)%7===0){
    return num+i;
  }
  return solution(num, i-1);
};

module.exports = {
  solution,
};
