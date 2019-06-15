//Write a function called `solution` that takes in:

// Function that we want to return
const funky = () => {
  console.log("Groovy baby");
}

funky();

//1. a string as a parameter, and returns a function

const solution1 = (string) => {
  return funky;
}

funky();

//2. a number as a parameter, and returns a function

const solution2 = (number) => {
  return funky;
}

funky();

//3. a boolean as a parameter, and returns a function

const solution3 = (boolean) => {
  return funky;
}

funky();

//4. a function as a parameter, and returns a function

const solution4 = (paramter) => {
  return funky;
}

funky();

//5. 2 parameters (a function and a number),
//and returns a function

const solution5 = (fun, number) => {
  return funky;
}

funky();
