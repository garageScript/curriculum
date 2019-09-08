const express = require('express')
const app = express()
const port = process.env.PORT || 9456
const messages = []

app.get('/', (req, res) => {
  res.status(404)
    .send('<h1>Error / not found</h1>')
})

app.get('/chat', (req, res) => {
  res.send(`
  <title>Chatroom</title>

  <div>
    <input id="userInput"></input><br/>
      <textarea id="textBox" placeholder="enter here"></textarea><br/>
    <button id="buttonElement">Submit</button><br/>
  </div>

  <script>

const inputBox = document.getElementById('userInput')
const buttonElement = document.getElementById('buttonElement')
const textBox = document.getElementById('textBox')

inputBox.onkeyup = (e) => {
 console.log(e.key)
}

buttonElement.onclick = (e) => {
  const text = textBox.value
  const input = inputBox.value

  console.log(e, 'e')
  console.log(text, 'text')
  console.log(input, 'input')

  fetch('http://localhost:9456/messages?name=${text}&messages=${input}')
}

setInterval(() => {
  fetch('/messages')
    .then(r => r.json())
    .then(r => JSON.stringify(f).map({ name, message }) => ${text}: ${input})
}, 1000)

  </script>
  `)
})

app.get('/messages', (req, res) => {
  const msg = req.query.msg 
  messages.push(msg)
  res.send(messages)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

