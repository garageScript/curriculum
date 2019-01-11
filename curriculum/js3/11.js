/**
 * Create Object.prototype.forEach
 *   ForEach takes in a function, and that function
 *       is called with key, value parameters for
 *       every entry in the object
 */

// You can use helper functions like:
//     Object.keys, Object.values, or Object.entries
const solution = () => {
  Object.prototype.gsForEach = function () {
    // To get the actual object, use this
  };
};

describe('test Object.prototype.gsForEach', () => {
  it('should mutate an empty object using each key-value pair in "this" object', () => {
    const o1 = {};
    const cb = (k, v) => {
      o1[k] = v.split(' ').length;
    };
    const o2 = {
      fozzy: "waka waka",
      chef: "erf dee flip dee bork, bork, bork",
      animal: "Ah-nee-maaal!"
    };
    o2.gsForEach(cb);
    expect(o1).to.deep.equal({
      fozzy: 2,
      chef: 7,
      animal: 1
    });
  });
  it('should increment a value', () => {
    let c = 0;
    const cb = () => {
      c += 1;
    };
    const o = {
      up: 1,
      down: -1,
      turn: 1,
      around: -1
    }
    o.gsForEach(cb);
    expect(c).to.equal(4);
  });
});