/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr) => {

  const answer = arr.reduce((result, e)=>{
    if(result[0][e] === 1){
      result[1].push(e)
    }
    result[0][e] = (result[0][e] || 0) + 1
    return result
  },[{},[]])

  return answer[1]
  
}

module.exports = {
  solution
}
