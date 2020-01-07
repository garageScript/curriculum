/* globals describe expect it */
const solution = require('../5').solution

describe('call function in 2nd object (if possible) using the corresponding values in 1st object as function params, return new object', () => {

  it('should return if object is empty ', () => {
    const result = solution({}, {})
    expect(result).toEqual({})
  })

  it('should return {}', () => {
    const result = solution({}, { 'white': () => { return 'walkers' } })
    expect(result).toEqual({})
  })

  it('should return new object', () => {
    const result = solution({ 'name': 'pikachu', 'age': '59', 'power': 10, 'color': 'red' }, { 'name': (e) => { return e + ' evolved into Raichu' }, 'power': (num) => {return 1000 * num } })
    expect(result).toEqual({ 'name': 'pikachu evolved into Raichu', 'age': '59', 'power': 10000, 'color': 'red' })
  })

  it('should return ', () => {
    const result = solution({ 'name': 'khaleesi', 'age': 25, 'weakness': 'john snow', 'power': 'mother of dragons' }, { 'weakness': (e) => { return e + ' and the greed of power' }, 'power': (e) => { return ' is fire proof' } })
    expect(result).toEqual({ 'name': 'khaleesi', 'age': 25, 'weakness': 'john snow and the greed of power', 'power': 'mother of dragons is fire proof' })
  })
})
