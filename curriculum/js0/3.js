/**
 * Takes in a number, returns true if a number is greater than 5
 * @param {number} a
 * @returns {boolean}
 */

const solution = (arr, index = 0, obj = {}) => {
  // just use Object.keys => returns the keys of the object
  if (index == arr.length) {

    // if (Object.values(obj) > 1) // value of each key has to be > 1

    let result = Object.keys(obj);
    let letterArray = result.filter((key) => obj[key] > 1);
    let result_arr = letterArray.map((stringNum) => parseInt(stringNumstringN))
    return result_arr;
  }

    // keep track of the frequency
    if (obj[arr[index]] === undefined) {
    obj[arr[index]] = 1
  } else {
    obj[arr[index]]++
  }

  return solution(arr, index + 1, obj);
}

module.exports = {
  solution,
};
