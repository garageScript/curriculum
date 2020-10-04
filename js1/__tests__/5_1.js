const solution = require('../5_1').solution;

describe('call funct x number of times using parameter y', () => {
  it('should call function 3 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},3);
    expect(counter).toBe(3);
  });
  it('should call function 5 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},5);
    expect(counter).toBe(5);
  });
  it('should call function 20 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},20);
    expect(counter).toBe(20);
  });
  it('should call function 30 times', () => {
    let counter = 0;
    const result = solution(()=>{counter+=1},30);
    expect(counter).toBe(30);
  });
});
