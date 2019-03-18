/**
Count the number of prime numbers less than a non-negative number, n.
**/

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

var countPrimes = function(n) {
  let count = 0;
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
    count++;
    }
  }  
  return count;
};


console.log(countPrimes(10)); 
// 4
// 2 + 3 + 5 + 7
