const fs = require('fs')
const express = require('express')
const app = express()

fs.readdir('/home', (err, files) => {
  if (err) throw err
  const data = files.reduce((data, e) => {
    if (e !== 'ted-zen') return `${data}<br/>${e}>`
    return data
  }, '')
  app.get('/', function (req, res) {
    res.send(`<h3 style="color:blue"> ${data} </h3>`)
  })
  const port = process.env.PORT || 9999
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })
})
