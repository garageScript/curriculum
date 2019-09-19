const express = require("express")
const app = express()
const port = process.env.PORT || 8346

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const messages = []

app.use(cookieParser())
app.use(express.static('public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

console.log(cookieParser)
console.log(bodyParser)

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send(`<h1 style="color:green">Hancho Jack Hancho Migos!</h1>`)
})

app.get('/newMessage', (req, res) => {
  res.send(`<h1 style="color:green">New Message page</h1>`)
  const name = req.query.name
  const message = req.query.message
  messages.push({ name, message })
  console.log(messages)
})

app.get('/messages', (req, res) => {
  res.json(messages)
})

app.get('/users/new', (req, res) => {
  res.send(`
  <div>
  <h1>Login page!</h1>
  <input placeholder="Enter name" id="user"><br/>
  <input type="submit" value="Submit" id="submited">
  <script>
  const user = document.getElementById("user")
  const submit = document.getElementById("submitted")

  submit.onclick = () => {
    res.cookie('name', user)
  }
  </script>
  </div>
    `)
})

app.get('/chat', (req, res) => {
  res.send(`<div>
  <h1 style="color:blue">Welcome</h1><br>
  <textarea placeholder="Enter message" id="text"></textarea><br>
  <input placeholder="Enter name" id="userName"><br>
  <input id="userInput" placeholder="Enter message"><br>
  <button id="userSubmit">Submit</button>
  <script src="sevenTwo.js"></script>
  </div>`)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

