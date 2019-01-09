// /**
//  * Replicate Array.prototype.map function and call it gsMap
//  * @returns {[]}
//  */
const solution = () => {
  Array.prototype.gsMap = function(fn, newItems = [], i = 0) {
    // To get the actual array, use this
    if (newItems.length === this.length) return newItems;
    const mapped = fn(this[newItems.length], i);
    newItems.push(mapped);
    return this.gsMap(fn, newItems, i + 1);
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
console.log(arr.gsMap(x => x * 2));

// for (var i = 0; i < arr.length; i++) {
//   holder = []
//   holder.push(arr[i] * 2);
//   console.log(holder);
// }