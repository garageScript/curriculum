const solution = require('../11');
solution();

describe('resolveAll', () => {
  it('should fulfill with array of fulfilled promise values, in order', function(done) {
    const accs = [];
    const es = [];
    const is = [];
    [
      new Promise((res, rej) => res('c')),
      new Promise((res, rej) => res('a')),
      new Promise((res, rej) => res('b')),
    ]
      .asyncReduce((acc, e, i) => {
        accs.push(acc);
        es.push(e);
        is.push(i);
        return acc + e;
      }, 'z')
      .then((result) => {
        if (JSON.stringify(accs) !== JSON.stringify(['z', 'zc', 'zca'])) {
          return done(new Error('accumulator is not passed correctly'));
        }
        if (JSON.stringify(es) !== JSON.stringify(['c', 'a', 'b'])) {
          return done(new Error('element is not passed correctly'));
        }
        if (JSON.stringify(is) !== JSON.stringify([0, 1, 2])) {
          return done(new Error('index is not passed correctly'));
        }
        if (result !== 'zcab') {
          return done(new Error('accumulator did not fire correctly'));
        }
        return done();
      });
  });
  it('should reject with first rejection value', () => {
    const array = [
      new Promise((res, rej) => rej('1st rejection')),
      new Promise((res, rej) => rej('2nd rejection')),
    ];
    return array
      .asyncReduce((acc, cv) => (acc += cv), 0)
      .catch((err) => expect(err).toBe('1st rejection'));
  });
});
