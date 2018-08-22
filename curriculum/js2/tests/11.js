const expect = require('chai').expect;                                                                                                                                
const solution = require('../11').solution;                                                                                                                           
                                                                                                                                                                    
describe('given an array, redistribute values > 1 to previous elements that are 0 & change it to 1. All remainders will accumulate at index 9.', () => {              
it('should handle input of [0, 0, 3]', () => {                                                                                                                      
const result = solution([0, 0, 3]);                                                                                                                               
expect(result).to.equal([1, 1, 1]);                                                                                                                               
});                                                                                                                                                                 
it('should handle input of [0, 1, 3]', () => {                                                                                                                     
const result = solution([0, 1, 3]);                                                                                                                              
expect(result).to.equal([2, 1, 1]);                                                                                                                              
});                                                                                                                                                                 
it('should handle input of [0, 1, 3, 5]', () => {                                                                                                                   
const result = solution([0, 1, 3, 5]);                                                                                                                          
expect(result).to.equal([6, 1, 1, 1]);                                                                                                                          
});                                                                                                                                                        
it('should handle input of [1, 5]', () => {                                                                                                                         
const result = solution([1, 5]);                                                                                                                                  
expect(result).to.equal([5, 1]);                                                                                                                               
});                                                                                                                                                               
});                                                                                                                                                                 
 
