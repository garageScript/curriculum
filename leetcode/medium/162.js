// https://leetcode.com/problems/find-peak-element/

/*
A peak element is an element that is greater than its neighbors.
Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
or index number 5 where the peak element is 6. 
*/

/**
 * @param {number[]} nums
 * @return {number}
**/

var findPeakElement = function(nums) {
  if (nums.length === 1) return 0
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i
    }
  }

  if (nums[0] > nums[1]) return 0
  if (nums[nums.length - 1] > nums[nums.length - 2]) 
    return nums.length - 1
  return 0
};


const nums1 = [1,2,3,1]
console.log(findPeakElement(nums1), 3)

/*
Explanation: 
3 is a peak element and your function should return the index number 2.
*/

const nums2 = [1,2,1,3,5,6,4]
console.log(findPeakElement(nums2), "1 or 5")

/*
Explanation:
Your function can return either index number 1 where the peak element is 2,
or index number 5 where the peak element is 6.
*/
