/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (arr, num, i=0, count=0) => {
  if(i === arr.length){
    return count;
  };
  if(arr[i] === num){
    count = count + 1;
  }
  return solution(arr, num, i+1, count);
};

module.exports = {
  solution,
};
