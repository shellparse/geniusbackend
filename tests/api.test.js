const request = require('supertest')
const server = require('../index')
const {connect} = require('../database/connection')

beforeAll(connect())
test('the server is responding', async ()=>{
   await request(server).get('/').then(response=>{
        expect(response.text).toBe('this is genius')
    })
})