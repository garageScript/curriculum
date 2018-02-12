/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (numOfTimes, counter = 0, string = '') => {
      if (numOfTimes === counter)
    return string;
  string = 'hello' + string;
      return solution(numOfTimes, counter + 1, string);
}

module.exports = {
  solution,
};
