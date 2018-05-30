/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  //this is Euclid's algorithm
  if( b === 0 ) { return 0; }
  if( a < b ){
    //swap numbers if a < b
    c = a;
    a = b;
    b = c;
  }
  r = a % b;
  q = a / b;
  if ( r === 0 ) { return b; }
  return solution(a,r);
};

module.exports = {
  solution,
};
