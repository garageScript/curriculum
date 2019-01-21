/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
 */


const solution = (a, fun, obj = {}, i = 0) => {
  console.log('a = ', a);

  if (i === 0) {
  a = Object.entries(a);
  }
  console.log('i =', i);
  console.log('a = ', a);
  console.log("obj =", obj)

  if (i === a.length) return obj;

  obj.k = a[i][0];
  console.log("obj.k = ", obj.k);
  obj.v = a[i][1];
  console.log("obj.v =", obj.v);
  console.log("obj =", obj);
  // fun(obj.k, obj.v);
  console.log('-----');
  return solution(a, fun, obj, i + 1);
};


module.exports = {
  solution,
};
