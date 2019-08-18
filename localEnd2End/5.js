const express = require('express');
const app = express();
const port = process.env.port || 4333;
const messages = [];

app.get('/', (req, res) => {
  res.send('<h1>Check out /messages or /newMessage</h1>')
})

app.get('/newMessages', (req, res) => {
  const name = req.query.name;
  const message = req.query.message;
  res.send('<h1>Send a new message!</h1>')
  messages.push({ name, message })
})

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
