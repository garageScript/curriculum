# Curriculum

GarageScript 2.0

Future Contributions:
----------------
js2/12.js // gsFilter
----------------
The filter() method creates a new array with all
elements that pass the test implemented by the provided function.

callback

Function is a predicate, to test each element of the array.
Return true to keep the element, false otherwise.
It accepts three arguments:

element
The current element being processed in the array.

index (Optional)
The index of the current element being processed in the array.

array (Optional)
The array filter was called upon.

thisArg (Optional)
value to use as this when executing callback.
----------------
js3/freeze.js // gsFreeze
---------------------
js3/bind.js // gsBind
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
--------------------












tmux kill-session
tmux kill-server
ggdG 
Supervisor node 1.js 
Ctrl b []
Ctrl b shift % 
Ctrl b x 
Ctrl b O
Ctrl b c 
Ctrl b n 
Ctrl y coma 
tree -I 'node_modules'

Npm I
npm i -D chai
npm i -D mocha
Npx mocha
npx mocha js0/test

yarn test curriculum/js0/__tests__/1.js

git clone /home/Shared/curriculum 
yarn  git checkout -b branchName 


git reset --hard HEAD git status git add filePath
git commit -m “solves problem 1”
git branch

Git merge p1
Git merge p2
Git merge p3
Git merge p4
…
…

Git merge master

cp -r curriculum old_curriculum2

rm -rf old_curriculum
rm -rf old_curriculum2/
git clone /home/Shared/curriculum
