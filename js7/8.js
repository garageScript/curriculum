/* PROMISED SLEEP SORT
Given an array,
return a promise that resolves with the sorted array.If there are duplicate 
values, reject, do not resolve.

sleepSort([9, 8, 1, 5]).then(console.log) // will print out [1,5,8,9]
sleepSort([9, 8, 1, 5, 1]).then(console.log) // will never resolve
sleepSort([9, 8, 1, 5, 1]).then(console.log).catch(() => console.log('hi')) 
will console.log 'hi'
*/

const solution = (arr, cb) => {
    return new Promise((s, j) => s());
};

module.exports = solution;