"use strict";

// find()
Array.prototype.cFind = function(cb, i = 0) {
  if (i === this.length) return
  if (cb(this[i], i, this)) {return this[i]}
  return this.cFind(cb, i + 1)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

const check = population.find(val => val.pop > 100000000) 
const check2 = population.cFind(val => val.pop > 100000000) 
console.log(check)
console.log(check2)

const moreThanSeven = nums.find((val, index, array) => val > 7)
const moreSeven = nums.cFind((val, index, array) => val > 7)
console.log(moreThanSeven)
console.log(moreThanSeven)

const moreThanFortyTwo = nums.find((val, index, array) => val > 42)
const moreFortyTwo = nums.cFind((val, index, array) => val > 42)
console.log(moreThanFortyTwo)
console.log(moreFortyTwo)
