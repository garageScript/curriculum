// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>,
// <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send(`
    <h1 style="color:red">Welcome to c0d3.garagescript.org!</h1><br>
  <input placeholder="Enter Name"></input><br>
  <button onclick=alert("Checking to see if this work!")>Submit</button>
  `)
})

app.listen(6666, function () {
  console.log('server started on port 6666...')
})
