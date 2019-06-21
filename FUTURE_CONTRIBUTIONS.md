# Curriculum

GarageScript 2.0

Future Contributions:
----------------
module 10 Graphs
----------------
module 11 maps/weakmaps
----------------
module 12 sets/weaksets
---------------
js3/freeze.js // cFreeze
---------------------
js3/bind.js // cBind
--------------------

Write a polyfill for the .bind() function in Javascript.

The following is the bind function definition from the Mozilla Developer Network (MDN) web docs.

SyntaxSection
function.bind(thisArg[, arg1[, arg2[, ...]]])


ParametersSection

thisArg

The value to be passed as the this parameter to
the target function when the bound function is called.
The value is ignored if the bound function is constructed
using the new operator. When using bind to create a function
(supplied as a callback) inside a setTimeout, any primitive
value passed as thisArg is converted to object. If no arguments
are provided to bind, the this of the executing scope is
treated as the thisArg for the new function.


arg1, arg2, ...

Arguments to prepend to arguments provided to the bound
function when invoking the target function.


Return valueSection

A copy of the given function with the specified this
value and initial arguments.


Usage Examples are:

var testFunc = function(age) {
    return this.name + ' is ' + age + ' years old. Unused input is ' + arguments[1];
}

var person = {name: 'William'};

var testFuncInContext = testFunc.bind(person, 26);

console.log( testFuncInContext() ); // William is 26 years old. Unused input is undefined.

console.log( testFuncInContext(80) ); // William is 26 years old. Unused input is 80
