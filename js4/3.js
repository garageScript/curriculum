// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>, <input>, and <button> tag. When you visit url/hello. Make the h1 tag red using (CSS).
const express = require('express')
const app = express()
const port = process.env.PORT || 9716
app.get('/hello', function (req, res) {
  res.send(`
      <h1 style = "color :tomato;"> hi </h1>
      <input type="email">
      <button type="button">Submit</button>
    `)
})
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
