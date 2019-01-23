/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah', name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
 */


const solution = (a, fun, obj = {}, i = 0) => {
  if (i === Object.entries(a).length) return obj;
  const k = Object.keys(a)[i];
  const v = Object.values(a)[i];
  if (fun(k, v))obj[k] = v;
  return solution(a, fun, obj, i + 1);
};


module.exports = {
  solution,
};
