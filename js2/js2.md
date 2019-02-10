Arrays: Like a locker room. Each locker has a number. 
when you look into the locker, there could be anything in there

It has a special property called length.
Example: 

a = [4, ‘hi’ ,12];
a.length? 

a[0] ?
a[1] = a[0] + a[2]
a?

1non-primitive data
Everything is an address
Address -> Home

a = [4, ‘hi’ ,12];
b = a;
b[1] = 2;
b?
a?

b = [1,2] === [1,2] ?

a = [4,2,12]  
b = a
b[2] = a;b[2] = a;
b[2][1] = 900 
b?
a?

a = [4,2,12];
b = a;
b[b[1]] = 900; // b? a?

a = [1,2,3]
b = a
b = [4,5,6]
b? a?




Function example
a = [4,8,12];
add1 = (arr, i=0) => {
  if(i === arr.length) return arr;
  arr[i] = arr[i]+1;
  return add1(arr, i+1);
}
b = add1; 
b?

b = add1(a); 
b?
a?

c = a === b
c?


Array Functions
a = [4,8,12]
a.push(6);
a?

a = [4,8,12]
b = a
a.push(b);
b? a?

Important functions
map -> returns an array of the same length. 
Takes in a function and uses each element as the value
Examples: 

    b = [5,6,7].map(v => 5)  // v => 5 is the same as v => { return 5 }
    b ?
    b = [5,6,7].map(v => v + 2)
    b ?

reduce -> Accumulates!
Walkthrough:
b = [5,6,7].reduce((a, v) => a+v, 6);
b?

b = [5,6,7].reduce((a, v) => {
  if(v>5) a.push(v);
  return a;
}, [9]);
b?


z = [1,2,3]
b = [5,6,7].reduce((a, v) => {
  if(v>5) a.push(v);
  return a;
}, z);
b?
z?
b[0] = 900
b?
z?

Prototype!
Wanna add functions into Arrays? Just add them to prototype.
(this) is what comes before `.`

Array.prototype.last = function() {
  return this[ this.length-1];
}
console.log( [1,2,3].last() );
what gets printed out?

Array.prototype.guess = function(i=0, z=0) {
  if(i === this.length) return z;
  return this.guess(i+1, this[i] + z);
}
b = [7,8,2].guess;
b?

b = [7,8,2].guess();
b?






Download the zip file and work through the exercises:
https://github.com/garageScript/curriculum/tree/master/curriculum/js2

Feel Free to use the code editor of your choice!
Atom: https://atom.io/
Visual Studio Code: https://code.visualstudio.com/download


Exercises:
1. Use Map:


http://jsstation.llip.life/questions/-KzurbVLccH1B648Ub0b
http://jsstation.llip.life/questions/-KzuuLAUoXbCN0b10rjL
http://jsstation.llip.life/questions/-KzuwX1bWh2mMtCStAst

2. Use reduce to get:

http://jsstation.llip.life/questions/-Kzuy6maKG8hjzCTD59b
http://jsstation.llip.life/questions/-Kzuyfj1vE7hlP68W2Pk
http://jsstation.llip.life/questions/-Kzv-UDXSKl28HhcNNr2
http://jsstation.llip.life/questions/-Kzv0zlK0vUSGYTYmJSF

3. Do not use helper libraries
http://jsstation.llip.life/questions/-Kzv4EemttP5_BQt5avX
http://jsstation.llip.life/questions/-Kzv9ocQ_2Ncni8ivZ_F
http://jsstation.llip.life/questions/-KzvC6u7eQwVDYtI963w
--------------------

More Problems!
Reverse: http://jsstation.comllip.life/questions/-KzviDeoa2zdzL7hcQAi
8. (removeExtra) - http://jsstation.comllip.life/questions/-KzvkzzXoYoApBtT5V0G
3. (countx) -  http://jsstation.comllip.life/questions/-KzvmYCo0jv6MeUO_Ux_
5. (concat) - http://jsstation.comllip.life/questions/-KzvoCSoSjUe54_ANguf
9. (remxtra) - http://jsstation.comllip.life/questions/-Kzvymv1QKDlsgvJCVv8
7. (maxArrArr) - http://jsstation.comllip.life/questions/-Kzw-EL5QNEB-qzv5wPA

Not map reduce
17. (arrayOfPrime) - Return array of all prime numbers from 0 to x.
4. (isInArr) - Takes in 2 arrays, returns true if any element in 2nd array shows up in 1st array
http://jsstation.comllip.life/questions/-KybSMC713LtuDv8UcIN
16. (sleepSort) - Takes in an array and a function, call the function once with sorted array
10. (compare2) - Takes in 2 arrays, return if both are equal

Strings
1. (strHas) - Takes in a string and a character, return if the string has the character
2. (kebabCase) - Takes in a string, return kebab case (hint: use .toLowerCase() function)
