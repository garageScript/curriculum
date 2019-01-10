/** Write a function that takes in a rotated sorted array and return the smallest number
 * @param {array} 
 * @returns {number}
 */

const solution = (a, s = 0, e = a.length - 1, m = Math.floor((s + e) / 2)) => {
  if (a[m] < a[s] && a[m] < a[e]) return a[m]
  if (s === m && a[e] < a[s]) return a[e]
  if (a[m] > a[s] && a[m] > a[s]) {
    return solution(a, s = m, e, m = Math.floor((s + e) / 2))
  }
}

module.exports = {
  solution
}
