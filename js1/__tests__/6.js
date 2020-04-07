const solution = require('../6').solution;

const primes = [2, 3, 5, 7, 11, 13, 1223];
const nonPrimes = [-200, -1, 0, 1, 4, 6, 8, 9, 10, 12, 1226];

describe('isPrime', () => {
  describe('correctly identifies prime numbers', () => {
    primes.forEach((prime) => {
      test(`identifies ${prime} as a prime number`, () => {
        expect(solution(prime)).toEqual(true);
      });
    });
  });

  describe('correctly identifies non-prime numbers', () => {
    nonPrimes.forEach((nonPrime) => {
      test(`identifies ${nonPrime} as a non-prime number`, () => {
        expect(solution(nonPrime)).toEqual(false);
      });
    });
  });
});
