/* globals describe it */

const expect = require('chai').expect
const solution = require('../11').solution
solution()

describe('js2/11.js test cFind', () => {
  it('should run callbacks like a map function, with 3 parameters', () => {
    let callbacks;
    [9].cFind((e, i, arr) => {
      callbacks = [e, i]
    })
    expect(callbacks).to.deep.equal([9, 0])
  })
  it('should find the first number', () => {
    const a = [9, 2, 3]
    const result = a.cFind((e) => e === 9)
    expect(result).to.equal(9)
  })
  it('should find middle string', () => {
    const a = ['abc', 'dd', 'abc']
    const result = a.cFind((e) => e === 'dd')
    expect(result).to.equal('dd')
  })
  it('should find last string', () => {
    const a = ['abc', 'dd', 'abc', 'defg']
    const result = a.cFind((e) => e === 'defg')
    expect(result).to.equal('defg')
  })
  it('should return undefined', () => {
    const a = ['abc', 'dd', 'abc', 'defg']
    const result = a.cFind((e) => e === 'defgh')
    expect(result + '').to.equal('undefined')
  })
})
