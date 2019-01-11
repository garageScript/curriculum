/** Write a function that takes in a rotated sorted array and return the smallest number
 * @param {array}
 * @returns {number}
 */

const solution = (a, s = 0, e = a.length - 1, m = Math.floor((s + e) / 2)) => {
  if (a[s] < a[e] && s === m) return a[s]
  if (a[e] < a[s] && s === m) return a[e]
  if (a[s] > a[e]) {
    s = m
    m = Math.floor((s + e) / 2)
    return solution(a, s, e, m)
  }
}

module.exports = {
  solution
}
