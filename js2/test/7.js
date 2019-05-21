/* global describe it */

const expect = require('chai').expect
const solution = require('../7').solution
solution()

describe('js2/7.js cForEach', () => {
  it('should run callback with 3 parameters', () => {
    let callbacks;
    [9].cForEach((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).to.deep.equal([9, 0, [9]])
  })
  it('should not run callback for empty array', () => {
    let counter = 0;
    [].cForEach(() => {
      counter += 1
    })
    expect(counter).to.equal(0)
  })
  it('should run callback correct number of times, with the correct element input', () => {
    let elements = [];
    [9, 7, 8, 5, 6].cForEach((e) => {
      elements.push(e)
    })
    expect(elements).to.deep.equal([9, 7, 8, 5, 6])
  })
  it('should run callback with correct number of parameters', () => {
    let indices = [];
    [9, 7, 8, 5, 6].cForEach((_, i) => {
      indices.push(i)
    })
    expect(indices).to.deep.equal([0, 1, 2, 3, 4])
  })
})
