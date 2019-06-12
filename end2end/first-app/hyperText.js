const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1 style="color:green">Hello World!</h1>');
    res.end()	  
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
	res.end(); 
  }
});

server.on('connection', (socket) => {
  console.log('New conection...')
})

console.log('Listening on port 3000...');
server.listen(3000);
