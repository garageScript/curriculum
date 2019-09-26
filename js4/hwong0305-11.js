const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const gm = require('gm');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/images', express.static(path.resolve(__dirname, 'images')));

const userList = {};

fs.readdir(path.join(__dirname, 'images'), (err, data) => {
  if (err) console.log(err);
  if (data) {
    data.forEach(user => {
      const str = user.split('.png')[0];
      userList[str] = str;
    });
  }
});

app.get('/', (req, res) => {
  if (!req.cookies.username) res.redirect('/login');
  else {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

app.get('/users', (req, res) => {
  res.json(userList);
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.send('OK');
});

app.post('/newMessage', (req, res) => {
  userList[req.cookies.username] = req.cookies.username;
  const imageData = Buffer.from(req.body.imageData, 'base64');
  gm(imageData)
    .fontSize(70)
    .stroke('#ffffff')
    .drawText(0, 200, req.body.message)
    .write(
      path.resolve(__dirname, 'images', `${req.cookies.username}.png`),
      err => {
        if (err) console.log(err);
      }
    );
  res.json({
    success: 'true',
  });
});

app.listen(9644, () => console.log('Now listening on Port 9644'));
