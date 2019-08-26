/**
Write a script that console.logs all the users inside the 
/home folder that is not you. 
Use fs.readdir and read /home directory.

Require the library: const fs = require('fs')
fs.readdir takes in 2 parameters: 
folder to read, and a function to be called when fs has read the folders
**/
const fs = require('fs')
const data = `Lorem Ipsum Generator
Generate Lorem Ipsum placeholder text. 
Select the number of characters, words, sentences or paragraphs, and hit generate!

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. 

Sem et tortor consequat id porta nibh venenatis. 
Suspendisse pictures in est ante in nibh mauris. 
Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. 

A lacus vestibulum sed arcu. 
In nibh mauris cursus mattis molestie a iaculis at. 
Tempus iaculis urna id volutpat lacus laoreet non. 

Netus et malesuada fames ac turpis egestas. 
Purus faucibus ornare suspendisse sed nisi lacus. 
Elementum eu facilisis sed odio morbi quis commodo odio. 

Sit amet nisl purus in mollis nunc sed id. 
Malesuada fames ac turpis egestas sed tempus.`

fs.readdir('/Users/carlosgreen/Desktop', (err, data) => {
  if (err) throw err
  const users = data.reduce((acc, curr) => {
    if (curr !== 'greenc') {
      acc += curr + '\n'
    }
    return acc
  })

fs.writeFile('users.txt', users, (err, data) => {
  if (err) throw err;
  console.log('File has been written to')
  })
})
