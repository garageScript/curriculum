/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

//solution();
const a = [5, 4, 3, 2, 1];

function test(a) {
  //a.gsForEach.bind(a);
  a.gsForEach(cb);
}


test(a);

// var array = [4,5,6,7,8];
// var singleVal = 0;
// var singleVal = array.reduce(function(ac, currentVal) {
//   return ac + currentVal;
// }, 0);

// console.log(singleVal);

// console.log([1, 2, 3].reduce((ac, cv) => ac + cv)); // 6

// var array = [4,5,6,7,8];
// var singleVal2 = 0;
// for(var i = 0; i < array.length; i++){
//   singleVal2 += array[i];
// }

// console.log(singleVal2)

// const solution = () => {
//   Array.prototype.gsReduce = function(fn, ac = 0, cv, ci = 0, arr) {
//     if (ci === this.length) return ac; // ????????
//     for (var i = 0; i < this.length; i++) {
//       ac += fn(this[ci]);
//       ci += 1;
//     }
//     return this.gsReduce(fn, ac, cv, ci + 1, arr);
//   };
// };

// const solution = () => {
//   Array.prototype.gsReduce = function(ac = 0, cv = 0, ci = 0, arr) {
//     if (ci === this.length) return ac;
//       ac += this[ci];
//     }
//     return this.gsReduce(ac, cv + 1, ci + 1, arr);
//   };

// solution();

// [1, 2, 3].gsReduce((ac, cv) => ac + cv);



// solution();

// console.log([1, 2, 3].gsReduce((ac, cv) => ac + cv)); // 6


// console.log([1, 2, 3].reduce(ac, cv => ac + cv)); // 6
// console.log([1, 2, 3].reduce(ac, cv => ac + cv + (cv % 2 === 0))); // 5


// console.log([1, 2, 3].reduce((ac, cv) => ac + cv)); // 6


// the second test for gsReduce is wrong

// it('should reduce [1,2,3] to 5', () => {
//   const cb = (ac, cv, ci) => {
//     return ac + cv + (cv % 2 === 0);
//   };
//   expect([1,2,3].gsReduce(cb, -3)).to.equal(4);
// });

// shouldn't it be?

// it('should reduce [1,2,3] to 5', () => {
//   const cb = (ac, cv, ci) => {
//     return ac + ci + (cv % 2 === 0);
//   };
//   expect([1,2,3].gsReduce(cb, -3)).to.equal(5);
// });

// console.log([1, 2, 3].reduce((ac , cv, ci) => ac + ci + (cv % 2 === 0))); // 5



// console.log(solution([1, 2, 3])); // 6
// console.log(solution([1, 2, 3])); // 4
// console.log(solution(["one", "two", "three"]));
//  one: "1 of 3", two: "2 of 2", three: "3 of 3" }'

// console.log(solution(["bob", "obo", "boo"])); 
// { bob: true, obo: false, boo: true }
