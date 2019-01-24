/*
Write a higher order
function so that users can call asyncReduce on an array of promises.

Example:

    [Promise1, Promise2....].asyncReduce((acc, e, i) => {
            acc will start with a, then the return of previous reduce functions.
            e will be the result for every resolve, in the order of the array.
            return acc + e;, 'a').then(result => {
            result would be the final accumulated value.
        });
*/

const solution = () => {
    // Write your code here:
    // Array.prototype.asyncReduce = ...
};

module.exports = solution;