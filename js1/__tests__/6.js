/* global describe it expect */

const solution = require('../6').solution

describe('check if number x is prime', () => {
  it('2 should be prime', () => {
    const result = solution(2)
    expect(result).toEqual(true)
  })
  it('3 should be prime', () => {
    const result = solution(3)
    expect(result).toEqual(true)
  })
  it('1 should not be prime', () => {
    const result = solution(1)
    expect(result).toEqual(false)
  })
  it('7 should be prime', () => {
    const result = solution(7)
    expect(result).toEqual(true)
  })
  it('9 should not be prime', () => {
    const result = solution(9)
    expect(result).toEqual(false)
  })
  it('12 should not be prime', () => {
    const result = solution(12)
    expect(result).toEqual(false)
  })
  it('1223 should be prime', () => {
    const result = solution(1223)
    expect(result).toEqual(true)
  })
  it('1226 should not be prime', () => {
    const result = solution(1226)
    expect(result).toEqual(false)
  })
})
