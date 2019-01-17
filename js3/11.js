/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries


// const solution = () => {
//   Object.prototype.forEach = function(fun, keys = Object.keys(this), values = Object.values(this), entries = Object.entries(this), i = 0) {
//     if (i === entries.length) return;
//     fun(entries[i][1], entries[i][0], keys[i][1], keys[i][0], values[i][1], values[i][0]);
//     return this.forEach(fun, keys, values, entries, i + 1);
//   }
// }
const solution = () => {
  Object.prototype.forEach = function (fun, i = 0, entries = Object.entries(this)) {
    if (i === entries.length) return;
    fun(entries[i][1], entries[i][0]);
    return this.forEach(fun, i + 1);
  }
};


obj1 = {};
obj2 = {
    fozzy: "waka waka",
      chef: "erf dee flip dee bork, bork, bork",
      animal: "Ah-nee-maaal!"
}

// should mutate an empty object using each key-value pair in "this" object

module.exports = {
  solution,
};