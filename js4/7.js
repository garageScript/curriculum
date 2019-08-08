/* inital attempt */
const express = require('express')
const cookieParser = require('cookie-parser')
const port = Process.env.PORT || 3005
const bodyParser = require('body-parser')
const app = app()

app.use(cookieParser())
app.use(bodyParser.urlencoded())

app.get('/users/new', (req, res) => {
  res.cookie('fullname', 'song' || 'username')
  console.log(res.cookie.fullname)
  console.log(res.cookie.username)

  fetch('/message', { credentials: 'include' })
    .then((req) => res.json())

  window.location = '/users'

  res.redirect('/users')

  res.send(`${req.body}`)
})

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to UserPage</h1>`)
})

app.listen(port, () => {
  console.log('Listening on port:', port)
})
