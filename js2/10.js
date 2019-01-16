/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

// RECURSION 

const solution = () => {
  Array.prototype.gsForEach = function (fn, i = 0) {
    if (i === this.length) return;
    fn(this[i], i, this)
    return this.gsForEach(fn, i + 1);
  };
};

module.exports = {
  solution,
};