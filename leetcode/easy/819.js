// https://leetcode.com/problems/most-common-word/

/*
Given a paragraph and a list of banned words,
return the most frequent word that is not in the list of banned words.

It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.

Words in the paragraph are not case sensitive.  The answer is in lowercase.


Example:

Input:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

Output: "ball"

Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does),
so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.


Note:

1 <= paragraph.length <= 1000.
0 <= banned.length <= 100.
1 <= banned[i].length <= 10.

The answer is unique, and written in lowercase
(even if its occurrences in paragraph may have
uppercase symbols, and even if it is a proper noun.)

paragraph only consists of letters, spaces, or the punctuation symbols !?',;.

There are no hyphens or hyphenated words.

Words only consist of letters, never apostrophes or other punctuation symbols.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
/*const solution = (arr, i = 0, obj = {}, mostCommon = arr[0]) => {
  if (i === arr.length) return mostCommon
  obj[arr[i]] = (obj[arr[i]] || 0) + 1
  if (obj[mostCommon] < obj[arr[i]]) { mostCommon = arr[i] }
  return solution(arr, i + 1, obj, mostCommon)
}

var mostCommonWord = function(paragraph, banned, i = 0, obj = {}, largest = arr[0], para) {
  // make the paragraph is lowercase
  if (i === 0) {
  // split the paragraph into an new array
  para = paragraph.toLowerCase().split(" ")
  }

  console.log("para =", para)
  obj[para[i]] = (obj[para[i]] || 0) + 1
  // hash the elements from the new array
  
  if (obj[largest] < obj[para[i]) { largest = para[i]}

  console.log("obj[para[i]] =", obj[para[i]])
  return mostCommonWord(para, banned, i + 1, obj)
  // return the element with the largest number
};*/

var mostCommonWord = function(paragraph, banned) {
console.log("paragraph = ", paragraph)
console.log("banned = ", banned)

  let para = paragraph.toLowerCase().split(" ")
  let obj = {}

  console.log(" ")
  console.log("para =", para)
  for (let i = 0; i < para.length; i++) {
    obj[para[i]] = (obj[para[i]] || 0) + 1
  }

  console.log("obj =", obj)

  let largest = 0;
  for (ele in obj) {
    if (obj[ele] < obj[largest]) {
      obj[largest] = obj[ele]
      }
    }
  console.log(" ")
  console.log("paragraph = ", paragraph)
  console.log("banned = ", banned)
  console.log(" ")
  console.log("para =", para)
  console.log("obj =", obj)
  console.log(" ")
  console.log("largest =", largest)
  return obj[largest] !== banned
};

/*var mostCommonWord = function(paragraph, banned) {
  // make the paragraph is lowercase
  // split the paragraph into an new array
  // hash the elements from the new array
  // return the element with the largest number
};*/

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))
// "ball"
