/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b, index = 0, entries = Object.entries(a)) => {
  if (index === entries.length) return;
  b(entries[index][0], entries[index][1]);
  return solution(a, b, index + 1, entries);
};

module.exports = {
  solution,
};


// /**
//  * Replicate Array.prototype.map function and call it gsMap
//  * @returns {[]}
//  */

// const solution = () => {
//   Array.prototype.gsMap = function (fn, newItems = [], i = 0) {
//     if (i === this.length) return newItems;
//     newItems.push(fn(this[i], i, this));
//     return this.gsMap(fn, newItems, i + 1);
//   }
// };