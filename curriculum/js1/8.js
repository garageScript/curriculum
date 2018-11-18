/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  let denom;
  let greatest;
  if (a > b) {
    greatest = a;
  } else {
    greatest = b;
  }
  for (let i = 0; i <= greatest; i++) {
    if (a % i === 0 && b % i === 0) {
      denom = i;
    }
  }
  return denom;
};

module.exports = {
  solution,
};
