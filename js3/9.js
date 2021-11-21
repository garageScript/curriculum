const fetch = require('node-fetch')
const fs = require('fs')
/**
 * Create a JavaScript file 9.js so that when you run it with node 9.js, the computer will output an HTML file 9.html that displays each pokemon's name and image. There cannot be any JavaScript in the generated html file.

  Send a request to https://pokeapi.co/api/v2/pokemon/.
  Look at the response, you will notice that each pokemon has a url. You need to send another request for each pokemon to get the image url. It is located under sprites key of the object.
  Use the responses to create an HTML string to display the name and pokemon's image.
  Write the resulting string into a file using fs.writeFile

 */
const solution = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/').then(res=>{
    return res.json()
  })
  .then(data => {
    const fetchPromises = data.results.map(pokemon => {
      return fetch(pokemon.url).then(pokeRes => {
        return pokeRes.json()
      })
    })
    return Promise.all(fetchPromises)
  })
  .then(dataList =>{
    return dataList.reduce((acc,pokemon) => {
      return acc + `<div><p>${pokemon.name}</p><img src="${pokemon.sprites.front_default}"/></div>`
    },'')
  })
  .then(pokeString =>{
    fs.writeFile('pokemon.html', pokeString, ()=>{})
  })

}

    

solution()