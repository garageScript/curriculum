/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (array, i = 0, holder = []) => {
  const isPrime = (a, c = 2) => {
    if (a === c) {
      return true;
    } else if (a < 2 || a % c === 0) {
      return false;
    }
    return isPrime(a, c + 1);
  };
  if (i === array.length) {
    return holder;
  }
  if (isPrime(array[i])) {
    holder.push(array[i]);
  } else {
    holder.push(1);
  }
return solution(array, i + 1, holder);
};


module.exports = {
  solution,
};
