//https://leetcode.com/problems/move-zeroes/

/*
Given an array nums, write a function to move
all 0's to the end of it while maintaining the
relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations. */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

function moveZeros(nums) {
  let nonZeroWriteIndex = 0;
  let l = nums.length;

  for (let i = 0; i < l; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroWriteIndex] = nums[i];
      nonZeroWriteIndex++;
    }
  }
  while (nonZeroWriteIndex < l) {
    nums[nonZeroWriteIndex] = 0;
    nonZeroWriteIndex++;
  }
  return nums;
}

console.log(moveZeros([0,1,0,3,12]), [1,3,12,0,0])
