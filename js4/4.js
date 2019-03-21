const express = require('express')
const app = express()
const fs = require('fs')

app.get('/hello', (req, res) => {
  fs.readdir('/home', (err, data) => {
    const users = data.reduce((acc, curr) => {
      if (curr !== 'greenc') {
        acc += curr + '<br>'
      }
      return acc
    })
    res.send(`
<h3>${users}</h3>  
  `)
  })
})

app.listen(6666)
app.listen(9645)
