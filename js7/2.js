/* DEBOUNCE JS7/2.JS
Given an
function (f1) and a time,
return a debounced
function that executes after the given time.Debounce is most commonly used
for window resize events so page doesn 't rerender hundreds of times per second.

Example 1:

    const func = debounce(() => console.log('hi'), 200);
window.onresize = func;
"hi" will be printed out once, 200ms after you finish resizing the window.
Example 2:

    bouncedLog = debounce(console.log, 1000); // We are planning to debounce console.log
setInterval(() => bouncedLog("Hello"), 200);
"Hello" will be never be called.
Example 3:

    bouncedLog = debounce(console.log, 1000); // We are planning to debounce console.log
bouncedLog("Hey!");
bouncedLog("Hello");
bouncedLog("Hello World");
"Hello World" will be called once, after 1000ms
*/

const solution = (fun, x) => {
    return (...a) => {};
};

module.exports = solution;
