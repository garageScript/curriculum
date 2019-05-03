// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// The bind() method creates a new function that, when called,
// has its this keyword set to the provided value, with a given
// sequence of arguments preceding any provided when the new function is called.

var module = {
  x: 42,
  getX: function() {
    return this.x;
  },
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


Function.prototype.bind = function(content){
 // solution
}

var person = {
 name: 'William'
}

var testFunc = function(age){
  return this.name + ' is ' + age + ' years old and ' + arguments[1];
}

var testFuncInContext = testFunc.bind(person, 26);
console.log( testFuncInContext(80) ); // 'William is 26 years old'



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("--gsMap--")
Array.prototype.gsMap = function(){}
console.log(arr.map(x => x + 2)); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr.gsMap(x => x + 2));// [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


console.log("--gsFilter--")
Array.prototype.gsFilter = function(){}
console.log(arr.gsFilter(x => x % 2 === 0)); // [2, 4, 6, 8, 10]
console.log(arr.filter(x => x % 2 === 0)); // [2, 4, 6, 8, 10]


console.log("--gsReduce--")
Array.prototype.gsReduce = function(){}
console.log(arr.gsReduce((acc, curr) => acc += curr)); // 55
console.log(arr.reduce((acc, curr) => acc += curr)); // 55


console.log("--gsforEach--")
Array.prototype.gsForEach = function(){}
arr.gsForEach((x, i) => console.log(x, i));
arr.forEach((x, i) => console.log(x, i));
// 0 1
// 1 2
// 2 3 
// 3 4 
// 4 5 
//
