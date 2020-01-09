/* global describe it expect */
const solution = require('../8').solution

describe('It should call each function value of the object millieseconds after one another', () => {
  it('It should not call the function if the object is empty', (done) => {
    let sum = 0
    const a = {}
    solution(a, 50)
    expect(sum).toEqual(0)
    setTimeout(() => {
      expect(sum).toEqual(0)
      done()
    }, 55)
  })
  it('Sum will be "0", then "0one" and finally "0onetwo" after 15 seconds', (done) => {
    let sum = 0
    const a = {
      'one': (d) => sum += d,
      'two': (c) => sum += c
    }
    solution(a, 100)

    setTimeout(() => {
      expect(sum).toEqual('0one')
    }, 50)

    setTimeout(() => {
      expect(sum).toEqual('0onetwo')
      done()
    }, 150)
  })
})
