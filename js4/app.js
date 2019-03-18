const http = require('http')

const hostname = 'green.c0d3.com'

const port = 9688

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})
