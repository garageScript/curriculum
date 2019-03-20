// Creating Your First Site - Express Yourself
// Create an express server that sends back <h1>,
// <input>, and <button> tag.
// When you visit url/hello. Make the h1 tag red using (CSS).

 app.get('/hello', (req, res) => { 
   res.send(`
     <h1 style="color:red">Hello C0d3!</h1> 
     <input placeholder="Enter here"></input>  
     <button onclick="alert('Good Job!')">Submit</button>
  `) 
 })
 app.listen(9645)
