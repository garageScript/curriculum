// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>,
// <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('./index.html')
})

// https://test.llip.life/
app.listen(9645)
