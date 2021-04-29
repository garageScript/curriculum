/* global describe it */

const solution = require('../11').solution;

describe('write a function that normalizes an array of nested objects by returning an array of objects of each value property', () => {
  it('should return all key value pairs from an array of objects', () => {
    const input = [
      {
        'value': 'value3',
        'choco': 'cookies',
        'children': []
      }
    ]

    const expected = [ { 'value': 'value3' } ]
    const result = solution(input)
    expect(result).toEqual(expected)
  })

  it('should return an array of all key value pairs from the array of objects in the correct order', () => {
    const input = [
      {
        'value': 'value1',
        'children': []
      },
      {
        'children': [
          { 'value': 'value5' }
        ]
      },
      {
        'value': 'value6',
        'children': []
      }
    ]

    const expected = [
      { 'value': 'value1' },
      { 'value': 'value5' },
      { 'value': 'value6' }
    ]
    const result = solution(input)
    expect(result).toEqual(expected)
  })

  it('should return an array of all key value pairs in double layer objects in the correct order', () => {
    const input = [
      {
        'value': 'value1',
        'children': [
          {
            'value': 'value2',
            'children': []
          }
        ]
      },
      {
        'value': 'value5',
        'children': [
          {
            'value': 'value6',
            'children': []
          }
        ]
      }
    ]

    const expected = [
      { 'value': 'value1' },
      { 'value': 'value2' },
      { 'value': 'value5' },
      { 'value': 'value6' }
    ]
    const result = solution(input)
    expect(result).toEqual(expected)
  })

  it('should return an array of all key value pairs in multi-layer objects in the correct order', () => {
    const input = [
      {
        'value': 'value1',
        'children': [
          {
            'value': 'value200',
            'children': [
              {
                'value': 'value3',
                'children': []
              }
            ]
          },
          {
            'value': 'value4',
            'children': []
          }
        ]
      },
      {
        'value': 'value5',
        'children': []
      }
    ]

    const expected = [
      { 'value': 'value1' },
      { 'value': 'value200' },
      { 'value': 'value3' },
      { 'value': 'value4' },
      { 'value': 'value5' }
    ]
    const result = solution(input)
    expect(result).toEqual(expected)
  })
})
