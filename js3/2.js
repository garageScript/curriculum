/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */

const solution = (arr) => {
  const freqDist = arr.reduce((dict, e) => {
    dict[e] = (dict[e] || 0) + 1
    return dict
  }, {})

  const res = Object.keys(freqDist).reduce((acc, cur) => {
    return freqDist[acc] > freqDist[cur] ? acc : cur
  })

  return Number(res)
}

module.exports = {
  solution
}
