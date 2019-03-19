// Getting To Know Your Computer, pt. 2 - Write All Except You
// Write a script that creates a file ~/users.txt that contains all the users inside the /home folder that is not you.

// fs.writeFile('fileName', 'fileData', () => {});

const fs = require('fs')

fs.readdir('/home', (err, data) => {
  const readNames = data.reduce((acc, curr) => {
    if (acc !== 'greenc') {
      acc += curr + '\n'
    }
    return acc
  })
  fs.writeFile('users.txt', readNames, (err) => {
    if (err) throw err
    console.log('I hope this works!')
  })
})
