/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b)=>{
  return c;
};

describe('filter an object if the condition is true', () => {
      it('should return base case', () => {
        const obja = {};

        const result = solution(obja, (k, v) => {
          return v.length > 3
        });
        expect(result).to.deep.equal({});
      });

      it('should return {5:blah blah,zolo:4thech} for input {5:blah blah, name:ho, zolo:4thech', () => {
        const obja = {
          5: 'blah blah',
          name: 'ho',
          zolo: '4thech'
        };

        const result = solution(obja, (k, v) => {
          return v.length > 3
        });
        expect(result).to.deep.equal({
          5: 'blah blah',
          zolo: '4thech'
        });
      });
      it('should return {5:blah blah} for input {5:blah blah, name:ho, zolo:4thech', () => {
        const obja = {
          5: 'blah blah',
          name: 'ho',
          zolo: '4thech'
        };

        const result = solution(obja, (k, v) => {
          return v.length > 7
        });
        expect(result).to.deep.equal({
          5: 'blah blah'
        });
      });
