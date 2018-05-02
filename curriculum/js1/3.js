/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a) => {
    let result="";
    const sayHello = (x) => {
        for(let i = 1; i<=x; i++){
          result+="hello";
        }
        return result;
    };
    return sayHello(a);
};

module.exports = {
  solution,
};
