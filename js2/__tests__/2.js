/* global describe it expect */

const solution = require('../2').solution

describe('Generate array', () => {
  it('should generate 1d array with 0 values', () => {
    const result = solution((e) => {
      return true
    })
    expect(result).to.deepEqual([])
  })
  it('should generate 1d array with 1 values', () => {
    const result = solution((e) => {
      return e > 0
    })
    expect(result).to.deepEqual([0])
  })
  it('should generate 1d array with 5 values', () => {
    const result = solution((e) => {
      return (e % 7 === 0) && e !== 0
    })
    expect(result).to.deepEqual([0, 1, 2, 3, 4, 5, 6])
  })
  it('should generate 1d array with 10 values', () => {
    const result = solution((e) => {
      return e > 9
    })
    expect(result).to.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
