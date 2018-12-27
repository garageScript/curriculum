const expect = require('chai').expect;
let solution = require('../1').solution;

describe('given object of values, return largest value', () => {
  it('should return the largest value 5', () => {
    const result = solution({a:1,b:2,c:3,d:4,e:5});
    expect(result).to.equal(5);
  });
  it('should return the largest value 10', () => {
    const result = solution({a:10,b:5,c:3,d:6});
    expect(result).to.equal(10);
  });
  it('should return the largest value -10', () => {
    const result = solution({a:-10,b:-20,c:-30,d:-40});
    expect(result).to.equal(-10);
  });
  it('should return the largest value 0', () => {
    const result = solution({a:0,b:0,c:0});
    expect(result).to.equal(0);
  });
});
