const express = require('express');
const path = require('path');

const app = express();
const messages = [];

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.get('/messages', (req, res) => res.json(messages));
app.get('/newMessage', (req, res) => {
  messages.push({
    name: req.query.name,
    message: req.query.message,
  });
  res.send('Success');
});

app.listen(9644, () => console.log('Now listening on Port 9644'));
