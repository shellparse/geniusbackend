// database helper methods
const { connect, get, close } = require('../database/connection.js')
const { validateDepartments, validateEmployees } = require('../database/validators')

// database collections definition
let hrDb
let collections
let employeesCol
let departmentsCol

// connect to the database
connect(async (err) => {
    // on successful connection
    if (!err) {
        hrDb = get().db('hr')
        collections = hrDb.listCollections().toArray()
        // if first time, create collections in the database and validators
        if (collections.length === 0) {
            employeesCol = await hrDb.createCollection('employees', validateEmployees)
            departmentsCol = await hrDb.createCollection('departments', validateDepartments)
        } else if (collections.length === 2) {
            // otherwise retrieve existing collections
            employeesCol = hrDb.collection('employees')
            departmentsCol = hrDb.collection('departments')
        }
    } else {
        throw new Error('could not setup database')
    }
})

// CRUD operations

function createEmployee (employee) {
    // create employee using default values
    const { password = 'Password123#', status = true, role = 'user'} = employee
    return employeesCol.insertOne({...employee, password, status, role})
}