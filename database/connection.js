require('dotenv').config()

// setting up database connection 
const { MongoClient } = require('mongodb')
let client
// if in development connect to mongo memory server otherwise use live database on mongo atlas
async function connect (callback) {
  if (process.env.NODE_ENV === 'development') {
    const { MongoMemoryServer } = require('mongodb-memory-server')
    const mongod = await MongoMemoryServer.create()
    client = new MongoClient(mongod.getUri())
    console.log(`local mongodb: ${mongod.getUri()}`)
  } else {
    client = new MongoClient(process.env.mongo_URI)
  }
  client.connect().then((client)=>console.log('connected to db'),(error)=>console.log(error))
//   client.connect((err, client) => {
//     if (err)callback(err)
//     console.log('connected to db')
//   })
  callback()
}

function get () {
  return client
}

function close () {
  client.close()
}

module.exports = {
  connect,
  get,
  close
}