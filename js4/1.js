// Getting To Know Your Computer, pt. 1 - All Except You!
// Write a script that console.logs all the users inside the
// /home folder that is not you. Use fs.readdir and read /home directory.


const express = require('express')
  const app = express()
  const path = require('path')

  app.get('/', function (res, req) {
    res.sendFile(path.join(__dirname + '/index.html'))
  })

app.listen(9645)
