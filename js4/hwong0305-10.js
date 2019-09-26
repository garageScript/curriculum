const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '20mb' }));
app.use(express.static(path.join(__dirname, 'files')));

// Using a numeric value for file names
let id = 0;

// Using memory to hold the name of files
let fileList = [];
fs.readdir(path.join(__dirname, 'files'), (err, data) => {
  if (err) console.log(err);
  fileList = data;
  id = data.length
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/files', (req, res) => {
  res.json(fileList);
});

app.post('/image', (req, res) => {
  if (!req.body.imageData) {
    res.status(400).send({ error: 'Invalid message' });
  }
  fs.writeFile(
    path.join(__dirname, 'files', `${id}.png`),
    req.body.imageData,
    'base64',
    err => {
      if (!err) {
        fileList.push(`${id}.png`);
        id++;
      }
    }
  );
  res.send('Success');
});

app.listen(9644, () => console.log('Server started'));
