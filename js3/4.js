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

const solution = (a, b, i = 0, obj ={}) => {
    if (i === a.length) return false;

    const compliment = b - a[i];

    if (obj[compliment]) return true;

    obj[a[i]] = 1; 
    
    return solution(a, b, i + 1, obj);
}

module.exports = {
    solution,
};