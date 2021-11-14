/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  return arr.map(e => {
    if(obj.hasOwnProperty(e)) return obj[e]
  }).filter((e)=> {
    return (e || typeof(e) === 'boolean')
  })
}

module.exports = {
  solution
}
