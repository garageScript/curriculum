const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const path = require('path')

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
