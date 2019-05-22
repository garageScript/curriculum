// https://leetcode.com/problems/reverse-integer/

/**
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 12
Output: 21

Note:
Assume we are dealing with an environment
which could only store integers within the
32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that
your function returns 0 when the reversed integer overflows.
**/

/**
 * @param {number} x
 * @return {number}
 */

/*var reverse = function(x) {
    var rev = x.toString().split('').reverse('').join('') 
    if (x < 0) {
    return -Math.abs(rev) 
    } else {
    return rev
  }
};*/

var reverse = function(x) {
  let result = 0;
  let absX = Math.abs(x)

  while(absX) {
    result = result * 10 + absX % 10
    absX = Math.floor(absX / 10)	  
  }

  if (Math.abs(result) > 999999999) return 0
	
  if (x < 0) {
    return -1 * result
  } else {
    return result
  }

}

console.log(reverse(1), 1) // 1
console.log(reverse(123), 321) // 321
console.log(reverse(-123), -321) // -321
console.log(reverse(120), 021) // 021
console.log(reverse(1534236469), 0) // 0
console.log(reverse(-2147483412), -2147483412) //-2143847412
