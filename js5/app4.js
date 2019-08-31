const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3456
const public = path.join(__dirname + '/public')

app.get('/', (req, res) => {
  res.sendFile(path.join(public, 'four.html'))
})

app.listen(port, () => {
  console.log(`App 4 on port: ${port}`)
})
