/* CLEARALLTIMEOUTS JS7/1.JS    
ClearAllTimeouts
Write a function that clears all existing timeouts on a page.
Since this is overwriting system setTimeout
function, you need to restart the test every time you change the file.
*/

// write your code here!
const solution = () => {
// global clear all timeout:
            cat = () => {
            let id = window.setTimeout(function() {}, 0);

            while (id--) {
                window.clearTimeout(id);
            }
    };
};

module.exports = {
    solution,
};
