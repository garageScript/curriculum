/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 *
const solution = (row, col) => {
  return []
}*/

// FOR LOOP
/*const solution = (row, col) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < col; i++) {
      arr1.push(0)
  }
  for (let i = 0; i < row; i++) {
    arr2.push(arr1)
  }
  return arr2;
}*/

// WHILE LOOP
/*const solution = (row, col) => {
  let arr1 = [];
  let arr2 = [];
  let i = 0;
  let j = 0;

  while (i < col) {
  arr1.push(0)
  i++;
  }

  while (j < row) {
  arr2.push(arr1)
  j++;
  }
  return arr2;
}*/

// RECURSION
const solution = (row, col, arr1 = [], arr2 = []) => {
  if (col > 0) {
    arr1.push(0)
    return solution(row, col - 1, arr1, arr2)
  }
  if (row > 0) {
    arr2.push(arr1)
    return solution(row - 1, col, arr1, arr2)
  }
  return arr2 
}



module.exports = {
  solution
}
