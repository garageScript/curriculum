const expect = require('chai').expect;
const solution = require('../10').solution;
solution();

describe('test gsForEach', () => {
  it('should mutate an empty object using curr. value, index, and a property of "this" array', () => {
    const o = {};
    const cb = (cv, i, ar) => {
      o[cv] = i + ar.length;
    };
    [1, 2, 3].gsForEach(cb);
    expect(o).to.deep.equal({ 1: 3, 2: 4, 3: 5 });
  });
  it('should increment a value', () => {
    let o = 0;
    const cb = () => {
      o += 1;
    };
    [1, 2, 3].gsForEach(cb);
    expect(o).to.equal(3);
  });
});
