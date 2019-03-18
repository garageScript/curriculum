var fizzBuzz = function(n) {
  let arr = []
  
  for (var i = 1; i <= n; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    arr.push("FizzBuzz")
    } else if (i % 5 === 0) {
          arr.push("Fizz")
      } else if (i % 3 === 0) {
          arr.push("Buzz")
             } else{
      arr.push(i.toString());
              }
  }
    return arr;
};

console.log(fizzBuzz(15));
