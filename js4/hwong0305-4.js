const fs = require('fs');
const express = require('express');


const app = express();

app.get('/users', (req, res) => {
  fs.readdir('/home', (err, data) => {
    if (err) throw err;
    const users = data.filter((user) => user[0] !== '.' &&
      user !== 'hwong0305');
    res.send(`<h3>${users}</h3>`);
  });
});

app.listen(9644);
