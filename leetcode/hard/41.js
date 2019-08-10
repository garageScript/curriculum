// https://leetcode.com/problems/first-missing-positive/
"use strict";

/**
 * @param {number[]} nums
 * @return {number}
**/

var firstMissingPositive = function(nums) {
  var smallest = 0;
  var current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < current) {
      nums[i] = current;
      smallest = i;
    }
  } 
  return smallest
};

const arr1 = [1,2,0]
// 3

const arr2 = [3,4,-1,1]
// 2

const arr3 = [7,8,9,11,12]
// 1

console.log(firstMissingPositive(arr1), 3);
console.log(firstMissingPositive(arr2), 2);
console.log(firstMissingPositive(arr3), 1);

