// https://leetcode.com/problems/plus-one/

/*
Given a non-empty array of digits representing a
non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit
is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]

Explanation: The array represents the integer 123.


Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

function plusOne(numbers) {
  let lastIndex = numbers.length - 1;
  numbers[lastIndex]++;

  for (i = lastIndex; i> 0; i--) {
    if (numbers[i] !== 10) {
      break;
    }
	
  numbers[i] = 0;
  numbers[i - 1]++;	
  }

  if (numbers[0] === 10) {
    numbers[0] = 0;
    numbers.unshift(1);	  
  }

  return numbers;
}


console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log('^^^ expected', ([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]))
