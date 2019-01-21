/* We define an anagram to be a word whose characters can be rearranged to create another word.
 * Given two strings, we want to know the minimum number of character in either string that we must
 * modify to make two strings anagrams.
 *
 * Write a function that returns an array of integers which denotes the minimum number of characters in either
 * array of strings that need to be modified to make two strings anagrams. If not possible, return -1
 * @params{Array, Array}
 * @returns{Array}
 *
 * Input1:
 * const a = ['abc']
 * const b = ['def']
 *
 * Output1: [-1]
 *
 * Input2:
 * const a = ['a', 'tea']
 * const b = ['bb', 'toe']
 *
 * Output2: [0, 1]
 *
 */
const solution = (a, b) => {
  return a.map((s, i) => {
    if (s.length !== b[i].length) {
      return -1
    } else {
      const hashA = buildHash(s)
      return countDiff(b[i], hashA)
    }
  })
}

const countDiff = (str, hash, i = 0) => {
  if (i === str.length) return Object.values(hash).reduce((a, c) => a + c, 0)
  if (hash[str[i]]) hash[str[i]] -= 1
  return countDiff(str, hash, i + 1)
}

const buildHash = (str, i = 0, h = {}) => {
  if (i === str.length) return h
  h[str[i]] = (h[str[i]] || 0) + 1
  return buildHash(str, i + 1, h)
}

module.exports = {
  solution
}
