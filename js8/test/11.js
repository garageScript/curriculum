const expect = require('chai').expect;
const solution = require('../11').solution;

describe('11.js max value', () => {
    it('should return value for one weight', () => {
        const result = solution([1], 40);
        expect(result).to.equal(40);
    });
    it('should return value for one weight', () => {
        const result = solution([30], 40);
        expect(result).to.equal(30);
    });
    it('should return max value for 102', () => {
        const result = solution([100, 5], 102);
        expect(result).to.equal(100);
    });
    it('should work for 8 value using 1, 4, 5', () => {
        const result = solution([4, 5], 9);
        expect(result).to.equal(9);
    });
    it('should work for 18 value using 8, 15', () => {
        const result = solution([8, 15], 18);
        expect(result).to.equal(16);
    });
});
