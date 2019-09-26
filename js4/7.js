const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3005;
const path = require('path');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index.hbs', {title: 'My Chat room'});
});

app.get('/users/new', (req, res) => {
  res.render('chatForm.hbs', {title: 'New Users'});
});

app.post('/users', (req, res) => {
  console.log(req.body)
  const user = req.body.username
  res.cookie('user', user)
  res.redirect('/chat')
});

app.get('/chat', (req, res) => {
  const user = req.cookies.user
  if (!user) res.redirect('/users/new')
  res.render('chat.hbs', {title: 'chatroom', user: user})
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
