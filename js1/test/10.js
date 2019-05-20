/* global describe it */
const expect = require('chai').expect
let solution = require('../10').solution

describe('js1/10.js every letter', function () {
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

    expect(callTrack).to.deep.equal('hellohell')
  })
})
