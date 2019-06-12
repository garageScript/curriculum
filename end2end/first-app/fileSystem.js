const fs = require('fs');
// avoid using syncrhonous threads
// won't be able to serve several clients

// const files = fs.readdirSync('./')
// read directory
// console.log(files)

fs.readdir('./', (err, files) => {
  if (err) throw err
  console.log(files)
})
