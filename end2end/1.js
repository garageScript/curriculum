/**
Write a script that console.logs all the users inside the 
/home folder that is not you. Use fs.readdir and read /home directory.

Require the library: const fs = require('fs')
fs.readdir takes in 2 parameters: folder to read, 
and a function to be called when fs has read the folders

Make sure your function takes in 2 parameters: 
err and files (which will be an array)
**/
const fs = require('fs')

fs.readdir('/Users/carlosgreen/Desktop', (err, data) => {
  if (err) throw err;
  console.log(data)
})
