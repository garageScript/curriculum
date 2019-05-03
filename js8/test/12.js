const expect = require('chai').expect;
const solution = require('../12').solution;

describe('12.js Target sum of subarray', () => {
    it('should calculate a subarray', () => {
        const result = solution([1, 3, 4, 6, 8], 10);
        expect(result).to.equal(true);
    });
    it('should return false when there are no valid subarrays', () => {
        const result = solution([1, 2, 3], 149);
        expect(result).to.equal(false);
    });
    it('should return false when there are no valid subarrays', () => {
        const result = solution([5, 9, 10], 3);
        expect(result).to.equal(false);
    });
    it('should work regardless of negatives', () => {
        const result = solution([1, -50, 1, 50], 2);
        expect(result).to.equal(true);
    });
    it('should work for non consecutive numbers', () => {
        const result = solution([1, 3, 2, 4, 5], 11);
        expect(result).to.equal(true);
    });
    it('should work regardless of zeroes', () => {
        const result = solution([1, 0, 1], 2);
        expect(result).to.equal(true);
    });
    it('should work with only middle subarray', () => {
        const result = solution([100, 2, 3, 4, 300], 9);
        expect(result).to.equal(true);
    });
});
