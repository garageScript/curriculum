// Getting To Know Your Computer, pt. 2 - Write All Except You
// Write a script that creates a file ~/users.txt that contains all the users inside the /home folder that is not you.

// fs.writeFile('fileName', 'fileData', () => {});
const fs = require('fs')

fs.readdir('/home', (err, files) => {
  if (err) throw err

  const data = files.reduce((data, e) => {
    if (e !== 'ted-zen') return data + '\n' + e
    return data
  }, '')

  fs.writeFile(__dirname + '/user.data', data, (err) => {
    if (err) throw err
    console.log('write success')
  })
})
