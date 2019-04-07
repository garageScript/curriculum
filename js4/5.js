const express = require('express')
const app = express()
const messages = []
app.get('/newMessage', (req, res) => {
  res.send(`<h1 stlye="color:blue">New Message Page!</h1>`)
  messages.push(req.query.name)
})
app.get('/messages', (req, res) => {
  res.json(messages)
})
app.get('/', (req, res) => {
  res.send(`
  <h1 style="color:green">Welcome!</h1>
  <input placeholder="Enter name"></input><br>
  <button onclick="alert('Thanks for that!')">Submit</button>
  `)
})
app.listen(6666, () => {
  console.log('Listening on port 6666...')
})
