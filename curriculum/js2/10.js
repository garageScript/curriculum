/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */




// TODO: MASTER CHEN'S SOLUTION

// function gsforeach(cb) {
//   for (let i = 0; i < this.length; i++)
//     cb(this[i], i);
// }

// console.log(gsforeach([1, 2, 3, 4, 5]));
// console.log(gsforeach([6, 7, 8, 9, 10]));


 /*
const gsforeach = ((cb,i=0) => {
  if (i === this.length-1) return;
  cb(this[i],i);
  gsforeach(cb,i+1);
})
 */

// Array.prototype.gsForEach = gsforeach;


// const cb = ((el, idx) => console.log(`a[${idx}] = ${el}`));



const solution = () => {
  Array.prototype.gsForEach = function (fn, element, index) {
    // To get the actual array, use this
    if (index === this.length) return total;

    total = fn(element, index);

    return this.gsForEach(fn, element, index);
  };
};


// EXAMPLE FOR EACH

[1, 2, 3].forEach(function (item, index){
  console.log(item, index);
}); 
// 0 1
// 2 1 
// 3 2


// tests

console.log(solution([1, 2, 3]));
// 1: 3
// 2: 4
// 3: 5
console.log(solution([1, 2, 3]));
// 3