const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

let files = [];

fs.readdir(path.join(__dirname, 'files'), (err, data) => {
  if (!err) {
    files = data.map(item => ({ filename: item }));
  }
});

const upload = multer({ dest: 'files/' });

const app = express();

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

app.get('/files', (req, res) => {
  res.json(files);
});

app.post('/files', upload.array('userFiles'), (req, res) => {
  files.push(req.files[0]);
  res.redirect('/upload');
});

app.listen(9644, () => console.log('Now listening on Port 9644'));
