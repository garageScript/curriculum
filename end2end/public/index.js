const input = document.querySelector('#userInput')
const button = document.querySelector('#userButton')
const text = document.querySelector('#userText')

document.getElementById('userSubmit')
fetch('/newMessage?name=${name.value}&message=${input.value}')
console.log(name.value, input.value)
.then(res => res.json())
.then(data => JSON.stringify(data))

