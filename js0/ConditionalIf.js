//1. write a function called solution that takes in 2 numbers.
//If the sum of the 2 numbers are greater than 100,
//return "massive". Otherwise, return "small"

const slut1 = (numCocks1, numCocks2) => {
  if ((numCocks1 + numCocks2) > 100) return "massive";
  return "small";
}

console.log(slut1(99, 0), "small") // small
console.log(slut1(99, 1), "massive") // massive

//2. write a function called solution that takes in 2 numbers.
//If both numbers are greater than 10, return 10. 
//Otherwise, return the sum of the 2 input numbers

const slut2 = (num1, num2) => {
  if ((num1 + num1) > 10) return 10;
  return (num1 + num2);
}

console.log(slut2(99, 0), 10) // 10 
console.log(slut2(4, 1), 5) // 5 


//3. write a function called solution that takes in
//2 strings and a number.
//If the number is greater than 42,
//return the two strings combined together.
//Otherwise, return empty string.

const slut3 = (string1, string2, number) => {
  if (number > 42) return (string1 + string2);
  if (number < 42) return "";
}

console.log(slut3("Hello ", " World", 44), "hello world") // hello world 
console.log(slut3("These are", "the droids ", 41), "") // "" 

//4. write a function called solution that takes in 2 strings.
//If the 2 strings are equal, return true.
//Otherwise, return false.

const slut4 = (string1, string2) => {
  if (string1 === string1) return true;
  return false;
}

console.log(slut4("cool", 'cool'), "true") // true 
console.log(slut4("not", "cool"), 'false') // false
