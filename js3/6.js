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

//input: 
// obj = {
//   5: 'blah blah',
//   name: 'ho',
//   zolo: '4thech'
// };

const solution = () => {
  Object.prototype.gsFilter = function(a, b, i = 0, c = Object.entries(a)) {
  if (i === entries.length) return c;
  b(entries[i][0], entries[i][1]);
  // entries = [ ['k1', 1], ['k2', 2], ['k3', 3]] 
  return solution(a, b, i + 1, entries);
  }
};


//output: 
// { 5: 'blah blah', zolo: '4thech' }

// const solution = (a, b, i = 0, entries = Object.entries(a), c) => {
//   if (entries.length < 1) return {};
//   if (i === entries.length) return c;

//   if(b(entries[i][0], entries[i][1])) c = (entries[i][0], entries[i][1]);

//   return solution(a, b, i + 1, entries);
// };

module.exports = {
  solution,
};