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

solution();

// console.log([1, 2, 3].gsForEach());
// 1: 3
// 2: 4
// 3: 5

// console.log([1, 2, 3].gsForEach(x => x += 1)) // 3

// describe('test gsForEach', () => {
//   it('should mutate an empty object using curr. value, index, and a property of "this" array', () => {
//     const o = {};
//     const cb = (cv, i, ar) => {
//       o[cv] = i + ar.length;
//     };
//   it('should increment a value', () => {
//     let o = 0;
//     const cb = () => {
//       o += 1;
//     };
//     [1, 2, 3].gsForEach(cb);
//     expect(o).to.equal(3);
//   });
// });

const cb = () => {
  let o = 0;
  o += 1;
};

console.log([1, 2, 3].forEach(cb));




// EXAMPLE FOR EACH

// [1, 2, 3].forEach(function (item, index){
//   console.log(item, index);
// }); 
// 0 1
// 2 1 
// 3 2
// [1, 2, 3].gsForEach(function (element, index) {
  // console.log(element, index);
// });