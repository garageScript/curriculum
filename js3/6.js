/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr) => {

  const answer = arr.reduce((result, e)=>{
    if(result[0][e] > 0 && !result[1][e]){
      result[1][e] = true
      result[2].push(parseInt(e))
    }
    result[0][e] = (result[0][e] || 0) + 1
    return result
  },[{},{},[]])

  return answer[2]
  
}

module.exports = {
  solution
}
