// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>, <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  res.send('<html> \
    <h1 style="color: red">Hello</h1> \
    <input><button>Submit</button> \
    </html>');
});
app.listen(9644);
