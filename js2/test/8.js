/* global describe it */

const expect = require('chai').expect
const solution = require('../8').solution
solution()

describe('js2/8.js test gsMap', () => {
  const cb = (e, i) => {
    return e + i + 1
  }
  it('should run callback with 3 parameters', () => {
    let callbacks;
    [9].cMap((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).to.deep.equal([9, 0, [9]])
  })
  it('should not change original array', () => {
    const a = [1, 2, 3]
    a.cMap(cb)
    expect(a).to.deep.equal([1, 2, 3])
  })
  it('should return [] for []', () => {
    expect([].cMap()).to.deep.equal([])
  })
  it('should return new array of 3 elements increased by the value of its index', () => {
    const a = [1, 2, 3]
    const c = a.cMap(cb)
    expect(c).to.deep.equal([2, 4, 6])
  })
  it('should return new array of 3 elements increased by the value of its index twice', () => {
    const a = [1, 2, 3]
    const c = a.cMap(cb).cMap(cb)
    expect(c).to.deep.equal([3, 6, 9])
  })
})
