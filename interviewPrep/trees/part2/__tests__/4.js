/* global describe, it */

const expect = require('chai').expect
const solution = require('../4').solution

describe('Max stock value with transaction fee', () => {
  it('should only buy at the end', () => {
    const arr = [11, 12, 13, 14, 1, 12, 30]
    const result = solution(arr)
    expect(result).to.equal(9)
  })
  it('should not buy anything', () => {
    const arr = [10, 9, 8, 7 ,6]
    const result = solution(arr)
    expect(result).to.equal(0)
  })
  it('should buy at the start and sell at the end', () => {
    const arr = [10, 20, 30, 40, 50]
    const result = solution(arr)
    expect(result).to.equal(20)
  })
  it('should buy at the start and sell at the end', () => {
    const arr = [10, 30, 50, 55]
    const result = solution(arr)
    expect(result).to.equal(25)
  })
})

