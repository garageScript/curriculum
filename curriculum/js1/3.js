/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b=0,output='') => {
  if (b===a)
    return output;
  return solution(a, b+1, output+'hello');
};

module.exports = {
  solution,
};
