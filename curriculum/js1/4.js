/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b) => {
  const recur = (x, y, z='', counter=0) => {
    if (x === counter) {
      return z;
    }
    z += y;
    return recur(x,y,z,counter+1);
  }
  return recur(a,b);
};

module.exports = {
  solution,
};
