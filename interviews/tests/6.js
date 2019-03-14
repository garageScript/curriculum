const expect = require('chai').expect;
const Solution = require('../6').solution;

describe('search for 2 characters', () => {
  const a = new Solution(['dont', 'doesnt', 'dog']);
  it('should handle first character case', () => {
    const result = a.autoComplete('d');
    expect(result).to.deep.equal(['dog', 'dont', 'doesnt']);
  });
  it('should handle two characters case', () => {
    const result = a.autoComplete('do');
    expect(result).to.deep.equal(['dog', 'dont', 'doesnt']);
  });
  it('should handle three characters case', () => {
    const result = a.autoComplete('doe');
    expect(result).to.deep.equal(['doesnt']);
  });
});

describe('search for 2 characters', () => {
  const a = new Solution(["adona", "does", "dog", "dont", "doesnt", "dine"]);
  it('should handle first character case', () => {
    const result = a.autoComplete('d');
    expect(result).to.deep.equal(['dog', 'does', 'dont', 'dine', 'doesnt']);
  });
  it('should handle two characters case', () => {
    const result = a.autoComplete('do');
    expect(result).to.deep.equal(['dog', 'does', 'dont', 'doesnt']);
  });
  it('should handle three characters case', () => {
    const result = a.autoComplete('doe');
    expect(result).to.deep.equal(['does', 'doesnt']);
  });
});
