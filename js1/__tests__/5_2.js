let solution = require('../5_2').solution;

describe('call function a smaller number of times given two positve integers', () => {
  it('should call function 0 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},0,5);
    expect(result).toBe(counter);
  });
  it('should call function 5 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},5,10);
    expect(result).toBe(counter);
  });
  it('should call function 10 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},10,15);
    expect(result).toBe(counter);
  });
  it('should call function 15 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},15,20);
    expect(result).toBe(counter);
  });
});
