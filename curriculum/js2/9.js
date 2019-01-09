/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  // fn = (accumulator, item, index) => accumulator
  Array.prototype.gsReduce = function (fn, accumulator, item, index = 0, remainingItems = this) {
    item = remainingItems.shift();
    
    accumulator = fn(accumulator, item)
    
    if (remainingItems.length === 0)  {
      return accumulator;
    }

    return this.gsReduce(fn, accumulator, item, index + 1, remainingItems);
  }
};


solution();

// console.log(" ");
// console.log("---reduce----");
console.log([10, 20, 30, 40, 50].reduce((ac, item) => ac += item));
// console.log(" ");

// console.log("---GS REDUCE---");
console.log(" ");
console.log([10, 20, 30, 40, 50].gsReduce((accumulator, item) => accumulator += item));
console.log(" ");

// let arr2 = ["cat", "dog", "mouse"];

// for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i])
// }

[1, 2, 3].map(x => x + 1);

