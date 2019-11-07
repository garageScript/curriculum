/* global describe it expect */

const solution = require('../7').solution

describe('check if character exist in string', () => {
  it('should return true for "abc", "a"', () => {
    const result = solution('abc', 'a')
    expect(result).toEqual(true)
  })
  it('should return false for "abc", "d"', () => {
    const result = solution('abc', 'd')
    expect(result).toEqual(false)
  })
  it('should return true for "abc", "b"', () => {
    const result = solution('abc', 'b')
    expect(result).toEqual(true)
  })
  it('should return false for "", "a"', () => {
    const result = solution('', 'a')
    expect(result).toEqual(false)
  })
})
