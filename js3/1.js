/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  return arr.reduce((values, e) => {
    if((obj[e] && obj.hasOwnProperty(e)) || typeof(obj[e]) === 'boolean'){
      values.push(obj[e])
    }
    return values
  },[])
}

module.exports = {
  solution
}
