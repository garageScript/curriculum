/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr)=>{
  if (!arr.length) return null;

  let obj = {};  //key -> number, value -> frequency
  arr.forEach(el => {
    obj[el] = (obj[el] === undefined) ? 1 : obj[el]+1;
  });
  
  let values = Object.values(obj);
  let max = 0;

  //get index of highest value
  let i = values.reduce((acc, el, idx) => {
    if (el > max) {
      max = el;
      return idx;
    }
    else {
      return acc;
    }
  },0);

  //key is the number
  return parseInt(Object.keys(obj)[i]);
}

module.exports = {
  solution
}
