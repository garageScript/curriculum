const express = require('express')
const fs = require('fs')
const app = express()
let users = ''
fs.readdir('/home', (err, data) => {
  if (err) throw err
  users = data.reduce((acc, curr) => {
    if (curr !== 'greenc') {
      acc += `<h3>${curr}</h3>`
    }
    return acc
  })
})
app.get('/', (req, res) => {
  res.send(`${users}`)
})
app.listen(9645, function () {
  console.log('Listening on port 9645...')
})
