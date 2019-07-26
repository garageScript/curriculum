"use strict"

// every()
Array.prototype.cEvery = function(cb, i = 0) {
  if (i === this.length) return true
  if (!cb(this[i], i, this)) return false
  return this.cEvery(cb, i + 1)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZero = nums.every((val, index, array) => val > 0)
const moreThan = nums.cEvery((val, index, array) => val > 0)
console.log(moreThanZero)
console.log(moreThan)

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZeroAgain = nums2.every((val, index, array) => val > 0)
const moreThan2 = nums2.cEvery((val, index, array) => val > 0)
console.log(moreThanZeroAgain)
console.log(moreThan2)

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

const check = population.every(val => val.pop > 1000000);
const check2 = population.cEvery(val => val.pop > 1000000);
console.log(check)
console.log(check2)

var found = nums.every(x => x < 40)
var found2 = nums.cEvery(x => x < 40)
console.log(found)
console.log(found2)

const arr1 = [1, 30, 39, 29, 10, 13]
const belowThreshold = arr1.every(x => x < 40)
const belowThreshold2 = arr1.cEvery(x => x < 40)
console.log(belowThreshold)
console.log(belowThreshold2)
