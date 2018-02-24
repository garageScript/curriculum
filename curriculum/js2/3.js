/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map(x => isPrime(x) ? x : 1);
};

const isPrime = (num, curr = 2) => {
  num = Math.abs(num);
  if (num <= 1) return false;
  if (curr >= num) return true;
  if (num % curr == 0) return false;
  return isPrime(num, curr + 1);
};

module.exports = {
  solution,
};
