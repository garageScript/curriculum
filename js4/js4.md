Challenges:

1. Learn: fs library to interact with the file system. With this, read any files you want on your computer.


2. Learn: What you will learn: fs library to write files. 


3. Learn: Web server, HTML, tags, style, attyaributes (class)

4. Learn: FS + Web Server
Gotchas: Make sure they put fs.readfile inside req.get. 

5. Learn: Send data to server using urls, RESTful urls (messages, you will learn other restful later)

6. Learn: Front end JavaScript, HTML interaction, AJAX, polling,
Steps:
* Create / that displays input, textarea, and button.
* Add event listener to button so that it console.log user’s message when they type stuff
* When they click on button, call fetch and implement server endpoint for /newMessage
* Check network tab to make sure data is being sent
* Set interval to get /messages, console.log message
* Set div’s innerHTML

7. Learn: RESTful, POST, cookies
* In Login, use form action=post to create a post request to /users 
	Use body-parser
* Console.log data to make sure you received it, then create a user cookie
* When user goes to /chat, redirect them to /login if they don’t have cookies set. (use incognito mode to test)
* In submit message, change fetch to use a post request to /messages to create a new message

8. Learn: Memory store, adapters, NOSQL database, persistent store.

9. Learn: Using Multer to handle file uploads

10. Learn: front end device navigators, base64 encoding, PNG images

11. MemeChat: 
a. Create a middleware so when whenever request comes in, if cookie doesn’t exist, we set it to Date.now() or something to identify a user.
app.use( (req, res, next) => {
  if (!req.cookies || !req.cookies.name) res.cookie('name', Date.now());
  next();
});

b. Create an input and video image. When you hit enter, image is sent to the server (base 64 encoded)

c. convert base64 into original data and put it directly into gm:
gm(Buffer.from(req.body.data, 'base64'))

d. add font size and drawText:
    .fontSize(70)
    .stroke('#ffffff')
    .drawText(x, y, text);

e. Write the processed image into your folder under the cookie name, then store user info into the memory with name as key, Date.now() as timestamp

f. Front end should send request every 200ms to get users + timestamp, then render the images

g. You will notice that because browsers caches files (to save bandwidth), your new images are not getting updated. To fix that, we add a timestamp to the back of the image. If you set the correct timestamp from the previous step, then only images that are new will bust the cache.
img.src = `/images/${url}.png?${ts}`

h. Now you will realize that the images are flashing. To fix this problem, first we need to put the images into another div and increase counter whenever an image is done loading (if cached, the onload event should fire immediately)
images.forEach(([url, ts]) => {
      const img = new Image();
      img.onload = imageHandler;
      img.onerror = imageHandler;
      img.src = `/images/${url}.png?${ts}`;
      curContainer.appendChild(img);
  });

you should put these images that are loading into another div, then swap the div into view when all the images are loaded. 
const swap = () => {
  const prevContainer = curContainer;
  curContainer = curContainer === imgContainer ? imgContainer2 : imgContainer;
  curContainer.style.display = 'none';
  prevContainer.style.display = 'block';
  getImages();
};

Good luck!




