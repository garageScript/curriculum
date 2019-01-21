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
  a = Object.entries(a);
  console.log('i =', i);

  if (i === a.length) return obj;

  obj.k = a[i][0];
  obj.v = a[i][1];
  fun(obj.k, obj.v);

  return solution(a, fun, obj, i + 1);
};


module.exports = {
  solution,
};
