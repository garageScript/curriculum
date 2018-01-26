/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @param {array} keys
 * @returns {number} 
 */

const solution = (obj, keys=Object.keys(obj), i=0, max=obj[keys[i]])=>{
  if(i===keys.length){
    return max;
    }
  if(obj[keys[i]]>max){
    max = obj[keys[i]];
  }
  return solution(obj, keys, i+1, max);
}

module.exports = {
  solution
}

