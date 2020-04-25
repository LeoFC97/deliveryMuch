const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3333
const host = '0.0.0.0'

app.use('/', routes)
app.use(cors())
app.use(bodyParser.json())

app.listen(port, host, () => {
  console.log('app running @ port: ' + port)
})
