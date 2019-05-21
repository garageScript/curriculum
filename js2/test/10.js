/* globals describe it */

const expect = require('chai').expect
const solution = require('../10').solution
solution()

describe('js2/10.js test cFilter', () => {
  const cb = (e, i) => {
    return e < 8
  }
  it('should run callback with 3 parameters', () => {
    let callbacks;
    [9].cFilter((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).to.deep.equal([9, 0, [9]])
  })
  it('should not change original array', () => {
    const a = [1, 2, 3]
    a.cFilter(cb)
    expect(a).to.deep.equal([1, 2, 3])
  })
  it('should return [] for []', () => {
    expect([].cFilter()).to.deep.equal([])
  })
  it('should return every element if filter is always true', () => {
    const a = [1, 2, 3]
    const c = a.cFilter(cb)
    expect(c).to.deep.equal([1, 2, 3])
  })
  it('should return no elements if filter is always false', () => {
    const a = [9, 9, 9]
    const c = a.cFilter(cb).cFilter(cb)
    expect(c).to.deep.equal([])
  })
  it('should return some elements based on filter', () => {
    const a = [9, 2, 3, 9, 9, 3]
    const c = a.cFilter(cb).cFilter(cb)
    expect(c).to.deep.equal([2, 3, 3])
  })
})
