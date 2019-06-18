const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const members = require('./middleware/Members')
const logger = require('./middleware/logger')

const app = express()
const PORT = process.env.PORT || 4000

// Init middleware
//app.use(logger)

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage route
app.get('/', (req, res) => 
  res.render('index', {
  title: 'Member App',
  members
  })
)
console.log(members)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
