/* PROMISE ALL
Write a
function resolveAll that has the same functionality as Promise.all.Given an array of promises, resolve after all the promises have resolved with the values of all the resolved promises.You can assume that every element in the array is a promise object.

Example:

    resolveAll([new Promise((s, _) => s(7)), new Promise((s, _) => s(8)), new Promise((s, _) => s(2)])
        .then(console.log) Should log[7, 8, 2], in the order the promise was inputted
*/

const resolveAll = (arr) => {
    return new Promise((s, j) => s());
};

module.exports = resolveAll;
