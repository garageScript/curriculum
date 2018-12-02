/**
 * Replicate Array.prototype.map function and call it gsMap
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsMap = function (item) {
    // To get the actual array, use this
    return item + 5;
  };
};

module.exports = {
  solution,
};
console.log(solution([1, 2, 3])); // [1, 2, 3];
console.log(solution([])); // []
console.log(solution([1, 2, 3])); // 6, 7, 8

describe('test gsMap', () => {
  const cb = (e) => {
    return e + 5;
  };
  it('should return new array', () => {
    const a = [1, 2, 3];
    a.gsMap(cb);
    expect(a).to.deep.equal([1, 2, 3]);
  });
  it('should return [] for []', () => {
    expect([].gsMap()).to.deep.equal([]);
  });
  it('should return new array', () => {
    const a = [1, 2, 3];
    const c = a.gsMap(cb);
    expect(c).to.deep.equal([6, 7, 8]);
  });
});
