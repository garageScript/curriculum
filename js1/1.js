/**
 * takes in a number and returns a function that will output the next number every time it is called
 * @param {number} a
 * @returns {function}
 */

const solution = (a) => {
  return () => {a = a+1;
    return a;}
}

module.exports = {
  solution
}
