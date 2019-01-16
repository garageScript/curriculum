const expect = require('chai').expect;
const solution = require('../8').solution;
solution();

describe('test gsMap', () => {
  const cb = (e) => {
    return e + 5;
  };
  it('should return new array', () => {
    const a = [1,2,3];
    a.gsMap(cb);
    expect(a).to.deep.equal([1,2,3]);
  });
  it('should return [] for []', () => {
    expect([].gsMap()).to.deep.equal([]);
  });
  it('should return new array', () => {
    const a = [1,2,3];
    const c = a.gsMap(cb);
    expect(c).to.deep.equal([6,7,8]);
  });
});
