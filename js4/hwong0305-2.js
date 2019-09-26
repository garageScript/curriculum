const fs = require('fs');
const path = require('path');

fs.readdir('/home', (err, data) => {
  if (err) throw err;
  const users = data.filter((user) => user[0] !== '.' && user !== 'hwong0305');
  fs.writeFile(path.resolve(__dirname, '../../users.txt'), users, (err) => {
    if (err) throw err;
  });
});
