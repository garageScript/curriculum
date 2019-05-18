/* global describe it */
const expect = require('chai').expect
let solution = require('../4').solution

describe('js1/4.js call with increasing numbers', () => {
  it('should call function only once', () => {
    let calls = []
    solution((e) => {
      calls.push(e)
      return false
    })
    expect(calls).to.deep.equal([0])
  })
  it('should call function 6 times', () => {
    let calls = []
    solution((e) => {
      calls.push(e)
      return e < 5
    })
    expect(calls).to.deep.equal([0, 1, 2, 3, 4, 5])
  })
})
