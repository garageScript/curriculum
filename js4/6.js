const express = require('express')
const app = express()
const messages = []

app.get('/newMessage', (req, res) => {
  res.send(`<h1>newMessage</h1>`)
  const name = req.query.name
  const message = req.query.message
  messages.push({ name, message })
  console.log(messages)
})

app.get('/messages', (req, res) => {
  res.send(`<h1 style="color:green">Lord Of the Rings > Star Wars</h1>`)
  res.json(messages)
})

app.get('/', (req, res) => {
  res.status(404)
    .send('Not Found')
})

app.use(express.static('public'))
app.get('/chat', (req, res) => {
  res.send(`
  <div></div>
  <h1 style="color:blue">Welcome!</h1><br>
  <textarea id="text"></textarea>
  <input placeholder="Enter name" id="userName">
  <input id="userInput" placeholder="Enter message">
  <button id="userSubmit">Submit</button>
  <script src="client6.js"></script><br>
  `)
})

app.listen(6666, () => {
  console.log('Listening on Port 6666...')
})
