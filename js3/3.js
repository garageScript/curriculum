/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a) => {
  const freqDist = a.reduce((dict, e) => {
    dict[e] = (dict[e] || 0) + 1
    return dict
  }, {})
  const filter_arr = Object.keys(freqDist).filter((cur) => {
    return freqDist[cur] > 1
  })
  return filter_arr.map((e) => { return Number(e) })
}

module.exports = {
  solution
}
