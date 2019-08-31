//https://leetcode.com/problems/intersection-of-two-arrays/
// UNSOLVED

/**
Given two arrays, 
write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note: 
Each element in the result must be unique.
The result can be in any order.
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
**/

const duplicates = (arr) => {
  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[a] === arr[b]) {
        arr.shift(arr[b])
      }
    }
  }
  return arr
}

var intersection = function(nums1, nums2) {
  const section = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        section.push(nums1[i], nums2[j])
      }
    }
  }
  duplicates(section)
  return section.sort().reverse()
};

const arr1 = [1,2,2,1]
const arr2 = [2,2]
console.log(intersection(arr1, arr2), [2])

const arr3 = [4, 9, 5]
const arr4 = [9, 4, 9, 8, 4]
console.log(intersection(arr3, arr4), [9,4])
