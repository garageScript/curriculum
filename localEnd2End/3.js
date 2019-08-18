const express = require('express');
const app = express();
const port = process.env.PORT || 4111;

app.get('/', (req, res) => {
  res.send(`
  <h1>Hello Express World!</h1>
    <input value="Enter here"></input>
  <button>Submit</button>
 `)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})
