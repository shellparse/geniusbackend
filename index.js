// app initialization
const app = require('express')()
const router = require('./api/routes')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(router)

// open the database connection on startup and start listening
app.listen(process.env.PORT || 3000, () => {
  console.log('server is listening')
})