/* global describe it */
const expect = require('chai').expect
const solution = require('../7').solution

describe('js1/7.js check if character exist in string', () => {
  it('should return true for "abc", "a"', () => {
    const result = solution('abc', 'a')
    expect(result).to.equal(true)
  })
  it('should return false for "abc", "d"', () => {
    const result = solution('abc', 'd')
    expect(result).to.equal(false)
  })
  it('should return true for "abc", "b"', () => {
    const result = solution('abc', 'b')
    expect(result).to.equal(true)
  })
  it('should return false for "", "a"', () => {
    const result = solution('', 'a')
    expect(result).to.equal(false)
  })
})
