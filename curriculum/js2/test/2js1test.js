  const expect = require('chai').expect;
let solution = require('../2js1.js').solution;

describe('largest value', ()=>{
  it('should return the largest value from an array', ()=>{
    const result = solution([5,6,7,1]);
    expect(result).to.equal(7);
  });
  it('should return the largest value from an array of negative numbers', ()=>{
    const result = solution([-2,-1,-3]);
    expect(result).to.equal(-1);
  });
  it('should return the largest value from an array of positive and negative numbers', ()=>{
    const result = (solution([-1,-2,1,2]));
  });
});
