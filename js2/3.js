/**
 * This helper function adds 0 to the array
 * @param {array} col 
 * @param {number} y 
 * @param {array} colResult 
 * @returns {array}
 */
const addColElems = (col, y=0, colResult = []) =>{
  if(y >= col) return colResult
  colResult.push(0)
  return addColElems(col,y+1,colResult)
}

/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @param {number} i
 * @param {array} result 
 * @returns {array}
 */
const solution = (row, col, i = 0, result = []) => {
  if(i >= row) return result
  result.push(addColElems(col))
  return solution(row, col, i+1, result)
}

module.exports = {
  solution
}
