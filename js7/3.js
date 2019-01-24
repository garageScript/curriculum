/* THROTTLE JS7/3.JS
Given an
function (f1) and a time,
return a throttled
function that executes once during the given time.
Throttle is most commonly used during mouse drag events to make 
UI fluid but also prevent rendering from firing hundreds of times 
per second(30 - 60 times per second is good enough, hence 60 frames per second)

Example 1

const func = throttle(() => console.log("hi"), 500);
document.body.onmousemove = func;
"hi" will be printed out every 500 ms as the mouse moves over the document body
Example 2

throttleLog = throttle(console.log, 1000); 

We are planning to throttle console.log:
throttleLog("Hey!");
throttleLog("Hello");
throttleLog("Hello World");
"Hello World" will be called once, after 1000ms
Example 3

throttleLog = throttle(console.log, 1000); 

We are planning to throttle console.log:
setInterval(() => throttleLog("Hello"), 200);
"Hello" will be called once, after every 1000ms
*/

const solution = (fun, x) => {
    return (...a) => {};
};

module.exports = solution;