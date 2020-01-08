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
    const result = solution({ 'name': 'pikachu', 'age': '59', 'power': 10, 'color': 'red' }, { 'name': (e) => { return e + 'Raichu' }, 'power': (num) => num * num })
    expect(result).toEqual({ 'name': 'pikachuRaichu', 'age': '59', 'power': 100, 'color': 'red' })
  })

  it('should return ', () => {
    const result = solution({ 'name': 'khaleesi', 'age': 25, 'power': 'mother of dragons', 'weakness': 'john snow' }, { 'weakness': (e) => { return e + ' knows nothing' }, 'power': (e) => { return e + ' is fire proof' } })
    expect(result).toEqual({ 'name': 'khaleesi', 'age': 25, 'power': 'mother of dragons is fire proof', 'weakness': 'john snow knows nothing' })
  })
})
