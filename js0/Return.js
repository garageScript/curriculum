// 1. Write a function called `solution` that will run a
// function called `console.log` three times and return a number

const solution1 = () => {
  console.log("Hello World!");
  console.log("Hello World!");
  console.log("Hello World!");
  return 42;
}

solution1()

// 2. Write a function called `solution` that will return a
// function.
// When the returned function is called,
// `console.log` will run three times

const solution2 = () => {
  return solution1();
  // unreachable code after return statement
  console.log("Hello World!");
  console.log("Hello World!");
  console.log("Hello World!");
}
