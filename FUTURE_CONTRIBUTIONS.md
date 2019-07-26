# Curriculum

GarageScript 2.0

Future Contributions:



----------------
module 3 functions/objects
---------------

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

function SuperHero1(first, last, age, name, powers) {
  // Batman
  Person.call(this, first, last, age)
  this.name = name;
  this.powers = powers;
}

function SuperHero2(first, last, age, name, powers) {
  // Superman
  Person.bind(this)
  this.name = name;
  this.powers = powers;
}

function SuperHero3(first, last, age, name, powers) {
  // WonderWoman
  Person.apply(this)
  this.name = name;
  this.powers = powers;
}

var Jason = new Person('Jason', 'Hopf', 25)

var Batman = new SuperHero1('Bruce', 'Wayne', 30, 'Batman', ['Rich', 'Intelligence'])
var Superman = new SuperHero2('Kal', 'El', 32, 'Superman', ['flight', 'super strength'])
var WonderWoman = new SuperHero3('Princess', 'Diana', 28, 'WonderWoman', ['lasso of truth'])

console.log(Jason)
console.log(Batman)
console.log(Superman)
console.log(WonderWoman)


Object.prototype.cFreeze = function() {
  // ..code goes here
} 

function.prototype.cCall = function() {
  // .. code goes here
}

Function.prototype.cBind() {
  // ..code goes here
} 

Function.prototype.cApply = function() {
  // ..code goes here



----------------
module 10 || module 8 Trees/Graphs
----------------





----------------
module 11 sets/weaksets
----------------
The Set object lets you store unique values of any type,
whether primitive values or object references.






Set.prototype.cHas = function(){
  // ..code goes here
}

Set.prototype.cforEach = function(){
  // ..code goes here
}

Set.prototype.cValues = function(){
  // ..code goes here
}


weaksets
-------------
The WeakSet object lets you store weakly held objects in a collection.






WeakSet.prototype.add = function(){
  // ..code goes here
}

WeakSet.prototype.delete = function(){
  // .. code goes here
}

WeakSet.prototype.has = function() {
  // ..code goes here
}



----------------
module 12 maps/weakmaps
---------------
The Map object holds key-value pairs and remembers the 
original insertion order of the keys.
Any value (both objects and primitive values)
may be used as either a key or a value





Map.prototype.cforEach = function() {
  // ..code goes here
}

Map.prototype.cEntries = function() {
  // ..code goes here
}

Map.prototye.cValues = function() {
  // ..code goes here
}

weak map
----------
The WeakMap object is a collection of key/value pairs where keys are weakly referenced.
The keys must be objects and the values can be arbitrary values






WeakMap.prototype.cGet = function(){
  // ..code goes here
}

WeakMap.prototype.cHas = funciton(){
  // ..code goes here
}

WeakMap.prototype.cSet = function(){
  // ..code goes here
}
