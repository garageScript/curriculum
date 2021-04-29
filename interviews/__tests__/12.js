/* global describe it */

const solution = require('../12').solution;

describe('function should validate email address with regex', () => {
  it('domain and extension are valid if it is "c0d3.com"', () => {
    const result = solution(['julia@c0d3.com', 'julia_@c0d3.com', 'julia_0@c0d3.com', 'jeremy@leetcode.com', 'jeremy_8@hackerrank.com'])
    expect(result).toEqual([true, true, true, false, false])
  })

  it('username is valid if it starts between 1 and 6 lowercase English letters denoted by the character class [a-z]', () => {
    const result = solution(['johndoe@c0d3.com', 'SONG_1@c0d3.com', 'jeeef_0@c0d3.com', 'sanjosesharks@c0d3.com', 'Loki@c0d3.com'])
    expect(result).toEqual([false, false, true, false, false])
  })

  it('username is valid if it is followed by an optional underscore, i.e. zero or one occurance of the _ character', () => {
    const result = solution(['john_@c0d3.com', 'john__@c0d3.com', 'julia@c0d3.com', 'foo_@c0d3.com', 'foobar____@c0d3.com'])
    expect(result).toEqual([true, false, true, true, false])
  })

  it('username is valid if the optional underscore is followed by 0 to 4 optional digits denoted by the character class [0-9]', () => {
    const result = solution(['julia_@c0d3.com', 'julia_0@c0d3.com', 'julia_12345@c0d3.com', 'julia0_@c0d3.com', 'julia_abc@c0d3.com'])
    expect(result).toEqual([true, true, false, false, false])
  })
})
