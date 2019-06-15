const http = require('http');
const PORT = process.env.PORT || 3000;

const obj = {
  a: 1,
  b: 2,
  c: 3	
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Man That was SOO Kanye!');
    res.end();
  };

  if (req.url === '/api/courses') {
    res.write(JSON.stringify(obj));
    res.end();	  
  };
});

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
})

