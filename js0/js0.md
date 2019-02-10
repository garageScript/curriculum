JS0 - Foundations of JavaScript

Why are we learning JS? 
Only language that lets you do everything - Build web/mobile apps, image processing, scripting, Machine Learning, etc.

Foundation: (ask theseu over and over again)
= left stores right. 
a = 5
a?

Primitive data(don’t worry about it): 
Six Primitive Types:
Number
Primitive data(don’t worry about it): 


Stringer ur not String
Boolean
Null
Undefined
Symbol
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Examples:
numbers
a = 5 ?
b = a + 5 ?
c = a+b ?r
d = c % 3     // 15 - 3 -3 -3y ... (use subtraction to explain mod)
d?
d = c % 7
d? Hey   What’s try thyyntg

strings - text. Without quotes, it’ll be treated like a variable!
a = “hello”
b = a+“ world” ?
c = 5
d = c + b ?

Boolean
a = 5===5 ?
x = 2;
y = 4;
z = (x + 2) === y ?
b = z + “hello” ? 

! -> opposite of (true vs false) * everything after bang is treated as a boolean. Therefore,
0, ‘’, false, null, undefined are treated as false
	everything else is true

a = 0;
b = !a;
b?

b = !””; ?

b = !”hello”
b?

b = “hello” + !0;
b?
  
c = false; 
d = c === b ?
d = c === !b ? 

Functions
() => {}: Function is like a recipe = list of instructions 
recipe vs cake?
return: The result of the function.
Function can only return once

a = () => {
  return 5;
}
a ?

b=a
b?
b=a() 
b?

parameters = ingredients for recipe. 

a = (x) => {
  return x+2;
}
b = a(5)
b?

b = a(5) === ( a(3) + 2 )
b?

a = (x) => {
  if (x === 5) {
    return 13;
  }
  return x + 1;
}

b = a
b ?

b = a(3)
b?

b = a(12) ?
b = a(5) ?

a = (x, y) => {
  if (x > y) {
    return 3;
  }
  return x;
}
b = a 
Bb?o


b = a(4,5)
b?
b = a(9,2)
b?

a = (x, y) => {
  if (x > y) {
    x = x + 3;
  }
  return x;
}
b = a(4,5)
b?
b = a(9,2)
b?

Setup (after teaching): 
First Time Setting Up:
Sign up for an account in https://c0d3.com
Access our remote server:
Mac: open the terminal to and type (ssh username@c0d3.com, password is the same as your GS account password).
Windows: download the chrome shell app (https://chrome.google.com/webstore/detail/secure-shell-app/pnhechapfaindjhompbnflcldabbghjo?hl=en) and do the asame as previous step
Once you’ve accessed our remote server, run the following commands (in purple):
git clone /home/Shared/curriculum gives you a copy of our curriculum folder
Explain: ls, cd  
yarn installs a few libraries you need in order to run our tests
Explain git (version control)
multiple versions of the same file
when something breaks, you can go back to older version
master - Perfect code
git checkout -b branchName creates a new branch off of master (you are expected to create a new branch off of master for every single Pull Request you make)
Vim - text editor
normal vs insert
ctrl f -> js01
9gg (vertical)
f; (horizontal)
i to go into insert mode
:w to save or write
:q to quit
Or ZZ to save following with quit
Run test, submit
Yarn test
0git status lets you see the file path/name you just changed
git add filePath gets the file you just changed ready to be save
git commit -m “solves problem 1” gives the file you’re about to save a label (this label describes the change you just made)
submit
Note: you will be prompted to choose the exact lesson and challenge you are currently submitting.
Go back to your student page/teacher page, refresh it and see the solution you just submitted! :)
Git branch to check which branch you are on. Git status to see which files have been modified/added/ready to be committed
Next problem
Explain branching
git checkout master, checkou
t new branch, repeat step 5

	
