/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */
const solution = () => {
  // fn = (accumulator, item, index) => accumulator
Array.prototype.gsReduce = function (fn, accumulator = 0, i = 0) {
  if (i === this.length) return accumulator;
  accumulator = fn(accumulator, this[i], i, this)
  return this.gsReduce(fn, accumulator, i + 1);
  }
};

solution();

console.log([10, 20, 30, 40, 50].reduce((ac, item) => ac += item));
console.log(" ");

console.log(" ");
console.log([10, 20, 30, 40, 50].gsReduce((ac, item) => ac += item));
console.log(" ");