const fs = require('fs');

const log = (data, index = 0) => {
  if (index === data.length) return;
  if (data[index] !== 'hwong0305' && data[index][0] !== '.') {
    console.log(data[index]);
  }
  return log(data, index + 1);
};

fs.readdir('/home', (err, data) => {
  if (err) console.log(err);
  log(data);
});
