"use strict"

// isPrime
const isPrime = (n, i = 2) => {
  if (n < 2) return false
  if (n === i) return true
  if (n % i === 0) return false
  return isPrime(n, i + 1)
}

console.log("---isPrime---")
console.log(isPrime(7), true)
console.log(isPrime(10), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(3), true)
console.log(" ")


// fizzBuzz
const fizzBuzz = (arr, i = 0, newArr = []) => {
  if (i === arr.length) return newArr
  if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {newArr.push("Fizz")}
  if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {newArr.push("Buzz")}
  if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {newArr.push("FizzBuzz")}
  if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {newArr.push(arr[i])}
  return fizzBuzz(arr, i + 1, newArr)
}

const arr = [1, 3, 5, 7, 10, 15]
const buzz = [1, "Fizz", "Buzz", 7, "Buzz", "FizzBuzz"]

console.log("---fizzBuzz---")
console.log(fizzBuzz(arr))
console.log(buzz)
console.log(" ")


// Euclid's GCD
const Euclid = (a, b) => {
  if (b === 0) return a
  return Euclid(b, a % b)
}

console.log("---Euclid---")
console.log(Euclid(10, 15), 5)
console.log(Euclid(50, 100), 50)
console.log(Euclid(30, 21), 3)
