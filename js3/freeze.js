// Replicate Object.prototype.freeze()

const obj = {
  prop: 42
};

const obj2 = {
  prop: 55;
}

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
//
Object.prototype.gsFreeze = function() {

}

Object.gsFreeze(obj2);

obj2.prop = 44;

console.log(obj2.prop);
// 55
