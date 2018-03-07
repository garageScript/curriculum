/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (input1, input2, input3) => {

  var maximum = input1;
    
    if ((input1 >= input2) && (input1 >= input3)) {
          
          return maximum; 
          
        } else if (input2 > input3){
              
                maximum = input2;
                return maximum;
              
              
            } else {
                  
                  maximum = input3;
                  return maximum;
                  
                }
};

module.exports = {
  solution,
};
