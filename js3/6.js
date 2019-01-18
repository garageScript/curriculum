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

// const solution = () => {
//   Object.prototype.gsFilter = function(a, b, i = 0, entries = Object.entries(a)) {
//     if (entries.length < 1) return {};
//     if (i === entries.length) return entries;
//     b(entries[i][0], entries[i][1]);
//     // entries = [ ['k1', 1], ['k2', 2], ['k3', 3]]
//     return solution(a, b, i + 1, entries);
//   };
// };

const obj1 = {
  5: 'blah',
  name: 'ho',
  zolo: '4thech',
};

const obj2 = {};

const solution = () => {
  Object.prototype.gsFilter = function(a, b, i = 0, obj = {}, keys = Object.keys(a), values = Object.values(a)) {
    console.log(a);
    console.log(b);
    if (a.length < 1) return {};
    if (i === a.length) return obj;
    obj.keys = b(a.keys);
    obj.values = b(a.values);
    return solution(a, b, i + 1, obj);
  };
};

solution();

console.log(obj1.gsFilter((k, v) => v.length > 3));
// output: {5:'blah blah', zolo:'4thech'}
console.log(obj2.gsFilter((k, v) => v.length > 3));
// {}
console.log(obj1.gsFilter((k, v) => v.length > 7));
// output: {5:'blah blah'}

module.exports = {
  solution,
};
