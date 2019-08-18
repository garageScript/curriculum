const express = require('express');
const app = express();
const port = process.env.PORT || 4444;
const messages = [];

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(404)
  .send('NOT FOUND')
})

app.get('/chat', (req, res) => {
  res.send(`
  <div>
    <h1 style="color:blue">Welcome to the chat page!</h1>
      <textarea id="userText">Coolio</textarea>
      <input id="userName" placeholder="message"></input>
      <input id="userInput" value="enter here"></input>
        <button id="button">Submit</button>
    
    <script src="index.js"></script>
  </div>
  `)
})

app.get('/newMessage', (req, res) => {
  const name = req.query.name;
  const message = req.query.message;

  res.send('<h1>new message page</h1>')
  messages.push({ name, message })
  console.log(messages)
})

app.get('/messages', (req, res) => {
  res.send(`<h1 style="color:green">LOTR > Harry Potter</h1>`)
  res.json(messages)
})

app.listen(port, () => {
  console.log(`Listening of port: ${port}`)
})

