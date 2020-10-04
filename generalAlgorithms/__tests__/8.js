const solution = require('../8').solution

describe('should find longest consecutive characters', () => {
  it('should handle first character case', () => {
    const a = solution('AAABBBBAABBBCCCCCCCDDAAAAAAAAAADEFGCC')
    expect(a).toEqual('A 10')
  })
  it('should handle BBBA character case', () => {
    const a = solution('BBBA')
    expect(a).toEqual('B 3')
  })
  it('should handle KUNDMC character case', () => {
    const a = solution('KUNDMC')
    expect(a).toEqual('C 1')
  })
  it('should handle DDADDDADDDDA character case', () => {
    const a = solution('DDADDDADDDDA')
    expect(a).toEqual('D 4')
  })
  it('should handle ABBA character case', () => {
    const a = solution('ABBA')
    expect(a).toEqual('B 2')
  })
  it('should handle ZZTOP character case', () => {
    const a = solution('ZZTOP')
    expect(a).toEqual('Z 2')
  })
  it('should handle MISSISSIPPI character case', () => {
    const a = solution('MISSISSIPPI')
    expect(a).toEqual('P 2')
  })
})
