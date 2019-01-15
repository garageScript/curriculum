/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

solution = (a, b, i = 0, entries = Object.entries(a)) => {
  if (i === entries.length) return;
  b(entries[i][0], entries[i][1]);
  // entries = [ ['k1', 1], ['k2', 2], ['k3', 3]] 
  return solution(a, b, i + 1, entries);
};

obj = {
  k1: 1,
  k2: 2,
  k3: 3
};

solution(obj, console.log);