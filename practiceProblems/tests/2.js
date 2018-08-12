const expect = require('chai').expect;
const solution = require('../2').solution;

describe('land elements', () => {
  it('should handle given base case of [[]]', () => {
    const result = solution([[]]);
    expect(result).to.equal(0);
  });
  it('should return 5 for 3x3 sparse matrix', () => {
    const result = solution([[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
    expect(result).to.equal(5);
  });
  it('should return 2 for 4x4 matrix', () => {
    const result = solution([[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]]);
    expect(result).to.equal(2);
  });
  it('should return 1 for full island', () => {
    const result = solution([[1, 0, 1], [1, 1, 1], [0, 1, 0]]);
    expect(result).to.equal(1);
  });
  it('should return 3 for 3x3 matrix', () => {
    const result = solution([[1, 0, 1], [0, 1, 0], [1, 1, 0]]);
    expect(result).to.equal(3);
  });
});
