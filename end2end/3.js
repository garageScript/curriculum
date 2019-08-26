/** Create an express server that sends back 
 <h1>, <input>, and <button> tag. 
When you visit XXX.garagescript.org/hello. 

Make the h1 tag red using <style> (CSS).
To generate a new port number, visit: https://apps.garagescript.org/
express is a library that helps you handle network request / response. 

To add this library to your project, run yarn add express in your project folder
To use a library to your file, use require: const express = require('express')
To use express, first run the express function const app = express()

To listen to incoming get requests, run app.get('/hello', handler). 
handler is a function that express would call when there is an incoming 
request to the /hello. 

express would call your handler function with 2 objects, request (incoming), 
and response (which you can use to send back a response)
res.send('hello') will send back a string hello to the incoming request

To listens to your port number that is linked to your url, use app.listen(NUMBER)
HTML are instructions for the browser. 
When you respond to a request with a string that looks like HTML, 

the browser will execute the instructions.
In your commit, include package.json
**/

const express = require('express')
const app = express()
const port = process.env.PORT || 3434

app.get('/hello', (req, res) => {
  res.send(`
  <h1 style="color:green">Green Express Server</h1>
  <input placeholder="Enter Name"></input>
  <button>Submit</button>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port:`, port)
})
