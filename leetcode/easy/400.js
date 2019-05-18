// https://leetcode.com/problems/nth-digit/

/* Find the nth digit of the infinite integer sequence
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a
32-bit signed integer (n < 231).


Example 1:

Input:
3

Output:
3


Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0,
which is part of the number 10.
*/


/**
 * @param {number} n
 * @return {number}
 */

// loop from 1 to n

// add all numbers to a string

// split the string

// extract str[n] 

var findNthDigit = function(n) {
  let str = "";
  let arr = [];

  for (let i = 1; i <= n; i++) {
    str += i;
    arr.push(i)
  }

  console.log("n =", n)

  arr.join('').split('')
  console.log(str, "string")

  str = str.split('');
  console.log(arr, "array")

  console.log(str[n], "string[n]")
  console.log(arr[n], "array[n]")

  //return str.splice(n)
  //return arr.splice(n)

  return str.slice(n)
  //return arr.slice(n)
  
};

console.log(findNthDigit(3), 3)
console.log(findNthDigit(11), 0)
