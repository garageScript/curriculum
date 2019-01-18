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
  Object.prototype.gsFilter = function(fun, i = 0){

    console.log(Object.entries(this).length);
    if (Object.entries(this).length === 0) {
      console.log(this);
      return this;
    }
    // if (i === entries.length) return entries;
    // fun(entries[i][0], entries[i][1]);

    // return solution(fun, i + 1);
    return this;
  };
};

// const obj1 = {
//   5: 'blah',
//   name: 'ho',
//   zolo: '4thech',
// };

// console.log(Object.entries(obj1));
// console.log(Object.entries(obj1[1][0]));
// console.log(Object.entries(obj2)[0][0]);

// const obj2 = {};
// console.log(Object.entries(obj2));

// solution();

// console.log(obj1.gsFilter((k, v) => v.length > 3));
// // output: {5:'blah blah', zolo:'4thech'}
// console.log(obj2.gsFilter((k, v) => v.length > 3));
// // {}
// console.log(obj1.gsFilter((k, v) => v.length > 7));
// // output: {5:'blah blah'}

module.exports = {
  solution,
};
