const fs = require('fs')
const path = require('path')

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...')
})
// creates test inside our current directory

// Overwrites what is already in the file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'I love Node.js!',
  err => {
    if (err) throw err
    console.log('File overwritten to...')

// appends to hello.txt
fs.appendFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'I love Javascript!',
  err => {
    if (err) throw err
    console.log('File appended to...')
})
})

// Create and write to a file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  err => {
    if (err) throw err
    console.log('File written to...')
})

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
})

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'world.txt'), (err, data) => {
  if (err) throw err;
  console.log(data)
})
