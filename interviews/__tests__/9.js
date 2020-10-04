/* global describe it */
const solution = require('../9').solution;

describe('Anagram Difference - find minimum difference in two strings', () => {
  it(' "tea" and "ate" are anagrams, should return 0 because there is no need to modify', () => {
    const result = solution(['tea'], ['ate'])
    expect(result).toEqual([0])
  })

  it(' "tea" and "toe" are not anagrams, should return 1 because we can modify either `o` or `a` to make them anagrams', () => {
    const result = solution(['tea'], ['toe'])
    expect(result).toEqual([1])
  })

  it(' "act" and "acts" are not anagrams, should return -1 because they contain different number of characters', () => {
    const result = solution(['act'], ['acts'])
    expect(result).toEqual([-1])
  })

  it("given ['a', 'jk', 'abb', 'mn', 'abc'] and ['bb', 'kj', 'bbc', 'op', 'def'] should return [-1, 0, 1, 2, 3]", () => {
    const a = ['a', 'jk', 'abb', 'mn', 'abc']
    const b = ['bb', 'kj', 'bbc', 'op', 'def']
    const result = solution(a, b)
    expect(result).toEqual([-1, 0, 1, 2, 3])
  })

  it("given ['aba', 'ddcf'] and ['baa', 'cedk'] should return [0, 2]", () => {
    const a = ['aba', 'ddcf']
    const b = ['baa', 'cedk']
    const result = solution(a, b)
    expect(result).toEqual([0, 2])
  })

  it("given ['a'] and ['aa'] should return [-1]", () => {
    const a = ['a']
    const b = ['aa']
    const result = solution(a, b)
    expect(Array.isArray(result)).toBe(true).toEqual([-1])
  })
})
