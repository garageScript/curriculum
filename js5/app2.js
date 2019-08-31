const express = require('express')
const app = express()
const port = process.env.PORT || 5454;
const path = require('path')
const public = path.join(__dirname + '/public')

app.get('/', (req, res) => {
  res.sendFile(path.join(public, 'two.html'))
})

app.listen(port, () => {
  console.log(`App 2 on port: ${port}`)
})

