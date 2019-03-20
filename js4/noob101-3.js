const express = require('express');
const app = express();
app.get('/hello', (req, res)=> res.send(
  <style>
   .design {
   color: red
   }
  </style>
  <h1 class="design">Hello!</h1>
   <input></input>
   <button>ClickMe</button>)
);
app.listen(3256);
