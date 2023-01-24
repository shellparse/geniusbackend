// collections validation rules
const validateEmployees = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            additionalProperties: false,
            required: ['firstName', 'LastName', 'password', 'phoneNumber', 'email'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                firstName: {
                    bsonType: 'string'
                },
                lastName: {
                    bsonType: 'string'
                },
                password: {
                    bsonType: 'string'
                },
                phoneNumber: {
                    bsonType: 'string'
                },
                manager: {
                    bsonType: 'objectId'
                },
                department: {
                    bsonType: 'array',
                    items:{
                        bsonType: 'objectId'
                    }
                },
                email: {
                    bsonType: 'string'
                },
                status: {
                    bsonType: 'bool'
                },
                role: {
                    bsonType: 'string'
                }
            }
        }
    }
}

const validateDepartments = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            additionalProperties: false,
            required: ['name'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                name: {
                    bsonType: 'string'
                },
                status: {
                    bsonType: 'bool'
                }
            }
        }
    }
}

module.exports = {
    validateEmployees,
    validateDepartments
}