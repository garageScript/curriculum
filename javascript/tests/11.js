const solution = require('../11');
solution();

describe('resolveAll', () => {
  it( 'should fulfill with array of fulfilled promise values, in order'
  , function(done) {
    const accs = [];
    const es = [];
    const is = [];
    [
      new Promise((res, rej) => res('c')),
      new Promise((res, rej) => res('a')),
      new Promise((res, rej) => res('b')),
    ].asyncReduce((acc, e, i) => {
      accs.push(acc);
      es.push(e);
      is.push(i);
      return acc + e;
    }, 'z').then( (result) => {
      if (JSON.stringify(accs) !== JSON.stringify(['z', 'zc', 'zca'])) {
        return done(new Error('accumulator is not passed correctly'));
      }
      if (JSON.stringify(es) !== JSON.stringify(['c', 'a', 'b'])) {
        return done(new Error('element is not passed correctly'));
      }
      if (JSON.stringify(accs) !== JSON.stringify([0, 1, 2])) {
        return done(new Error('index is not passed correctly'));
      }
      if (data !== 'zcab') {
        return done(new Error('accumulator did not fire correctly'));
      }
      return done();
    });
  });
});
