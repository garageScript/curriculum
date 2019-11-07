/* global describe it expect */

const solution = require('../10').solution

describe('every letter', function () {
  it('function should be called for every letter', function () {
    let callTrack = ''
    const fun = solution('hello', (e) => {
      callTrack += e
    })
    fun()
    fun()
    fun()
    fun()
    fun()

    fun()
    fun()
    fun()
    fun()

    expect(callTrack).toEqual('hellohell')
  })
})
