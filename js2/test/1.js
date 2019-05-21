/* global describe it */

const expect = require('chai').expect
let solution = require('../1').solution

describe('js2/1.js Generate 1D array', () => {
  it('should generate 1d array with 0 values', () => {
    const result = solution(0)
    expect(result).to.deep.equal([])
  })
  it('should generate 1d array with 1 values', () => {
    const result = solution(1)
    expect(result).to.deep.equal([0])
  })
  it('should generate 1d array with 5 values', () => {
    const result = solution(5)
    expect(result).to.deep.equal([0, 1, 2, 3, 4])
  })
  it('should generate 1d array with 10 values', () => {
    const result = solution(10)
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
