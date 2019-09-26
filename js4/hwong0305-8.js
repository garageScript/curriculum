const path = require('path');
const fs = require('fs');

let memoryStorage = [];
const outputDir = path.join(__dirname, 'db.txt');

fs.readFile(outputDir, (err, data) => {
  memoryStorage = JSON.parse(data || '[]');
});

module.exports = {
  get: () => memoryStorage,
  add: (messageObj) => {
    memoryStorage.push(messageObj);
    fs.writeFile(outputDir, JSON.stringify(memoryStorage), () => {});
  },
};
