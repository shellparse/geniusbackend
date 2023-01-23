// database helper methods
const { connect, get, close } = require('../database/connection.js')

// database collections definition
let hrDb
let collections
// database setup

connect(async (err)=>{
    // on successful connection
    if (!err){
        hrDb = get().db('hr')
        collections = hrDb.listCollections().toArray()
        // first time setup create collections in the database
        if(collections.length===0) {

        } else if (collections.length === 3){
        // otherwise retrieve existing collections
        }
    } else {
        throw new Error('could not setup database')
    }
})