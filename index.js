require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// Allows us to use res.json
app.use(express.json())

// Allows access from all origins
app.use(cors())

// Bodyparser middleware
app.use(express.urlencoded({extended: false}))
// Controller middleware
app.use('/api', require('./controllers/user'))
app.use('/wiki', require('./controllers/wikiContent'))
app.use('/theory', require('./controllers/theory'))

app.listen(process.env.PORT || 8000, () => {
  console.log('Smooth JAZZ! V98-8000')
})