// https://leetcode.com/problems/monotonic-array/
/*
An array is monotonic if it is either monotone 
increasing or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:
Input: [1,2,2,3]
Output: true

Example 2:
Input: [6,5,4,4]
Output: true

Example 3:
Input: [1,3,2]
Output: false

Example 4:
Input: [1,2,4,5]
Output: true

Example 5:
Input: [1,1,1]
Output: true
*/

/**
 * @param {number[]} A
 * @return {boolean}
**/

/*An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j]. */

var isMonotonic = function(arr) {
  let inc = true, dec = true;
// set two variables for increasing and decreasing
  for (let i = 0; i < arr.length - 1; i++) {
// loop through the array
    if (arr[i] > arr[i + 1]) inc = false
// if our current element is greather
// than our next element set increasing to false
    if (arr[i] < arr[i + 1]) dec = false
// if our current element is less 
// than our next element set decreasing to false
  }
  return inc || dec
// return whether increasing or decreasing is true
};

const input1 = [1,2,2,3]
const input2 = [6,5,4,4]
const input3 =  [1,3,2]
const input4 =  [1,2,4,5]
const input5 =  [1,1,1]

console.log(input1)
console.log(input2)
console.log(input3)
console.log(input4)
console.log(input5)
console.log(" ")

console.log(isMonotonic(input1), true)
console.log(isMonotonic(input2), true)
console.log(isMonotonic(input3), false)
console.log(isMonotonic(input4), true)
console.log(isMonotonic(input5), true)

