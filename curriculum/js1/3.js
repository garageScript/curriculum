/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b = 'hello') => {
  if (a == 1) {
    return b;
  }

  if (a == 0) {
    return '';
  }

  let new_string = b + solution(a - 1, b);
  return new_string;
};

console.log(solution(1));

module.exports = {
  solution,
};
