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
  Object.prototype.gsFilter = function(fun, i = 0, entries = Object.entries(this)){
    if (i === entries.length) return entries;

    entries = fun(entries[i][0], entries[i][1]);

    return this.gsFilter(fun, i + 1, entries);
  };
};

// solution();

module.exports = {
  solution,
};
