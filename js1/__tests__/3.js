/* global describe it expect */

const solution = require('../3').solution

describe('print string x number of times', () => {
  it('should repeat empty string 2 times', () => {
    const result = solution(2, '')
    expect(result).toEqual('')
  })
  it('should repeat string 3 times', () => {
    const result = solution(3, 'joe')
    expect(result).toEqual('joejoejoe')
  })
  it('should repeat string 4 times', () => {
    const result = solution(4, 'julie')
    expect(result).toEqual('juliejuliejuliejulie')
  })
  it('should repeat string 5 times', () => {
    const result = solution(5, 'olaf')
    expect(result).toEqual('olafolafolafolafolaf')
  })
  it('should return empty string when 0 times', () => {
  const result = solution(0, 'hello')
  expect(result).toEqual('')
})
})
