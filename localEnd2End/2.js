const fs = require('fs');

const data = `
Lorem Ipsum Generator

Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Sem et tortor consequat id porta nibh venenatis. Suspendisse pictures in est ante in nibh mauris. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. A lacus vestibulum sed arcu. In nibh mauris cursus mattis molestie a iaculis at. Tempus iaculis urna id volutpat lacus laoreet non. Netus et malesuada fames ac turpis egestas. Purus faucibus ornare suspendisse sed nisi lacus. Elementum eu facilisis sed odio morbi quis commodo odio. Sit amet nisl purus in mollis nunc sed id. Malesuada fames ac turpis egestas sed tempus.
`

fs.writeFile('data.txt', data, (err) => {
  if (err) throw err;
  console.log('File has been written!')
})

