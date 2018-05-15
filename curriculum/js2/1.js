/**
 * Given an array, return the same array where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return [];
  const solution =(arr,newarr=[],i=0)=>{
    if (arr.length===i){
      return newarr;
      if(arr<=5){
       return arr.push(0);
      }
      else
        return arr;
      return (arr,newarr=[],i+1);
    }
  }

module.exports = {
  solution,
};
