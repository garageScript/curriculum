const sleepSort = require('../8');

describe('Promised sleep sort', function() {
  it('should reject an array with duplicate numbers', function(done) {
    sleepSort([9, 2, 8, 1, 2, 2, 7])
      .then((a) => {
        return done(new Error('Should have rejected'));
      })
      .catch(() => {
        return done();
      });
  });

  it('should sort an array of positive numbers', () => {
    return sleepSort([3, 4, 5, 6, 7, 1, 2]).then((sorted) => {
      expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  it('should sort an array of negative numbers', () => {
    return sleepSort([-3, -4, -5, -7]).then((sorted) => {
      expect(sorted).toEqual([-7, -5, -4, -3]);
    });
  });

  it('should sort an array of negative and non-negative numbers', () => {
    return sleepSort([0, -3, -4, -5, 6, -7, 1, 2]).then((sorted) => {
      expect(sorted).toEqual([-7, -5, -4, -3, 0, 1, 2, 6]);
    });
  });
});
