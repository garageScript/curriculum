const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const Joi = require('joi')
// Joi is a class

app.use(express.json());

const courses = [
  {id: 1, first_name: 'course1', last_name: 'coolio', number: '555-555-5555', email: 'coolio@gmail.com'},
  {id: 2, name: 'course1'},
  {id: 3, name: 'course2'},
  {id: 4, name: 'course3'}
];

app.get('/', (req, res) => {
  res.send(`<h1 style="color:green">We\'re having a good time tonight</h1>`)
})

app.get('/api/courses', (req, res) => {
  res.send(courses)
})

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message)
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course)
  res.send(course)
});

app.put('/api/courses/:id', (req, res) => {
  // look up the course
  // If the course doesn't exist return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('These are not the droids you were looking for')
  // Validate
  // If invalid, return 400 - Bad request
  const schema = {
    name: Joi.string().min(3).required()
  }

  const { error } = validateCourse(req.body);
// result.error

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // Update course
  // return the updated course
  course.name = req.body.name;
  res.send(course)
})

app.delete('/api/courses/:id', (req,res) => {
  // Look up the course
  // Not existing, return 404
  const course = courses.find(x => x.id === parseInt(req.params.id));
  if (!course) res.status(404).send('Your destiny lies with my Skywalker');

  // Delete
  const index = courses.indexOf(course)
  courses.splice(index, 1)
  // Return the same course
  res.send(course)
})

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
// cannot use {}	
  const course = courses.find(c => c.id === parseInt(req.params.id))
  // 404 object not found, client asks for a service not found on server
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course)
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  }
  return Joi.validate(course, schema)
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`)
})
