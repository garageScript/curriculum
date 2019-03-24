/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

// FOR LOOP

// const solution = (a, b) => {
// if (a.length < 1) return false;

//     for (var i = 0; i < a.length; i++) {
//         for (var j = i + 1; j < a.length; j++) {
//             if ((a[i] + a[j]) === b) {
//                 console.log(a[i], a[j]);
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// RECURSION

const solution = (arr, num, i = 0, obj ={}) => {
    if (i === arr.length) return false;

    const compliment = num - arr[i];
    // rather than use another for loop, subtract the num
    // from the current element in the array and
    // check the object for that value
    
    if (obj[compliment]) return true;
    // if the object contains compliment element return true
    // otherwise the object doesn't contain the current element
    // minus the num variable
    obj[arr[i]] = 1; 
    return solution(arr, num, i + 1, obj);
}

module.exports = {
    solution,
};
