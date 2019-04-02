const express = require('express')
const app = express()
const messages = []

app.get('/', (req, res) => {
  messages.push(req.query.name)
})

app.get('/messages', (req, res) => {
  res.json(messages)
}) 

app.listen(9645, () => {
  console.log('Listening on port 9645...')
})
