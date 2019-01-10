/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */
const solution = () => {
  // fn = (accumulator, item, index) => accumulator
  Array.prototype.gsReduce = function (fn, accumulator = 0, item, index = 0, remainingItems = this) {
    // set the default accumulator to 0
    // deafult index to 0
    // default remaining items to this
  item = remainingItems.shift();
  // pop off the first element in the array
  accumulator = fn(accumulator, item, index)
  // pass fn or function onto the accumulator, item and index

  if (remainingItems.length === 0)  {
    // if the remaining items array doesn't have any elements in it
      return accumulator;
      // return accumulator
    }

    return this.gsReduce(fn, accumulator, item, index + 1, remainingItems);
    // pass the recursive call while indexing index
  }
};

solution();

console.log([10, 20, 30, 40, 50].reduce((ac, item) => ac += item));
console.log(" ");


console.log(" ");
console.log([10, 20, 30, 40, 50].gsReduce((ac, item) => ac += item));
console.log(" ");