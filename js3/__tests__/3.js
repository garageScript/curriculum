/* global describe it expect */
const solution = require('../3').solution

describe('given an array of strings, invoking the returned function returns an object of key/value pairs with keys from the input array', () => {
  it('should return an empty object {}', () => {
    const fn = solution([])
    const result = fn({})
    expect(result).toEqual({})
  })

  it('should return empty object if nothing matches between object keys and array', () => {
    const fn = solution(['morning', 'noon', 'suppertime'])
    const result = fn({ 'brunch': 'mimosas', 'afternoon': 'mid-day snack', 'dinner': 'roast beef' })
    expect(result).toEqual({})

    const result2 = fn({ 'brunch': 'mimosas', 'morning': 'mid-day snack', 'dinner': 'roast beef' })
    expect(result2).toEqual({ morning: 'mid-day snack' })
  })

  it('should return object with keys from input array and its paired values', () => {
    const fn = solution(['breakfast', 'lunch'])
    const result = fn({ 'breakfast': 'french toast', 'lunch': 'sandwhich', 'dinner': 'pasta' })
    expect(result).toEqual({ 'breakfast': 'french toast', 'lunch': 'sandwhich' })

    const result2 = fn({ 'breakfast2': 'french toast', 'lunch2': 'sandwhich', 'dinner': 'pasta' })
    expect(result2).toEqual({})
  })

  it('should return object with keys from input array and its paired values', () => {
    const fn = solution(['sports', 'work'])
    const result = fn({ 'sports': 'basketball', 'work': 'software engineering', 'hobbies': 'knitting' })
    expect(result).toEqual({ 'sports': 'basketball', 'work': 'software engineering' })

    const result2 = fn({ 'sports': 'basketball', 'work2': 'software engineering' })
    expect(result2).toEqual({ 'sports': 'basketball' })
  })

  it('should not consider properties from the object\'s prototype chain', () => {
    const obj = { a: 1, b: 2 };
    const arr = ['hasOwnProperty'];
    const expected = {};
    const returnedFunc = solution(arr);
    expect(returnedFunc(obj)).toEqual({});
  });

  it('should not exclude properties with falsy values', () => {
    const obj = { a: 0, b: 2 };
    const arr = ['a'];
    const expected = { a: 0 };
    const returnedFunc = solution(arr);
    expect(returnedFunc(obj)).toEqual(expected);
  });
})
