const expect = require('chai').expect;
let solution = require('../1').solution;

describe('js1/1.js max 3', () => {
    it('should find the max of 3 numbers', () => {
        const result = solution(6, 6);
        expect(result).to.equal(12);
    });
    it('should find the max of 3 negative numbers', () => {
        const result = solution(-2, -3);
        expect(result).to.equal(-5);
    });
    it('should find the max with positive n negatives', () => {
        const result = solution(-2, -2);
        expect(result).to.equal(-4);
    });
    it('should find the max where max is first parametr', () => {
        const result = solution(3, 2);
        expect(result).to.equal(5);
    });
});