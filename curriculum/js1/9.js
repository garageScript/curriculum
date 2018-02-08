/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (num,output=0)=>{
  if(num%7==0){
    output= num+7;
    return output;
  };
  factor = Math.ceil(num/7);
  output = factor*7;
  return output;
};

module.exports = {
  solution,
};
