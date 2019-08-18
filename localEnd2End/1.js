const fs = require('fs');

fs.readdir('/Users/carlosgreen/Desktop/', (err, data) => {
  if (err) throw err;
  console.log(data);
})
