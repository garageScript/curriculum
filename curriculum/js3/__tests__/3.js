const expect = require('chai').expect;
const solution = require('../3').solution;

describe('takes in an array of numbers, returns an array of duplicates', () => {
  it('should return array of all duplicates [2,4]', () => {
    const result = solution([1, 2, 2, 3, 4, 4, 4]);
    expect(result).to.have.all.members([2, 4]);
  });
  it('should return array of all duplicates [2,5,-1]', () => {
    const result = solution([-1, -1, -1, 2, 2, 5, 5]);
    expect(result).to.have.all.members([2, 5, -1]);
  });
  it('should return array of all duplicates [0]', () => {
    const result = solution([0, 0, 1, 2, 4, 0]);
    expect(result).to.have.all.members([0]);
  });
  it('should return array of all duplicates [0,10,20,100]', () => {
    const result = solution([0, 10, 10, 10, 20, 20, 20, 20, 0, 100, 100]);
    expect(result).to.have.all.members([0, 10, 20, 100]);
  });
});

