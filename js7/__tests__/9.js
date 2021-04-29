const resolveAll = require('../9');

describe('resolveAll', () => {
  it(
    'should fulfill with array of fulfilled promise values, in order',
    () => {
      return resolveAll([
        new Promise((res, rej) => res('a')),
        new Promise((res, rej) => res('b')),
      ])
        .then((result) => {
          expect(result).toEqual(['a', 'b']);
        });
    }
  );
  it(
    'should reject with the reason of the first rejected promise',
    () => {
      return resolveAll([
        new Promise((res, rej) => rej('I hereby reject thee!')),
        new Promise((res, rej) => res('b')),
        new Promise((res, rej) => rej('This reason shall fall on deaf ears')),
      ])
        .catch((err) => expect(err).toBe('I hereby reject thee!'));
    }
  );
});
