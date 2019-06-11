console.log("__dirname =>", "\n", __dirname)

console.log(" ")

console.log("__filename =>","\n",  __filename)

console.log(" ")

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`)
  }
}

module.exports = Person;
