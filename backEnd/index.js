// establish dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const skydiveRoutes = require('./routes/skydives')
app.get('/', (req, res) => {
  res.send(' hello from  MAIN MAIN ...root route ....')
})
app.use('/api/skydives', skydiveRoutes)

// Listining port
app.listen(port, () => {
  console.log('The BOOK Skydiving server is running at port 3001 .......')
})
