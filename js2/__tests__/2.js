/* global describe it */

const expect = require('chai').expect
let solution = require('../2').solution

describe('Generate array', () => {
  it('should generate 1d array with 0 values', () => {
    const result = solution((e) => {
      return false
    })
    expect(result).to.deep.equal([])
  })
  it('should generate 1d array with 1 values', () => {
    const result = solution((e) => {
      return e < 1
    })
    expect(result).to.deep.equal([0])
  })
  it('should generate 1d array with 5 values', () => {
    const result = solution((e) => {
      return e < 5
    })
    expect(result).to.deep.equal([0, 1, 2, 3, 4])
  })
  it('should generate 1d array with 10 values', () => {
    const result = solution((e) => {
      return e < 10
    })
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
