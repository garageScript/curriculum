const express = require('express')
const app = express()

app.use(express.static('public'))

if (!process.env.PORT) {
  console.log('Please provide a valid port number')
} else {
  app.listen(process.env.PORT)
}
