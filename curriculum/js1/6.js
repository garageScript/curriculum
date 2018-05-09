/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

//Divisor is a whole number that evenly divides another whole number.

const solution = (a) => {
    const getDivisors = (num) => {
        let sum = 0;
        for(let i=2; for i<num; i++)
            if(num%i=0){
                sum+=num/i;
        }
    }
    return getDivisors(a);
};

module.exports = {
  solution,
};
