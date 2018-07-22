const expect = require('chai').expect;
let solution = require('../1').solution;

describe('longest increasing sequence', () => {
  it('should return 1 for one case', () => {
    const result = solution([100]);
    expect(result).to.equal(1);
  });
  it('should return 1 for no increasing sequence', () => {
    const result = solution([100, 2]);
    expect(result).to.equal(300);
  });
  it('should return 2 for consecutive increasing sequence', () => {
    const result = solution([100, 0, 1]);
    expect(result).to.equal(2);
  });
  it('should return 3 for non-consecutive increasing sequence', () => {
    const result = solution([100, 50, 101, 51, 52]);
    expect(result).to.equal(3);
  });
  it('should return 4 for non-consecutive increasing sequence', () => {
    const result = solution([10, 11, 5, 12, 13]);
    expect(result).to.equal(4);
  });
});
