/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

// RECURSION 

const solution = () => {
  Array.prototype.gsForEach = function (fn, element = this[0], index = 0) {
    // To get the actual array, use this
    // set default element to this[0]
    // set index to 0
    if (index === this.length) return element;
    // if index equals this.length reutrn element

    element = fn(this[index], index);
    // element equals the function wrapped around this[index], index

    return this.gsForEach(fn, element, index + 1);
    // recursive call indexing by 1
  };
};

solution();

// EXAMPLE FOR EACH

// [1, 2, 3].forEach(function (item, index){
//   console.log(item, index);
// }); 
// 0 1
// 2 1 
// 3 2
[1, 2, 3].gsForEach(function (element, index) {
  console.log(element, index);
});