/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj,i=0,val=Object.values(obj),greatest=val[0])=>{
  if(val.length == 0)return '';
  if(i==val.length) return greatest;
  if(val[i]>greatest) greatest = val[i];
  return solution(obj,i+1,val,greatest)
}
module.exports = {
  solution
}

