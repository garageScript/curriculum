const express = require('express');
const app = express();

const data = [];

app.get('/newMessage', (req, res) => {
  data.push({
    name: req.query.name,
    message: req.query.message,
  });
  res.send('Success');
});

app.get('/messages', (req, res) => {
  res.json(data);
});

app.listen(9644, () => console.log('Now listening on Port 9644'));
