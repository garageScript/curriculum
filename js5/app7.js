const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5432
const public = path.join(__dirname + '/public')

app.get('/', (req, res) => {
  res.sendFile(path.join(public, 'seven.html'))
})

app.listen(port, () => {
  console.log(`App 7 on port: ${port}`)
})
