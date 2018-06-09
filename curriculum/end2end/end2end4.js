const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.listen(5570);



app.get('/',(req,res) => { 

  fs.readdir('/home',(err,d) => {
    const names = d.reduce((a,b) => {
      if(b === 'russluttrell') return a;
      return a + '<h3>' + b + '</h3>';
    })
    
    res.send(    
      `
  <html>

  <h1 class='title' >Welcome to Russell's World</h1>

  <style>
  h1.title{
    color:red;
    background-color: blue}
  </style>

  ${names}

  <textarea id = 'ta'></textarea>

  <input id ='fname'></input>

  <button id ='butt'>click here</button>


  </html>
  `);
  });

});

const messages = [{name:'paul',message:'hello'},{name:'bob',message:'hi'}];

app.get('/messages',(req,res) => {

  const names = messages.reduce((a,b) => {
    return a + '<div><b>' + b['name'] + ' ' + b['message'] + '</b></div>';
  },'');

  res.send(`
  <html>
  ${names}
  </html>`);
});

app.get('/newmessage',(req,res) => {
  res.send('ok');
  messages.push(req.query);
});
