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
console.log(unboundGetX());
// The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

Function.prototype.gsBind = function(context){
  let self = this;
  let args = Array.prototype.slice.apply(arguments, [1]);

    let wrapperFunc = function(){
      let combinedArgs = args.concat(Array.prototype.slice.apply(arguments));
      return self.apply(context, combinedArgs);     
    }
  return wrapperFunc;
}

var person = {
 name: 'William'
}

var testFunc = function(age){
  return this.name + ' is ' + age + ' years old and ' + arguments[1];
}

var testFuncInContext = testFunc.gsBind(person, 26);
console.log( testFuncInContext(80) );
// 'William is 26 years old'
