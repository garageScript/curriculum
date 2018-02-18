/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (a, idx = 0) => {
  if (idx === a.length) {
    return a;
  }

  if (!isPrime(a[idx])) {
    a[idx] = 1;
  }

  return solution(a, idx + 1);
};

const isPrime = (num, val = 2) => {
  if (val >= num) {
    return !(num <= 1);
  }

  if (num % val === 0) {
    return false;
  }

  return isPrime(num, val + 1);
};

module.exports = {
  solution,
  isPrime,
};
