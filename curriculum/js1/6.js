/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a) => {
    var sum = 0;
    for(var i=2; i<a; i++){
      if( a%i == 0){
        sum += i;
      }
    }
    return sum;
};

module.exports = {
  solution,
};
