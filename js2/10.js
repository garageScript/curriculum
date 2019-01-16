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

// console.log([1, 2, 3].gsForEach());
// 1: 3
// 2: 4
// 3: 5

// console.log([1, 2, 3].gsForEach(x => x += 1)) // 3

const cb = () => {
  let o = 0;
  o += 1;
};

// console.log([1, 2, 3].forEach(cb));

module.exports = {
  solution,
};