https://nodejs.org/en/

NODE.JS




asp.net or rails are blocking synchronous architecture.
- Not utilizing resources efficiently
- asp.net can utilize asynchronous architecture but you’ll personally have to do extra work
- 





Node is NOT a framework.
It’s a runtime environment for executing Javascript code.

Non-blocking asynchronous architecture

Single thread to handle multiple requests

Node applications are highly-scalable, data-intensive and real-time apps

Node is asynchronous by default

Node is ideal for I/O-intensive apps (input/output)
- Serve more clients without the need for more hardware
- Because node is single threaded, when performing the calculations to serve one client other clients have to wait
- Should be used for building data intensive and real-time applications

Node is NOT ideal for CPU-intensive apps
- Ie. Video encoding or image manipulation service
- A lot of calculations to be done by the CPU and few operations that touch the file system or the network




Why use node?

- Fast, efficient and highly scalable
- Event driven, non-blocking I/O model
- Popular in the industry
- Same language on the front and back end (JS)



Non-Blocking I/O
( Input / Output calls)

- Works on a single thread using non-blocking I/O calls
- Supports tens of thousands concurrent connections
- Optimizes throughout & scalability in apps with many I/O operations
- All of this makes Node.js apps very fast & efficient
- Not good with CPU intensive apps (several calculations)



Node’s event loop

- Single threaded
- Supports concurrency via events & callbacks
- EventEmiiter class is used to bind events and listeners



Best Types of Project for Node

- REST API & micorservices
- Real time services (chat, live updates)
- CRUD apps - Blogs, Shopping Carts, Social networks
(Create, Read, Update, Delete SQL commands)
- Tools & Utilities
- Anything that is not CPU intensive



Node Package Manager

- Install 3rd party packages (frameworks, libraries, tools, etc.)
- Packages get stored in the “node_modules” folder
- All dependencies are listed in a “package.json” file
- NPM scripts can be created to run certain taks such as run a server



npm init 				=> Generates a package.json file

npm install			=> Ensure that the dependencies remain the same on all machines the project is installed on

npm install express 	=> Installs a package locally

npm install -g nodemon	=> Installs a package globally



Node Modules

- Node core modules (path, fs, http, etc)
- 3rd party modules/packages installed via npm
- Custom modules (files)

const path = require(‘path’)
=> create a variable and set it to whatever module you want

const myFile = require(‘./myFile’)
=> create your own file and bring it in
=> ./ same folder/directory


- Most (‘fs’) or file system functions are asynchronous, which means it takes in a callback or function to what you want to do after execution
