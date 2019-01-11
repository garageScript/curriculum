// /**
//  * Replicate Array.prototype.map function and call it gsMap
//  * @returns {[]}
//  */
const solution = () => {
  Array.prototype.gsMap = function(fn, newItems = []) {
    // set deafult newItems to and empty array
    // set index to 0
    if (newItems.length === this.length) return newItems;
    // if newItems array is the length of the original array
    // return newItems
    // 
    newItems.push(fn(this[newItems.length]));
    // pass the function onto the element in the item
    // push the mutated element onto the array

    return this.gsMap(fn, newItems);
    // pass the recursive call while indexing by 1
  }
};


solution();

// let arr = [1, 2, 3]


// console.log([1, 2, 3].gsMap((x, idx) => {
//   return [ idx, x ];
// })); // [1, 2, 3];

// console.log(solution([])); // []
// console.log([1, 2, 3].gsMap(x => x + 5)); // 6, 7, 8
// console.log(arr.gsMap(x => x * x));


arr = [1, 2, 3];

console.log(arr.map(x => x * 2));
console.log(arr.gsMap(x => x * 2)); // 

// for (var i = 0; i < arr.length; i++) {
//   holder = []
//   holder.push(arr[i] * 2);
//   console.log(holder);
// }