/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr) => {
  let hashCount = {};
  arr.forEach(num => {
    hashCount[num] = hashCount[num] ? hashCount[num] += 1 : 1;
  });
  return Object.entries(hashCount).reduce((max, next) =>
    max[1] > next[1] ? max : next)[0];
}

module.exports = {
  solution
}
