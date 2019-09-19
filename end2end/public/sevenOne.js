const user = document.getElementById("user")
const submit = document.getElementById("submited")

submit.onclick = () => {
  res.cookie('name', user)
}

