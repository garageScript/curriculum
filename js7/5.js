/* CURRY

Given an
function (f1) that takes in n number of parameters,
    return a
function (b) that will always
return a
function until b has been called with sufficient parameters.

Example 1:

    const sum = (a, b, c) => a + b + c;
const csum = curry(sum);
const a = csum(1); // a is a function
const b = a(2); // b is a function
const c = a(3); // c is 6, because 3 parameters have been passed in.
Example 2:

    const sum = (a, b, c) => a + b + c;
const csum = curry(sum);
const a = csum(1, 2); // a is a function
const b = a(3); // b is 6, because 3 parameters have been passed in.
*/

const solution = (fun) => {
    return (...a) => {};
};

module.exports = solution;
