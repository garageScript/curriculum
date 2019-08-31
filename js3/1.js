/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj) => {
  if (obj == null) {
    return 0
  }

  valArr = Object.values(obj)
  return valArr.reduce((acc, cur) => {
    return acc < cur ? cur : acc
  })
}

module.exports = {
  solution
}
