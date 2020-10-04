/* global describe it */
const solution = require('../8').solution;

describe('Write a probram that determines if a number is a happy number', () => {
  it('given "7" as input, should return "1" ', () =>  {
    const result = solution('7')
    expect(result).toBe('1')
  })

  it('given "22" as input, should return "0" ', () =>  {
    const result = solution('22')
    expect(result).toBe('0')
  })

  it('given "1" as input, should return "1" ', () =>  {
    const result = solution('1')
    expect(result).toBe('1')
  })

  it('given "8" as input, should return "0" ', () =>  {
    const result = solution('8')
    expect(result).toBe('0')
  })

  it('given "19" as input, should return "1" ', () =>  {
    const result = solution('19')
    expect(result).toBe('1')
  })

  it('given "79" as input, should return "1" ', () =>  {
    const result = solution('79')
    expect(result).toBe('1')
  })

  it('given "239" as input, should return "1" ', () =>  {
    const result = solution('239')
    expect(result).toBe('1')
  })
})
