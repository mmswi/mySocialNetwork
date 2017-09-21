const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// express app router
const app = express()
// connecting to db
const db = mongoose.connect('mongodb://localhost/mySocialNewtowk')
// the app models
const userModel = require('app/models/userModel')
// the models used in all the app
const usersRouter = require('./app/routes/usersRoutes')(userModel)
// checking db connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('we are connected')
})

// middlewares
// bodyParser is a module used for the post requests, in order to understand the data it receives from req
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) // if the req has any json in the body, it will add it to req.body

let port = process.env.PORT || 3000

// the actual routes
app.use('/api/users', usersRouter)
app.get('/', (req, res) => {
  res.send('welcome to my API')
})

app.listen(port, () => {
  console.log('Running on the port ' + port)
})
