"use strict"

const arr = [1, 2, 3, 4, 5];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.cMap = function(fn, i = 0, newArr = []) {
  if (i === this.length) return newArr;
  newArr.push(fn(this[i], i, this))
  return this.cMap(fn, i + 1, newArr)
}

Array.prototype.cFilter = function(fn, i = 0, newArr = []) {
  if (i == this.length) return newArr;
  if (fn(this[i], i, this)) {newArr.push(this[i])}
  return this.cFilter(fn, i + 1, newArr)
}

Array.prototype.cReduce = function(fn, acc=0, i = 0) {
  if (i === this.length) return acc;
  acc = fn(acc, this[i], i, this)
  return this.cReduce(fn, acc, i + 1)
}

Array.prototype.cForEach = function(fn, i = 0) {
  if (i == this.length) return;
  fn(this[i], i, this)
  return this.cForEach(fn, i + 1)
}

console.log("--map--")
console.log(arr.map(x => x + 2))
console.log(arr.cMap(x => x + 2))
console.log(" ")

console.log("--filter--")
console.log(words.filter(word => word.length > 6))
console.log(words.cFilter(word => word.length > 6))
console.log(" ")

console.log("--reduce--")
console.log(arr.reduce((acc, curr) => acc += curr))
console.log(arr.cReduce((acc, curr) => acc += curr))
console.log(" ")

console.log("--forEach--")
arr.forEach((x, i) => console.log(x, i))
console.log(" ")
arr.forEach((x, i) => console.log(x, i))
