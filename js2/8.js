// /**
//  * Replicate Array.prototype.map function and call it gsMap
//  * @returns {[]}
//  */

const solution = () => {
Array.prototype.gsMap = function (fn, newItems = [], i = 0) {
  if (i === this.length) return newItems;
  newItems.push(fn(this[i], i, this));
  return this.gsMap(fn, newItems, i + 1);
  }
};

module.exports = {
  solution,
};