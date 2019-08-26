// Getting To Know Your Computer, pt. 1 - All Except You!
// Write a script that console.logs all the users inside the
// /home folder that is not you. Use fs.readdir and read /home directory.

// my username === 'greenc'

const fs = require('fs')

fs.readdir('/home', (err, data) => {
  if (err) throw err;
  data.filter(x => x !== 'greenc');
  console.log(x);
})
