/* globals describe it */

const expect = require('chai').expect
const solution = require('../11').solution
solution()

describe('test dangerousMap', () => {
  const cb = (e, i) => {
    return e < 8
  }
  it('should run callbacks like a map function, with 3 parameters', () => {
    let callbacks;
    [9].dangerousMap((e, i, arr) => {
      callbacks = [e, i]
    })
    expect(callbacks).to.deep.equal([9, 0 ])
  })
  it('should not change original array if dangerousMap is called 1 time', () => {
    const a = [1, 2, 3]
    a.dangerousMap(cb)
    expect(JSON.stringify(a)).to.equal(JSON.stringify([1, 2, 3]))
  })
  it('should not change original array if dangerousMap is called 3 times', () => {
    const a = [1, 2, 3]
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    expect(JSON.stringify(a)).to.equal(JSON.stringify([1, 2, 3]))
  })
  it('should change original array if dangerousMap is called 4 times', () => {
    const a = [1, 2, 3]
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    expect(JSON.stringify(a)).to.equal(JSON.stringify([]))
  })
  it('should not affect another array if dangerousMap is called 4 times', () => {
    const a = [1, 2, 3]
    const b = [5, 4, 2]
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    a.dangerousMap(cb)
    expect(JSON.stringify(b)).to.equal(JSON.stringify([5, 4, 2]))
  })
})
