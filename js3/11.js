/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries

const solution = () => {
  Object.prototype.gsForEach = function (fun, i = 0, entries = Object.entries(this)) {
    if (i === entries.length) return;
    fun(entries[i][0], entries[i][1]);
    return this.gsForEach(fun, i + 1, entries);
  }
};

// obj1 = {};
// obj2 = {
//     fozzy: "waka waka",
//       chef: "erf dee flip dee bork, bork, bork",
//       animal: "Ah-nee-maaal!"
// }

// should mutate an empty object using each key-value pair in "this" object

module.exports = {
  solution,
};
