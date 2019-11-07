/* global describe it expect */

const solution = require('../9').solution

describe('combined function', () => {
  it('should return empty string if fun return empty', () => {
    const fun = (e) => ''
    const result = solution('hello', fun)
    expect(result).toEqual('')
  })
  it('should return empty string if input is ""', () => {
    const fun = (e) => 'hi'
    const result = solution('', fun)
    expect(result).toEqual('')
  })
  it('should convert every letter to a', () => {
    const fun = (e) => 'a'
    const result = solution('function', fun)
    expect(result).toEqual('aaaaaaaa')
  })
  it('should add 1 to every letter', () => {
    const fun = (e) => e + '1'
    const result = solution('apl', fun)
    expect(result).toEqual('a1p1l1')
  })
})
