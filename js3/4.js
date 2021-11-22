/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number.
 * (The numbers in the array is not unique, meaning there may be duplicate numbers)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num) =>{
  const answer = arr.reduce((result,e)=>{
    if(result[0][num - e]) result[1] = true
    result[0][e] = true
    return result
  },[{}, false])

  return answer[1]

}

module.exports = {
  solution
}
