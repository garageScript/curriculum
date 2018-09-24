const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readdir(`${__dirname}/public`, (err, files) => {
    res.send( files.reduce((acc, f) => {
      return acc + `
      <div>
        <a href="/${f}" target="__blank">${f}</a>
      </div>
      `
    }, ''));
  });
});

app.listen(process.env.PORT || 8123);
