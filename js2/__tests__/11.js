const expect = require('chai').expect
const solution = require('../11').solution

describe('redistribute', () => {
  it('should handle base case of []', () => {
    const result = solution([])
    expect(result).to.deep.equal([])
  })
  it('should evenly distribute', () => {
    const result = solution([0, 0, 3])
    expect(result).to.deep.equal([1, 1, 1])
  })
  it('should accumulate at 0', () => {
    const result = solution([0, 1, 3])
    expect(result).to.deep.equal([2, 1, 1])
  })
  it('should accumulate multiple values', () => {
    const result = solution([0, 1, 3, 5])
    expect(result).to.deep.equal([6, 1, 1, 1])
  })
  it('should accumulate at 0 for only 2 values', () => {
    const result = solution([1, 5])
    expect(result).to.deep.equal([5, 1])
  })
  it('should pass values down for 2 values', () => {
    const result = solution([5, 2])
    expect(result).to.deep.equal([6, 1])
  })
  it('should not do anything for fully distributed case', () => {
    const result = solution([5, 1])
    expect(result).to.deep.equal([5, 1])
  })
})
