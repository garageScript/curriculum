const express = require('express');
const app = express();
const port = process.env.PORT || 4222;
const fs = require('fs');
const arr = [];

const users = fs.readdir('/', (err, files) => {
  if (err) throw err;
  console.log(files)
  arr.push(files);
})

app.get('/', (req, res) => {
  res.send(`
  <h3>${arr}!</h3>
 `)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})
