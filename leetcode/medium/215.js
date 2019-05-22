// https://leetcode.com/problems/kth-largest-element-in-an-array/

/*
Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(arr, k) {
  if (arr.length === 0) {
    return -1;
  }
  let pivot = Math.floor(arr.length / 2);
  let lowerArr = []
  let equalArr = []
  let upperArr = []

  arr.forEach(function(item) {
    if (item < arr[pivot]) {
      lowerArr.push(item)
    } else if (item > arr[pivot]) {
      upperArr.push(item)
    } else {
      equalArr.push(item)
    }
  })

  if (k <= upperArr.length) {
    return findKthLargest(upperArr, k)
  } else if ((k - upperArr.length) <= equalArr.length) {
    return equalArr[0]
  } else {
    return findKthLargest(lowerArr, k - upperArr.length - equalArr.length)
  }
};

console.log(findKthLargest(([3,2,1,5,6,4]), 2), 5)
console.log(findKthLargest(([2,2,3,1,2,4,5,5,6]), 4), 4)
