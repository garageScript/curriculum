//https://leetcode.com/problems/maximum-product-of-three-numbers

// Given an integer array, 
// find three numbers whose product is 
// maximum and output the maximum product.

const arr1 = [1,2,3]
const arr2 = [1,2,3,4] 
const arr3 = [10, 20, 30, 1]
const arr4 = [-4, -3, -2, -1, 60]
const arr5 = [-1,-2,-3]

console.log(arr1, 'arr1');
console.log(arr2, 'arr2');
console.log(arr3, 'arr3');
console.log(arr4, 'arr4');
console.log(arr5, 'arr5');
console.log(" ")

/**
 * @param {number[]} nums
 * @return {number}
**/

var maximum1 = function(nums){
  const l = nums.length;
  let max = null;

  for (let i = 0; i < nums.length; i++){
    if (Math.abs(nums[i]) > max) { max = Math.abs(nums[i])}
  }
  return Math.abs(max);
}


/*
console.log(maximum1(arr1), 'maximum1', 3)
console.log(maximum1(arr2), 'maximum1', 4)
console.log(maximum1(arr3), 'maximum1', 30)
console.log(maximum1(arr4), 'maximum1', 60)
console.log(" ")
*/

var maximum2 = function(nums){

  const l = nums.length;
  let max1 = nums[0];
  let max2 = null;

  for (let i = 0; i < l; i++) {

    if (nums[i] > max1 ) {
      max2 = max1;
      max1 = Math.abs(nums[i]);
    }
  }
  return Math.abs(max2);
}
/*
console.log(maximum2(arr1), 'maximum2', 2)
console.log(maximum2(arr2), 'maximum2', 3)
console.log(maximum2(arr3), 'maximum2', 20)
console.log(maximum2(arr4), 'maximum2', -1)
console.log(" ")
*/

var maximum3 = function(nums){
  const l = nums.length;
  let max1 = nums[0];
  let max2 = nums[1];
  let max3 = null;

  for (let i = 0; i < l; i++) {
    if (Math.abs(nums[i]) > max1) {
      max3 = max2;
      max2 = max1;
      max1 = Math.abs(nums[i]);
    }
  }
  return Math.abs(max3)
}

/*
console.log(maximum3(arr1), 'maximum3', 1)
console.log(maximum3(arr2), 'maximum3', 2)
console.log(maximum3(arr3), 'maximum3', 10)
console.log(maximum3(arr4), 'maximum3', -2)
console.log(" ")
*/

var maximumProduct = function(nums) {
  let sum = null;

  let max1 = maximum1(nums);
  let max2 = maximum2(nums);
  let max3 = maximum3(nums);

  sum = max1 * max2 * max3;
  return sum;
};

//console.log(maximumProduct(arr1), 6)

//console.log(maximumProduct(arr2), 24)

//console.log(maximumProduct(arr3), 6000)

console.log(maximumProduct(arr4), 720)
console.log(maximumProduct(arr5), -6)

