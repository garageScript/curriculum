Objects: Just like array, but there are labels on the lockers!

const a = { name: ‘song’ };
a[‘name’] ?
a[‘age’]  = 56;  
a?

a = {name: ‘ming’, joe: ‘awesome’};
b = a;
b[‘name’] = ‘joe’;
a? 
b?
b[b[‘name’]] = ‘HI’
a?
b?

a = {name: “Tarzan”}
b = a;
b[‘friend’] =  a;

b[‘friend’][‘lover’] = ‘Jane’; 
b?
a?

a[‘name’] = “sarah”

a? 
b?

c = [a,a];
c[0][‘lover’] = c[1][‘name’];

a? b? c?

LinkedLists: Object is pointing to another object. 

a = {value: 2}
b = {value: 5}
C = {value: 20}
a[‘next’] = b;  //a?, b?, b[‘next’] ? a[‘next’] ?
b[‘next’] = a; 
c = a[‘next’][‘next’] === a
c?

guess = (n, v=0) => {
  if(!n) return v;
  return guess(n.next, v + n.value);
}

C = {value: 20}
b = {value: 5, next: c}
a = {value: 2, next: b}
a -> b -> c

d = guess;
d?

d = guess(a);
d?


Trees: Object with a property (children), that is an array of objects.
     A		      	    a
    /|\    	 	   / \
   B c D		  b   c	
 /      \
e        f

normal (left):
A = {value: 15, children: [b,c, d]}
B = {value: 12, children: [e]}

Binary (right):
A = {value: 15, children: [b,c] }

dfs = (n, c=[]) => {
  if(!n) return;
  console.log(n.v);
  c = c.concat(n.children || [ ]);
  return dfs(c.pop(), c);
}

what is dfs(a) given the tree above? ->
Assume a.v is “a”, b.v is “b”, c.v is “c”, etc.
Change to BFS

Test (to make sure they really knows their stuff)
a = {v: 2}
b = {v: 2}
a === b?

a = {v: 2}
b = a
a === b?

a = {v: 2}
b = {v: 2}
a[‘next’] = b
a === b?


Object functions: entries, keys, values
oObject.entries( a )
Object.keys( a )
Object.values( a )

(Objects)

Iteration:
Object.prototype.forEach = function(fun, i=0, entries = Object.entries(this)) {
  if(i===entries.length) return;
  fun(entries[i][1], entries[i][0]);
  return this.forEach(fun, i+1);
}

(ignore this for now)
Given a string, build object of occurrences: 
“hello the cat rn up the cat looking hello hello cat”
hint: str.split(‘ ‘) will give you array of words


(biggestValue) - given an object, return the largest value ( Object.keys( {} ) )

(mostCommon) - Takes in an array of numbers, find the most common one 

(repeatingElements) - Takes in an array of numbers, return an array of all duplicate numbers. 

(xpair) - Takes in an array and a number, return true if any pairs adds up to the number

(map) - Takes in an object and a function. call the function with each key, value.

(filter) - Takes in an object and a function. Return a new object with key/value if the function returns true.

(findGreatest) - Takes in a linkedList, return biggest number

(findLoop) - Take in a linkedList, return if the list loops on itself

(findStartLoop) - Take in a linkedList, return the node value where the circular loop starts

(findNum) - Takes in a tree and a number, return true if number exist in the tree


// CRAZY HARD:

(bfsArr) - Takes in a tree, return an array of each level

(bfsMax) - Takes in a tree, return the level with maximum number of children

(longestLeg) - Takes in a tree, return length of longest leg

(findFiles) - Takes in a file name, return path of the file.


Tips for being amazing mentor:

Start your lesson with: These are not real code you see. They are crafted to explain concepts.
Jump right into the content. Don’t spend too much time on overview. 

“Let’s start with Variables! Left side takes value of the right side”
Few words - Teach by examples, use less words.
a = 5+7: Left side takes value of the right side! Take 12 and put into variable a. 

That’s all you have to say
After going over numbers, strings, boolean, say that these are primitive variables. 
If you have to define primitive variables, “Most basic data”

Arrays - series of boxes, each box has a number.
Explaining non-primitive examples: address and houses are very clear examples
Arrows! Very important, very clear. 

draw arrows for variable c, d, etc. to really drive home the point.
If students ask questions:
If relevant, write it down. We will get to these after the lesson. Perhaps it will be answered.

If you don’t know, try to guess, talk about it together. If you don’t know, tell them you’ll ask.
Split up the screen. Computer vs code
DO NOT rewrite array / object. Always point + reference

Teaching handbook
