/* global describe, it, expect */

const solution = require('../10').solution

describe('2 Functions', function () {
  it('should return 12', function () {
    const result = solution(() => 6, () => 6)
    expect(result).toEqual(12)
  })
  it('should add 2 different numbers correctly', () => {
    const result = solution(() => 1, () => 2)
    expect(result).toEqual(3)
  })
  it('should add 2 negative numbers correctly', () => {
    const result = solution(() => -2, () => -2)
    expect(result).toEqual(-4)
  })
  it('should add 2 numbers of different signs correctly', () => {
    const result = solution(() => -3, () => 3)
    expect(result).toEqual(0)
  })
})
