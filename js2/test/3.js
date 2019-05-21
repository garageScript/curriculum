/* global describe it */

const expect = require('chai').expect
let solution = require('../3').solution

describe('js2/3.js Generate 2D array', () => {
  it('should generate 0x0 array', () => {
    const result = solution(0, 0)
    expect(result).to.deep.equal([])
  })
  it('should generate 3x3 array', () => {
    const result = solution(3, 3)
    expect(result).to.deep.equal([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
  })
  it('should generate 2x4 array', () => {
    const result = solution(2, 4)
    expect(result).to.deep.equal([[0, 0, 0, 0], [0, 0, 0, 0]])
  })
  it('should generate a 1x5 array', () => {
    const result = solution(1, 5)
    expect(result).to.deep.equal([[0, 0, 0, 0, 0]])
  })
})
