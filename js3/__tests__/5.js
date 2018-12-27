const expect = require('chai').expect;
const solution = require('../5').solution;

describe('takes in object, function and calls function until there is no more key/value', () => {
  it('should return base case', () => {
    let count = '';
    const result = solution({},(key, value)=>{count+=`Key/Value Pair = ${key}:${value}\n`;});
    expect(count).to.equal('')
  });
  it('should return Key/Value Pair = 1:1,2:2,3:3 for input {1:1,2:2,3:3},funct', () => {
    let count = '';
    const result = solution({1:1,2:2,3:3},(key, value)=>{count+=`Key/Value Pair = ${key}:${value}\n`;});
    expect(count).to.equal(`Key/Value Pair = 1:1\nKey/Value Pair = 2:2\nKey/Value Pair = 3:3\n`)
  });
});

