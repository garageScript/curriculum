/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

  const solution = (num1, num2) => {
    function Object(j,i){
      this.x = j
      this.y = i
    }
  
    const createCols = (i, j = 0, result = []) =>{
      if(j === num2) return result
      result.push(new Object(j, i))
      return createCols(i, j + 1, result)
    }
  
    const createGrid = (i=0, result = []) => {
      if(i === num1) return result
      result.push(createCols(i))
      return createGrid(i + 1, result)
    }
   
    return createGrid()
  }
module.exports = {
  solution
}
