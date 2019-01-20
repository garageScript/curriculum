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

const solution = () => {
  Object.prototype.gsFilter = function(fun, i = 0, entries = Object.entries(this), obj = {}) {
    if (i === entries.length) return entries;
    let keys = entries[i][0];
    let values = entries[i][1];

    obj.push(fun(keys, values, i, this));

    return this.gsFilter(fun, i + 1, entries, obj);
  };
};

// solution();

module.exports = {
  solution,
};
