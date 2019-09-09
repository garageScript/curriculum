const express = require('express');
const app = express();
const fs = require('fs');

//Write an example that uses each of these functions. 
//For example, `solution(5)`is a good example for
//`run a function

//called solution that takes in a number as a parameter`. 

//1. run a function called `includes` that takes in 1 parameter, a string

const includes = (string) => {
  console.log(string)
}

includes("Head trauma")

//2. run a function called `map` that takes in 1 parameter,
//a function

const map = (func) => {
  console.log(func)
}

map(includes)

//3. run a function called `setTimeout` that takes in
//2 parameters, a function and a number

const hello = () => {
  console.log("CTE")
}

setTimeout(hello, 5000);

//4. run a function called `app.get` that takes in
//2 parameters, a string and a function

// meant to be part of express/js4...
//app.get(string, func)

//5. run a function called `fs.writeFile` that takes in
//3 parameters: a string, a string, and a function


//https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback

fs.writeFile('text.txt', 'Hello Node.js', 'utf8', (err) => {
  if (err) throw err;
  console.log('File has been written to...')
})
