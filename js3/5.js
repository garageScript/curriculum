/*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2) => {

  return Object.entries(obj1).reduce((result, e) => {
    if(obj2.hasOwnProperty(e[0])) result[e[0]] = obj2[e[0]](e[1])
    else{ result[e[0]] = e[1] }
    return result
  }, {})
  
}
module.exports = {
  solution
}
