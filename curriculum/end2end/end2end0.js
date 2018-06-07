
const fs = require('fs');

const printName = (error, data) => {
  data.splice(data.indexOf('russluttrell',1));
  console.log(data);
}

fs.readdir('/home',printName);

