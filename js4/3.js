// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>,
// <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send(`
  <h1 style="color:red">Hello C0d3.com!</h1>
  <input></input>
  <submit></submit>
  `)
})

app.listen(9645)
