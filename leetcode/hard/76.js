// https://leetcode.com/problems/minimum-window-substring/

/*
Given a string S and a string T,
find the minimum window in S which will
contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T,
return the empty string "".
If there is such window,
you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
**/

var minWindow = function(s, t) {

};

const str1 = "ADOBECODEBANC"
const str2 = "ABC"

console.log(minWindow(str1, str2), "BANC")
// Output "BANC"
