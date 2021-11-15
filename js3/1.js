/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  return arr.reduce((values, e) => {
    if((obj.hasOwnProperty(e))){
      values.push(obj[e])
    }
    return values
  },[])
}

module.exports = {
  solution
}
