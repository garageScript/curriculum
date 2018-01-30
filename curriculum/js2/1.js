/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map( e => {
    if (e <= 5) return 0;
    return e;
  });
};

module.exports = {
  solution,
};
