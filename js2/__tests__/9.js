/* global describe it expect */

const solution = require('../9').solution
solution()

describe('test cReduce', () => {
  it('should run callback with 4 parameters', () => {
    let callbacks;
    [9].cReduce((acc, e, i, arr) => {
      callbacks = [acc, e, i, arr]
    }, 8)
    expect(callbacks).toEqual([8, 9, 0, [9]])
  })
  it('should reduce [1,2,3] to 6', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    expect([1, 2, 3].cReduce(cb, 0)).toEqual(6)
  })
  it('should reduce [1,2,3] to 5', () => {
    const cb = (ac, cv, ci) => {
      return ac + cv + (cv % 2 === 0)
    }
    expect([1, 2, 3].cReduce(cb, -3)).toEqual(4)
  })
  it('should reduce ["one","two","three"] to { one: "1 of 3", two: "2 of 2", three: "3 of 3" }', () => {
    const cb = (ac, cv, ci, ar) => {
      ac[cv] = `${ci + 1} of ${ar.length}`
      return ac
    }
    const a = ['one', 'two', 'three']
    const b = { one: '1 of 3', two: '2 of 3', three: '3 of 3' }
    expect(a.cReduce(cb, {})).toEqual(b)
  })
  it('should reduce ["bob", "obo", "boo"] to { bob: true, obo: false, boo: true }', () => {
    const cb = (ac, cv, ci) => {
      ac[cv] = (ci % 2 === 0)
      return ac
    }
    const a = ['bob', 'obo', 'boo']
    const b = { bob: true, obo: false, boo: true }
    expect(a.cReduce(cb, {})).toEqual(b)
  })

  it('should reduce the elements of [1,2,3,4] to 10', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    const test = [1, 2, 3, 4]
    expect(test.cReduce(cb)).toEqual(10)

  })

  it('should reduce ["1", "2", "3"] to "123"', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    const a = ['1', '2', '3']
    const b = '123'
    expect(a.cReduce(cb)).toEqual(b)
  })
})
