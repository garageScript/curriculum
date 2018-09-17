const sleepSort = require('../8');

describe('Serialize', function() {
  it('should sort empty array correctly', function(done) {
    sleepSort([]).then( (a) => {
      if (JSON.stringify(a) !== JSON.stringify([])) {
        return done(new Error('Did not sort correctly'));
      }
      return done();
    });
  });

  it('should make sure sleep sort is used', function(done) {
    const now = Date.now();
    sleepSort([9, 8, 7]).then( (a) => {
      if (Date.now() - now < 9) {
        return done(new Error('Did not use setTimeout to sleep'));
      }
      if (JSON.stringify(a) !== JSON.stringify([])) {
        return done(new Error('Did not sort correctly'));
      }
      return done();
    });
  });

  it('should sort an array correctly', function(done) {
    sleepSort([9, 8, 7]).then( (a) => {
      if (JSON.stringify(a) !== JSON.stringify([7, 8, 9])) {
        return done(new Error('Did not sort correctly'));
      }
      return done();
    });
  });

  it('should sort an array correctly', function(done) {
    sleepSort([9, 2, 8, 1, 2, 2, 7]).then( (a) => {
      if (JSON.stringify(a) !== JSON.stringify([1, 2, 2, 2, 7, 8, 9])) {
        return done(new Error('Did not sort correctly'));
      }
      return done();
    });
  });
});

