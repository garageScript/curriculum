/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj, keys = Object.keys(obj), idx = 1, max=obj[keys[0]]) => {
  let key = keys[idx]

  if(idx === keys.length) return max;

  if(obj[key] > max) max = obj[key];

  return solution(obj, keys, idx+1,max);

};

const my_obj = {
  first: 100,
  second: 200,
  third: 400,
  fourth: 5000,
  sixth: 0,
};

console.log(solution(my_obj));

module.exports = {
  solution,
};
