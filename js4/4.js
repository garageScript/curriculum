const fs = require('fs')
const express = require('express')
const app = express()
const PORTNUM = process.env.PORT || 9999

fs.readdir('/home', (err, files) => {
  if (err) throw err
  const data = files.reduce((data, e) => {
    if (e !== 'ted-zen') return `${data} <br/> ${e}`
    return data
  }, '')
  app.get('/users', function (req, res) {
    res.send(`
          <h3 style = "color:blue"> ${data}</h3>
           `)
  })
  app.listen(PORTNUM, () => {
    console.log(`Listening on port: ${PORTNUM}`)
  })
})
