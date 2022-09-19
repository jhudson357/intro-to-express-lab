// import modules
import express from 'express'
import { formula1 } from './data/formula-1-data.js';

// create express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')

// mount middleware (app.use)

// mount routes

// app.get('/', function(req, res) {
//   res.send('<h1>hello, james!</h1>')
// })

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/formula1', function(req, res) {
  res.render('forumla1/index', {
    formula1: formula1
  })
})

// tell teh app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})