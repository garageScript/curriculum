/* global describe it expect */

const solution = require('../4').solution

describe('call with increasing numbers', () => {
  it('should call function only once', () => {
    let calls = []
    solution((e) => {
      calls.push(e)
      return false
    })
    expect(calls).toEqual([0])
  })
  it('should call function 6 times', () => {
    let calls = []
    solution((e) => {
      calls.push(e)
      return e < 5
    })
    expect(calls).toEqual([0, 1, 2, 3, 4, 5])
  })
  it('should call function 4 times (handle non-Boolean return values)', () => {
    let calls = []
    solution((e) => {
      calls.push(e)
      return e < 3 ? 0 : false
    })
    expect(calls).toEqual([0, 1, 2, 3])
  })
})
