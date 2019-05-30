
/* NEXT PRIME
Write the primeMaker
function that takes a starting number and returns a
function that will
return the next prime number greater than its previously returned number.

const getNextPrime = primeMaker(4);
const a = getNextPrime(); // a will be 5
const b = getNextPrime(); // b will be 7
const c = getNextPrime(); // c will be 11
*/

/* NEXT PRIME
Write the primeMaker
function that takes a starting number and returns a
function that will
return the next prime number greater than its previously returned number.

const getNextPrime = primeMaker(4);
const a = getNextPrime(); // a will be 5
const b = getNextPrime(); // b will be 7
const c = getNextPrime(); // c will be 11
*/

const isPrime = (n, i = 2) => {
  if (n < 2) return false 
  if (i === n) return  true 
  if (n % i === 0) return false
  return isPrime(n, i + 1)
}

console.log(isPrime(1), false) // false 
console.log(isPrime(7), true) // true
console.log(isPrime(5), true) // true 
console.log(isPrime(10), false) // false 

const primeNums = (n, i = 2, newArr = []) => {
  if (i === n) return newArr;
  if (isPrime(i)) {newArr.push(i)}
  return primeNums(n, i + 1, newArr)
}

console.log(primeNums(10)) // [3, 5, 7, 9]
console.log(primeNums(15)) // [3, 5, 7, 9, 11, 13]
console.log(primeNums(20)) // [3, 5, 7, 9, 11, 13, 15, 17, 19]

const solution = (a = 2) => {
  return () => {
  a += 1
  if (!isPrime(a)) {a += 1}
  if (isPrime(a)) return a
  };
};

console.log("-------")
const getNextPrime = solution(4);
console.log(getNextPrime(), 5)
console.log("-------")
console.log(getNextPrime(), 7)
//const c = getNextPrime(); // c will be 11
console.log(getNextPrime(), 11)

module.exports = {
    solution,
};
