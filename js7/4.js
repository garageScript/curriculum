/* SERALIZE

Given an
function (f1) and a time,
return a serialized
function that executes consecutively with the given wait time between each
function call.For example:

    const func = serialize((v) => console.log(v), 5000);
func('hi1');
func('hi2');
func('hi3');
"hi1" will be printed after 5 seconds
"hi2" will be printed out 5 seconds after hi1 is printed,
and after another 5 seconds "hi3" will be printed out
*/

const solution = (fun, x) => {
    return (...a) => {};
};

module.exports = solution;