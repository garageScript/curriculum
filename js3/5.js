/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

// Recursion 1

/*

const solution = (a, b, index = 0, entries = Object.entries(a)) => {
  if (index === entries.length) return;
  b(entries[index][0], entries[index][1]);
  return solution(a, b, index + 1, entries);
};

*/

// Recursion 2

const solution = (obj, fun, i = 0, keys = Object.keys(obj)) => {
  if (i === keys.length) return keys
  fun(obj[keys[i]], keys[i])
  return solution(obj, fun, i + 1, keys)
}

module.exports = {
  solution,
};
