/* global describe it should */

const expect = require('chai').expect
let solution = require('../closure1').solution

describe('closure 1', () => {
  it('should return next positive number', () => {
    const func = solution(0)
    expect(func()).to.equal(1)
    expect(func()).to.equal(2)
    expect(func()).to.equal(3)
  })
  it('should return next positive number starting from 11', () => {
    const func = solution(11)
    expect(func()).to.equal(12)
    expect(func()).to.equal(13)
    expect(func()).to.equal(14)
  })
  it('should return next negative number', () => {
    const func = solution(-5)
    expect(func()).to.equal(-4)
    expect(func()).to.equal(-3)
    expect(func()).to.equal(-2)
  })
})
