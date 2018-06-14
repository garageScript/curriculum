const express = require('express');
const app = express();
const messages = ['stuff','other stuff'];
const hostname = 'russell.garagescript.org'

app.get('/newmessage', (req,res) => {
  messages.unshift(req.query.message);
  res.json(req.query);
});

app.get('/messages', (req,res) => {
  res.json(messages);
});

app.get('/chat', (req,res) => {
  data = (messages.map((m) => {return `<H3>${m}</H3>`;})).join('');
  res.send(
`
<HTML>
<h3>Chat</h3>
<input type='text' class='chtmsg'></input>
<button class = 'chtbut'>Chat</button>
<div class = 'cbox'>
${data}
</div>
<script>

f = () => {
  data = document.getElementsByClassName('chtmsg')[0].value;
  fetch('/newmessage?message=' + data);
}
document.getElementsByClassName('chtbut')[0].onclick = f;

setInterval(() => {
  fetch('/messages').then(r => {
    return r.json();
  }).then((messages) => {
    console.log('messages: ', messages);
    data = messages.map((a) => {return '<h3>' + a + '</h3>'}).join('');
    document.getElementsByClassName('cbox')[0].innerHTML = data;
  })},500);
 </script>
</HTML>`
  );}
);


app.listen(5570);
