const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./8');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/newMessage', (req, res) => {
  db.add(
    {
      name: req.cookies.username,
      message: req.query.message,
    },
  );
  res.end();
});

app.get('/messages', (_req, res) => {
  res.send(db.get());
});

app.get('/users/new', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.get('/chat', (req, res) => {
  if (!req.cookies.username) res.redirect('/users/new');
  else res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.post('/users/new', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/chat');
});

app.listen(9644, () => console.log('Now listening on Port 9644'));
