/* global describe it */
const expect = require('chai').expect
const solution = require('../10').solution

describe('Return an array of Fibonacci numbers, given starting elements [0, 1]', () => {
  it('Given an integer n, return an array of the first n numbers of fibonacci sequence', () => {
    const result = solution(4)
    expect(result).to.deep.equal([0, 1, 1, 2])
  })

  it('Given 5, should return an array of the first 5 numbers of fibonacci sequence', () => {
    const result = solution(5)
    expect(result).to.deep.equal([0, 1, 1, 2, 3])
  })

  it('Given 8, should return an array of the first 8 numbers of fibonacci sequence', () => {
    const result = solution(8)
    expect(result).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13])
  })
})
