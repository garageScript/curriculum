// https://leetcode.com/problems/subarray-sum-equals-k/

/* Given an array of integers and an integer k, 
you need to find the total number of continuous 
subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] 
and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
**/

var subarraySum = function(nums, k, i = 0) {
};


const nums = [1,1,1]
const k = 2

console.log(subarraySum(nums, k), 2)
