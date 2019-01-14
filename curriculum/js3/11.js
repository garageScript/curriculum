/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries


const solution = () => {
  Object.prototype.forEach = function(fun, keys = Object.keys(this), values = Object.values(this), entries = Object.entries(this), i = 0) {
    if (i === entries.length) return;
    fun(entries[i][1], entries[i][0], keys[i][1], keys[i][0], values[i][1], values[i][0]);
    return this.forEach(fun, keys, values, entries, i + 1);
  }
}

solution();

obj1 = {};
obj2 = {
    fozzy: "waka waka",
      chef: "erf dee flip dee bork, bork, bork",
      animal: "Ah-nee-maaal!"
}




// should mutate an empty object using each key-value pair in "this" object

console.log(obj1.forEach((x, i) => console.log(x, i))); // 
console.log("----");
console.log(obj2.forEach((x, i) => console.log(x, i))); // fozzy: 2, chef: 7, animal: 1
console.log("----");


// describe('test Object.prototype.gsForEach', () => {
//   it('should mutate an empty object using each key-value pair in "this" object', () => {
//     const o1 = {};
//     const cb = (k, v) => {
//       o1[k] = v.split(' ').length;
//     };
//     const o2 = {
//       fozzy: "waka waka",
//       chef: "erf dee flip dee bork, bork, bork",
//       animal: "Ah-nee-maaal!"
//     };
//     o2.gsForEach(cb);
//     expect(o1).to.deep.equal({
//       fozzy: 2,
//       chef: 7,
//       animal: 1
//     });
//   });
//   it('should increment a value', () => {
//     let c = 0;
//     const cb = () => {
//       c += 1;
//     };
//     const o = {
//       up: 1,
//       down: -1,
//       turn: 1,
//       around: -1
//     }
//     o.gsForEach(cb);
//     expect(c).to.equal(4);
//   });
// });