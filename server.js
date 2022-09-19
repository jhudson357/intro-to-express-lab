// import modules
import express from 'express'
import { formula1Drivers } from './data/formula-1-data.js';

// create express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')

// mount middleware (app.use)

// mount routes

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/formula1', function(req, res) {
  res.render('formula1/index', {
    formula1Drivers: formula1Drivers
  })
})

// tell teh app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})