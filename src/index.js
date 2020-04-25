const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3333

app.use('/', routes)
app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
  console.log('app running @ port: ' + port)
})
