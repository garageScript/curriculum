Good Job for completing JS 0! This picks up where you left off....

Default parameters
a = (x=5) => {
  return x+2;
};
b = a;
b ?

b=a(1) + a() ? 

a = (x, y=2) => {
  return x + y + 1;
};
b = a(5) === ( a(2,3)+2 )
b  ?

c = (x) => {
  if(x) {
    return 100;
  }
  return 200;
};
d = c(b)
d?

=================================================

a = ( mani ) => {
  return mani();
}

b = () => {
  return 5;
}
c = b;
c?

c = a(b);
c?

d = a( () => {
  return 5;
});
d?

======================
What does this do?
a = (x=1, result=0) => {
  if(x>3) {
    return result;
  }

  return a(x+1, result+x) 
} 
b=a
b?

b=a()
b ?

==============

a = (x, b) => {
  if (x === 0) return;
  b()
  return a(x-1, b);
} 
// what does this do?

How do you use a? 
a(5, () => {
  console.log(‘hi’)
})









Unix commands
cd folder
	change / go into folder
ls - view files in the folder
cd .. 
	go into parent folder

Text Editor (VIM - Vim was here before your IDE. Vim will be here after your IDE is long gone. Vim will outlast your job, your career, your marriage, your life)

cd folder
type vim

VIM BASICS - Default is normal mode. To type ANYTHING at all, you have to press ‘i’ to go into insert mode. Then hit ESC to go back to normal mode
Save & quit: Type “:wq” or “ZZ”
Go to a different file: CTRL + F, then search file name and hit enter



Some VI/VIM Commands

:1
Go to line 1
shift+g
End
dG
delete till end of file
J
join two lines
u
undo
Ctrl + R
redo
:noh
clear highlighting till next search
:vsp file_path
open new file vertical split window
ctrl + w twice
switch between windows
d63G
Delete from current line to line 63
:a,bd
Delete from line a to line b example, :35,200s/^/#/
:set noexpandtab
Turn off tab to replace with space

Additionally, here’s a reference VIM Cheatsheet

Challenge Descriptions

1. (sum2) - takes in 2 numbers, and returns their sum.
If they struggle:
Write a function that takes in 3 numbers, and returns their sum.
Write a function that takes in 4 numbers, and returns their sum, etc.
1. 
(max3) - takes in 3 numbers, returns the biggest one.
ITS: Write a function that takes in 4 numbers and returns the biggest one.
1. (sayHello) - takes in a number x, return string with “hello” repeated x times. 
ie: sayHello(2) -> “hellohello”)
ITS: takes in a number x, returns sum of all numbers up to x
takes in a number x, returns sum of all numbers up to x and greater than 5
takes in a number x, returns sum of all numbers up to x*2
(bonus) - takes in 2 numbers (x, y), returns sum of all numbers up to x plus sum of all numbers up to y
1. (printStr) - takes in a number n and string, return the string repeated n number of times
printStr(2, ‘abc’) -> ‘abcabc’
1. (callX) - takes in a number and a function F, calls the F x number of times.
	ITS: takes in a function F, keep calling F until it returns false
calls the function x*2 number of times 
1. (callX2) ... calls the function x number of times (with parameter 1,2,3...x)
1. (callSmaller) - takes in 2 numbers (a,b) and a function, call the function x (smaller of a and b) number of times.
1. (getDivisors) - takes in a number, returns sum of all the divisors (except 1 or itself)
Hint: %
ie: getDivisors(6) -> 5 because 2+3
	ITS: returns biggest divisor that is not itself.
7 (isPrime) - takes in a number, returns if number is prime (Missing test)
1. (gcd) - Greatest common denominator
1. (find7m) - takes in a number, returns the next number that is divisible by 7
(2timeouts) - takes in 2 numbers (a,b) and a function, execute the function after a seconds, and then after b seconds 
Hint: setTimeout( a, 1000) -> setTimeout is a system function that will execute a after 1000 ms

Bonus:
1. (customTimeout) - takes in a number and a function, execute that number every second.


Terminology:
* Callbacks
* Closure

Extras
const vs let


require(‘./file.js’): Will give you the module.exports value of that file
module.exports
setTimeout


Ignore
Topics you would like to see:

Single threading
ES6 syntax - 
	() => {}, object shorthand, export/import

callbacks

setTimeout
setInterval

NodeJS

request.get



