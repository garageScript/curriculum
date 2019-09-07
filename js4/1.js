// Getting To Know Your Computer, pt. 1 - All Except You!
// Write a script that console.logs all the users inside the /home folder that is not you. Use fs.readdir and read /home directory.

// const fs = require('fs');
// fs.readdir('/home', func);

const fs = require('fs')

fs.readdir('/home', cb = (err, files) => {
  if (err) throw err
  files.forEach((e) => {
    if (e !== 'ted-zen') console.log(e)
  })
})
