/* global describe it */
const expect = require('chai').expect
const solution = require('../8').solution

describe('check if character exist in string', () => {
  it('should find one match', () => {
    const result = solution('abc', 'a')
    expect(result).to.equal(1)
  })
  it('should find in the front, middle, end of a string', () => {
    const result = solution('bccbccb', 'b')
    expect(result).to.equal(3)
  })
  it('should not find match for long string', () => {
    const result = solution('abc', 'd')
    expect(result).to.equal(0)
  })
  it('should not find match for empty string', () => {
    const result = solution('', 'd')
    expect(result).to.equal(0)
  })
  it('should not find match for "", ""', () => {
    const result = solution('', '')
    expect(result).to.equal(0)
  })
})
