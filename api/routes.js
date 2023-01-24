const { createEmployee } = require('../services/service')
const express = require('express')
const router = express.Router()
router.get('/', (req, res)=>{
    res.send('this is genius')
})
router.post('/employee',(req, res)=>{
    res.json(createEmployee(req.body))
})

module.exports = router