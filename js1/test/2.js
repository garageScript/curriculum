/* global describe it should */

const expect = require('chai').expect
let solution = require('../2').solution

const z = () => {
  return 5
}

describe('js1/2.js closure 2', () => {
  it('should call function 0 times', () => {
    const func = solution(0, z)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
  })
  it('should call function 1 time, and null afterwards', () => {
    const func = solution(1, z)
    expect(func()).to.equal(5)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
  })
  it('should call function 3 times, and null after wards', () => {
    const func = solution(3, z)
    expect(func()).to.equal(5)
    expect(func()).to.equal(5)
    expect(func()).to.equal(5)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
    expect(func()).to.equal(null)
  })
})
