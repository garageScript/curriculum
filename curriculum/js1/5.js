/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b) => {
    const callX = (num, cb) => {
        for(let i=0; i<num; i++){
            cb();
        }
    }
    return callX(a, b);
};

module.exports = {
  solution,
};
