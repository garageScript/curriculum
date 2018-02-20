/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */
;
const solution = (num,sum=0,i=2)=>{
      if(num===i){
            return sum;
            console.log(sum);
            }
      if(num%i===0){
            sum = sum+i;
            console.log(sum);
            }
      return solution(num,sum,i+1);
      
}
module.exports = {
  solution,
};
