const input = document.getElementById('userInput')
const name = document.getElementById('userName')
const text = document.getElementById('text')
document.getElementById('userSubmit').onclick = () => {
  window.fetch(`/newMessage?name=${name.value}&message=${input.value}`)
  console.log(name.value, input.value)
}
setInterval(() => {
  window.fetch('/messages').then((res) => {
    return res.json()
  }).then((json) => {
    text.value = JSON.stringify(json).map(({ name, message }) => `${name}: ${message} \n`)
  })
}, 1000)
