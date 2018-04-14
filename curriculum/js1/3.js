/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, i = 0, holder = []) => {
 if (i === a) {
   return holder.join('');
 } else {
   i = i + 1;
   holder.push('hello');
 }
  return solution(a, i, holder);
};

module.exports = {
  solution,
};
