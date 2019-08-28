const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")

three.style.backgroundColor = "lightgreen"

one.onclick = () => {
  console.log("one was clicked")
  one.style.backgroundColor = "grey"
  two.style.backgroundColor = "lightgreen"
  three.style.backgroundColor = "lightgreen"
}

two.onclick = () => {
  console.log("two was clicked")
  one.style.backgroundColor = "grey"
  two.style.backgroundColor = "grey"
  three.style.backgroundColor = "lightgreen"
  four.style.backgroundColor = "grey"
}

three.onclick = () => {
  console.log("three was clicked")
  one.style.backgroundColor = "lightgreen"
  two.style.backgroundColor = "grey"
  three.style.backgroundColor = "grey";
  four.style.backgroundColor = "lightgreen"
}

four.onclick = () => {
  console.log("four was clicked")
  one.style.backgroundColor = "grey"
  two.style.backgroundColor = "lightgreen"
  three.style.backgroundColor = "lightgreen"
  four.style.backgroundColor = "grey"
}

if (four.style.backgroundColor === "grey" &&
  three.style.backgroundColor === "grey" &&
  two.style.backgroundColor === "grey" &&
  one.style.backgroundColor === "grey") {
  alert("You've won!")
}
