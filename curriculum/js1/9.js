/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
  if( a > 1 ) {
    var temp = a + 7;
    return temp;
  }else{
    return a * 7;
  }
}
module.exports = {
  solution,
};
