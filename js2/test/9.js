/* globals describe it */

const expect = require('chai').expect
const solution = require('../9').solution
solution()

describe('js2/9.js test cReduce', () => {
  it('should run callback with 4 parameters', () => {
    let callbacks;
    [9].cReduce((acc, e, i, arr) => {
      callbacks = [acc, e, i, arr]
    }, 8)
    expect(callbacks).to.deep.equal([8, 9, 0, [9]])
  })
  it('should reduce [1,2,3] to 6', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    expect([1, 2, 3].cReduce(cb, 0)).to.equal(6)
  })
  it('should reduce [1,2,3] to 5', () => {
    const cb = (ac, cv, ci) => {
      return ac + cv + (cv % 2 === 0)
    }
    expect([1, 2, 3].cReduce(cb, -3)).to.equal(4)
  })
  it('should reduce ["one","two","three"] to { one: "1 of 3", two: "2 of 2", three: "3 of 3" }', () => {
    const cb = (ac, cv, ci, ar) => {
      ac[cv] = `${ci + 1} of ${ar.length}`
      return ac
    }
    const a = ['one', 'two', 'three']
    const b = { one: '1 of 3', two: '2 of 3', three: '3 of 3' }
    expect(a.cReduce(cb, {})).to.deep.equal(b)
  })
  it('should reduce ["bob", "obo", "boo"] to { bob: true, obo: false, boo: true }', () => {
    const cb = (ac, cv, ci) => {
      ac[cv] = (ci % 2 === 0)
      return ac
    }
    const a = ['bob', 'obo', 'boo']
    const b = { bob: true, obo: false, boo: true }
    expect(a.cReduce(cb, {})).to.deep.equal(b)
  })
})
