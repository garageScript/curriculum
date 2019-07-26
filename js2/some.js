"use strict"

// some()
Array.prototype.cSome = function(cb, i = 0) {
  if (this.length < 1) return false
  if (i === this.length) return false;
  if (cb(this[i], i, this)) return true; 
  return this.cSome(cb, i + 1)
}

const nums = [-1, -2, 0, 10];
const moreThanZero = nums.some((val, index, array) => val > 0)
const moreThan = nums.cSome((val, index, array) => val > 0)
console.log(moreThanZero, 'moreThanZero')
console.log(moreThan, 'moreThan')

const nums2 = [0, -1, -2]
const moreThanZero2 = nums2.some((val, index, array) => val > 0)
const moreThan2 = nums2.cSome((val, index, array) => val > 0)
console.log(moreThanZero2, 'moreThanZero2')
console.log(moreThan2, 'moreThan2')

const population = [
  {
    country: 'China',
    pop: 1409517397
  },
  {
    country: 'India',
    pop: 1339180127
  },
  {
    country: 'USA',
    pop: 324459463
  },
  {
    country: 'Indonesia',
    pop: 263991379
  }
];
const check = population.some(val => val.pop < 1000000);
const check2 = population.cSome(val => val.pop < 1000000);
console.log(check, 'check')
console.log(check2, 'check2')

const arr = [1, 2, 3, 4, 5];
const even = arr.some(x => x % 2 === 0)
const even2 = arr.cSome(x => x % 2 === 0)
console.log(even, 'even')
console.log(even2, 'even2')
