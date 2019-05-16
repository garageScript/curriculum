// https://leetcode.com/problems/valid-palindrome/
/*
 * Given a string, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let reversed = s.split('').reverse()
  return reversed == s
};

console.log(isPalindrome("race a car"))
// false

console.log(isPalindrome("A man, a plan, a canal: Panama"))
// true
