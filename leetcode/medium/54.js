// https://leetcode.com/problems/spiral-matrix/


/*Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]


Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(arr, result = []) {
  // your code here
  if (arr.length === 0) {
    return result;
  }
  
  // add the first row to result
  result = result.concat(arr.shift());

  // add the last element of each remaining row
  arr.forEach(function(rightEnd) {
    result.push(rightEnd.pop());
  });

  // add the last row in reverse order
  if (arr.length === 0) return result;
  result = result.concat(arr.pop().reverse());

  // add the first element in each remaining row (going upwards)
  let tmp = [];
  arr.forEach(function(leftEnd) {
    tmp.push(leftEnd.shift());
  });
  result = result.concat(tmp.reverse());

  return spiralOrder(arr, result);
};

const arr1 = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
console.log(spiralOrder(arr1))
console.log("Output: [1,2,3,6,9,8,7,4,5]")

const arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
console.log(spiralOrder(arr2))
console.log("Output: [1,2,3,4,8,12,11,10,9,5,6,7]")

const arr3 = [
  [7],
  [9],
  [6]
];
console.log(spiralOrder(arr3))
console.log("Output: [7,9,6]")
