// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>,
// <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

const express = require('express')
const app = express()
const port = process.env.PORT || 8787

app.get('/hello', (req, res) => {
  res.send(`
  <h1 style="color:green">Green Express Server</h1>
  <input placeholder="Enter Name"></input>
  <button>Submit</button>
  `)
})

app.listen(port, () => {
  console.log('server started on port', port) 
})
